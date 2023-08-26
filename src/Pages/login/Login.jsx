import React from 'react'
import './login.css'
import { auth, provider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true); // If the person logs out and again tries to access the website, they will not have to login again.
        setIsAuth(true);
        navigate('/');
      })
      .catch((error) => {
        if (error.code === 'auth/cancelled-popup-request') {
          // Handle popup cancellation gracefully, for example, by showing a message to the user.
          console.log('Popup request was canceled.');
        } else {
          // Handle other errors, such as network issues or Firebase configuration issues.
          console.error('Error signing in with Google:', error);
        }
      });
  };
  
  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;