import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { MenuItem, RestaurantInfo } from '../backend';

export function useMenuItems() {
  const { actor, isFetching } = useActor();

  return useQuery<MenuItem[]>({
    queryKey: ['menuItems'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMenuItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useRestaurantInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<RestaurantInfo | null>({
    queryKey: ['restaurantInfo'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getRestaurantInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSpecialties() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['specialties'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSpecialties();
    },
    enabled: !!actor && !isFetching,
  });
}
