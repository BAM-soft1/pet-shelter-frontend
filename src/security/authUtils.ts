import axios from "axios";
import { API_URL } from "../settings";
import type { LoginRequest, RegisterRequest, AuthResponse, AuthUser } from "../types/types";

const AUTH_URL = `${API_URL}/auth`;

// Configure axios to include credentials (cookies) for refresh token
const authAxios = axios.create({
  baseURL: AUTH_URL,
  withCredentials: true,
});

export interface LoginResponse {
  user: AuthUser;
  token: string;
  expiresInSeconds: number;
}

export const authProvider = {
  async signIn(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await authAxios.post<AuthResponse>("/login", credentials);
    const authData = response.data;

    // Get user info from the token or make a separate call if needed
    // For now, we'll decode basic info from the response
    // You might need to add a /me endpoint to get full user details
    return {
      token: authData.accessToken,
      expiresInSeconds: authData.expiresInSeconds,
      user: {
        id: 0, // Will be populated from /me endpoint
        email: credentials.email,
        firstName: "",
        lastName: "",
        phone: null,
        isActive: true,
        role: "adopter",
      },
    };
  },

  async register(userData: RegisterRequest): Promise<AuthUser> {
    const response = await authAxios.post<AuthUser>("/register", userData);
    return response.data;
  },

  async logout(token: string): Promise<void> {
    await authAxios.post("/logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  async getCurrentUser(token: string): Promise<AuthUser> {
    const response = await axios.get<AuthUser>(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    return response.data;
  },
};
