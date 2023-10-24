import create from 'zustand';

interface SignupState {
  signupState: { [key: string]: string };
  setSignupState: (state: { [key: string]: string }) => void;
  createAccount: () => void;
}

export const useSignupStore = create<SignupState>((set) => ({
  signupState: {},
  setSignupState: (state) => set({ signupState: state }),
  createAccount: () => {
    // Implement your signup logic here
  },
}));

interface AuthState {
    loginState: { [key: string]: string };
    setLoginState: (state: { [key: string]: string }) => void;
    authenticateUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    loginState: {},
    setLoginState: (state) => set({ loginState: state }),
    authenticateUser: () => {
        // Implement your authentication logic here
    },
}));