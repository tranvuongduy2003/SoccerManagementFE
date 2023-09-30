import { getUserProfile } from '@/apis';
import { MILLISECOND_PER_HOUR } from '@/constants';
import { User } from '@/models';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export function useProfile(options?: Partial<UseQueryOptions<User | null>>) {
  const { data: profile, ...rest } = useQuery<User | null>({
    queryKey: ['profile'],
    queryFn: () => getUserProfile(),
    retry: 0,
    staleTime: MILLISECOND_PER_HOUR * 8, // refetch in background every 8 hours
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    ...options
  });

  return { profile, ...rest };
}
