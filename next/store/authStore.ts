import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import api from "@/lib/api";

type AuthState = {
  loginInfo: Record<string, any> | LoginResponse;
  login: (params: any) => any;
  register: (params: any) => any;
  logout: () => void;
};

export type LoginResponse = {
  access_token: string;
  created_at_utc: Date;
  expires_at_utc: Date;
  username: string;
};

const initialLoginInfo = {};

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        loginInfo: initialLoginInfo,
        login: async (params) => {
          const formData = new FormData();
          formData.append("username", params.email);
          formData.append("password", params.password);
          const response = await api
            .post<LoginResponse>("/login", formData)
            .catch((error) => {
              return error;
            });
          set({ loginInfo: response });
          return response;
        },
        register: async (params) => {
          return await api.post("/register", {
            username: params.email,
            email: params.email,
            password: params.password,
          });
        },
        logout: () => {
          set((state) => ({ ...state, loginInfo: initialLoginInfo }));
        },
      }),
      { name: "AuthStore" },
    ),
  ),
);

export default useAuthStore;
