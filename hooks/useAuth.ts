import { refreshToken, signIn, signOut } from '@/apis';
import { LoginPayload } from '@/types';
import { useQueryClient } from '@tanstack/react-query';

export function useAuth() {
  const queryClient = useQueryClient();

  async function logIn(payload: LoginPayload) {
    const { user } = await signIn(payload);
    queryClient.setQueryData(['profile'], user);
  }

  function logOut() {
    queryClient.setQueryData(['profile'], null);
    signOut();
  }

  return { logIn, signIn, logOut, refreshToken };
}
