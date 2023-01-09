import * as actionTypes from '../action';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db, storage } from 'config/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

//const values
export const paths = ['sekretaris', 'guru', 'santri'];

// Thunk Async Function - RESTORE_SESSION
export function restoreSession(action) {
  return async function restoreSessionThunk(dispatch, getState) {
    let data = getState().accountReducer;
    let errorCheck = false;

    for (const path of paths) {
      try {
        const docSnapshot = await getDoc(doc(db, path, action.data)).catch(() => {});
        if (docSnapshot && docSnapshot.exists()) {
          data = { id: docSnapshot.id, ...docSnapshot.data(), role: path };
          break;
        }
      } catch (e) {
        errorCheck = true;
        break;
      }
    }

    if (!errorCheck) {
      dispatch({ type: actionTypes.RESTORE_SESSION, data: data });
      if (action.refresh) {
        switch (data.role) {
          case 'sekretaris':
            return action.navigate('/sekretaris/artikel');

          case 'guru':
            return action.navigate('/guru/artikel');

          case 'santri':
            return action.navigate('/santri/artikel');

          default:
            break;
        }
      }
    }
  };
}

// Thunk Async Function - CREATE_SESSION
export function createSession(action) {
  return async function createSessionThunk() {
    if (!action.isLoginProcess && action.data.email.length > 0 && action.data.password.length > 0) {
      action.setIsLoginProcess(true);

      await signInWithEmailAndPassword(auth, action.data.email, action.data.password)
        .then((userCredential) => {
          if (userCredential && userCredential.user) {
            action.showAlertToast('success', 'Berhasil Login akun');
            action.clearLoginForm();
          }
        })
        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            action.showAlertToast('error', 'Password yang dimasukkan salah');
          } else if (error.code === 'auth/invalid-email') {
            action.showAlertToast('error', 'Masukkan email dengan benar');
          } else if (error.code === 'auth/user-not-found') {
            action.showAlertToast('error', 'Email yang dimasukkan salah');
          } else {
            action.showAlertToast('error', `${error.code} - ${error.message}`);
          }
        });
    } else if (action.data.email.length <= 0 || action.data.password.length <= 0) {
      action.showAlertToast('warning', 'Silahkan lengkapi form login dengan benar');
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
      if (action.data['url_photo']) {
        try {
          const snapshot = await uploadBytes(ref(storage, `/profile-${action.role}/${action.id}`), action.data.url_photo);
          result = await getDownloadURL(snapshot.ref);
        } catch (e) {
          result = null;
        }
      } else {
        result = ' ';
      }

      if (result) {
        if (action.data['url_photo']) {
          action.data = {
            ...action.data,
            url_photo: result
          };
        }

        console.log('Masuk');
        await updateDoc(doc(db, action.role, action.id), action.data)
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
    id: '',
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
