import * as actionTypes from '../action';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db, storage } from 'config/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

// Thunk Async Function - RESTORE_SESSION
export function restoreSession(action) {
  return async function restoreSessionThunk(dispatch, getState) {
    let data = getState().accountReducer;

    const docSnapshot = await getDoc(doc(db, 'admins', action.data));
    if (docSnapshot.exists()) {
      data = {
        username: action.data,
        ...docSnapshot.data()
      };
    }

    dispatch({ type: actionTypes.RESTORE_SESSION, data: data });
  };
}

// Thunk Async Function - CREATE_SESSION
export function createSession(action) {
  return async function createSessionThunk(dispatch, getState) {
    if (!action.isLoginProcess && action.data.username.length > 0 && action.data.password.length > 0) {
      action.setIsLoginProcess(true);

      const docSnapshot = await getDoc(doc(db, 'admins', action.data.username.toString()));

      if (docSnapshot && docSnapshot.exists()) {
        try {
          signInWithEmailAndPassword(auth, docSnapshot.data().email, action.data.password).then((userCredential) => {
            if (userCredential && userCredential.user) {
              action.showAlertToast('success', 'Berhasil Login akun');
              action.clearLoginForm();
            }
          });
        } catch (error) {
          if (error.code === 'auth/wrong-password') {
            action.showAlertToast('error', 'Password yang dimasukkan salah');
          } else {
            action.showAlertToast('error', `${error.code} - ${error.message}`);
          }
          action.clearLoginForm();
        }
      } else {
        action.showAlertToast('error', 'Username yang dimasukkan salah');
        action.clearLoginForm();
      }
    } else if (action.data.username.length <= 0 || action.data.password.length <= 0) {
      action.showAlertToast('warning', 'Silahkan lengkapi form login dengan benar');
      action.clearLoginForm();
    } else {
      action.showAlertToast('info', 'Login akun sedang di proses, mohon tunggu beberapa saat');
    }
  };
}

export function updateIdentity(action) {
  return async function updateIdentityThunk(dispatch, getState) {
    if (action.data !== null) {
      let data = getState().accountReducer;

      let result;
      if (action.data['photoUrl']) {
        try {
          const snapshot = await uploadBytes(ref(storage, `/admin-profiles/${action.username}`), action.data.photoUrl);
          result = await getDownloadURL(snapshot.ref);
        } catch (e) {
          result = null;
        }
      } else {
        result = ' ';
      }

      if (result) {
        if (action.data['photoUrl']) {
          action.data = {
            ...action.data,
            photoUrl: result
          };
        }

        await updateDoc(doc(db, 'admins', action.username), action.data)
          .catch((error) => {
            action.setIsUpdateProcess(false);
            action.showAlert('warning', error.message);
          })
          .then(() => {
            data = {
              ...data,
              ...action.data
            };
            dispatch({ type: actionTypes.RESTORE_SESSION, data: data });
            action.showAlert('success', 'Data profil berhasil diperbarui');
            action.setIsUpdateProcess(false);
            action.handleClose();
          });
      } else {
        action.showAlert('warning', 'Terjadi kesalahan, silahkan coba kembali');
        action.setIsUpdateProcess(false);
      }
    }
  };
}

const accountReducer = (
  state = {
    isLogin: null,
    uid: '',
    username: '',
    password: '',
    fullname: '',
    email: '',
    photoUrl: '',
    role: ''
  },
  action
) => {
  switch (action.type) {
    case actionTypes.CLEAR_SESSION:
      return {
        ...state,
        isLogin: false
      };

    case actionTypes.RESTORE_SESSION:
      return {
        ...action.data,
        isLogin: true
      };

    default:
      return state;
  }
};

export default accountReducer;
