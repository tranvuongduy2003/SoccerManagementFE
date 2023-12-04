import { refreshToken, signIn, signOut } from '@/apis';
import { QUERY_KEY } from '@/constants';
import { LoginPayload } from '@/interfaces';
import { useQueryClient } from '@tanstack/react-query';

export function useAuth() {
  const queryClient = useQueryClient();

  async function logIn(payload: LoginPayload) {
    const { user } = await signIn(payload);
    queryClient.setQueryData([QUERY_KEY.profile], user);
  }

  function logOut() {
    queryClient.setQueryData([QUERY_KEY.profile], null);
    signOut();
  }

  return { logIn, signIn, logOut, refreshToken };
}
