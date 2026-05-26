import NextAuth, { AuthOptions } from 'next-auth';

import { oauthLogin } from '@/lib/auth/oauth-login';
import { providers } from '@/lib/auth/providers';

export const authOptions: AuthOptions = {
  providers,

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  callbacks: {
    // After a successful sign-in, synchronize the user with the backend and enrich the token with user data
    async jwt({ token, user, account }) {
      if (user && account) {
        try {
          console.log('User authenticated with provider:', {
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            name: user.name,
            email: user.email,
            image: user.image,
          });
          const userAuthenticated = await oauthLogin({
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            name: user.name,
            email: user.email,
            image: user.image,
          });

          token.id = userAuthenticated.id;
          token.name = userAuthenticated.name;
          token.role = userAuthenticated.role;
        } catch (error) {
          console.error('Erro no login OAuth:', error);
        }
      }

      return token;
    },

    // Enrich the session object with user data from the token
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.role = token.role;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
