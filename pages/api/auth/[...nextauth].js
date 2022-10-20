import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import { getFirestore } from 'firebase/firestore';

import { firebaseApp } from '../../../lib/firebase';

const firestore = getFirestore(firebaseApp);

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirestoreAdapter(firestore),
});
