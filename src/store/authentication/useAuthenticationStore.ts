import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { UserDTO } from 'modules/Authentication/constants/dto';

interface Authentication {
  user: UserDTO | null;
  authenticationToken: string | undefined;
}

interface AuthenticationAction {
  actions: {
    setUser: (user: Authentication['user']) => void;
    setAuthenticationToken: (authenticationToken: Authentication['authenticationToken']) => void;
  };
}

const initialState = {
  user: null,
  authenticationToken: '',
};

const useAuthenticationStore = create<Authentication & AuthenticationAction>()(
  persist(
    immer((set) => ({
      //States
      ...initialState,

      //Actions
      actions: {
        setUser: (user) => set({ user }),
        setAuthenticationToken: (authenticationToken) => set({ authenticationToken }),
      },
    })),
    {
      name: 'Authentication',
      partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => !['actions'].includes(key))),
    },
  ),
);

export default useAuthenticationStore;
