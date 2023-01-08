import * as actionTypes from '../action';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from 'config/firebase';

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

const accountReducer = (
  state = {
    isLogin: null,
    id: '',
    email: '',
    password: '',
    name: '',
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
