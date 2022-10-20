import React from 'react';
import { FcGoogle } from 'react-icons/fc';

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { firebaseAuth } from '../lib/firebase';
import { useRouter } from 'next/router';

const Login = () => {
  const firebaseProvider = new GoogleAuthProvider();

  const signIn = async () => {
    const router = useRouter();

    const { user } = await signInWithPopup(firebaseAuth, firebaseProvider);
    const { refreshToken, providerData } = user;

    localStorage.setItem('user', JSON.stringify(providerData));
    localStorage.setItem('accessToken', JSON.stringify(refreshToken));

    router.push('/');
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <h1>Login</h1>
      <div className='flex justify-center items-center' onClick={signIn}>
        <FcGoogle fontSize={30} />
      </div>
    </div>
  );
};

export default Login;
