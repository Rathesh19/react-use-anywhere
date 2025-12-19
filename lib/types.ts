import { JwtPayload } from 'jsonwebtoken';

// JWT Payload interface extending standard JWT payload
export interface CustomJWTPayload extends JwtPayload {
  userId: string;
  email: string;
  role?: string;
}

// Authentication state interface for managing JWT-based authentication
export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  user: {
    id: string;
    email: string;
    role?: string;
  } | null;
  expiresAt: number | null;
}

// Initial auth state
export const initialAuthState: AuthState = {
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  user: null,
  expiresAt: null,
};
