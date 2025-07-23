import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserRole = 'job_seeker' | 'employer' | null;

interface UserState {
  isAuthenticated: boolean;
  user: {
    id: string | null;
    email: string | null;
    role: UserRole;
  } | null;
  onboardingStep: 'role' | 'profile' | 'complete';
  login: (user: { id: string; email: string }) => void;
  logout: () => void;
  setRole: (role: UserRole) => void;
  completeProfile: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      onboardingStep: 'role',
      login: (userData) => set({ 
        isAuthenticated: true, 
        user: { ...userData, role: null },
        onboardingStep: 'role' 
      }),
      logout: () => set({ isAuthenticated: false, user: null, onboardingStep: 'role' }),
      setRole: (role) => set((state) => ({
        user: state.user ? { ...state.user, role } : null,
        onboardingStep: 'profile',
      })),
      completeProfile: () => set({ onboardingStep: 'complete' }),
    }),
    {
      name: 'user-storage', // unique name for localStorage key
    }
  )
);
