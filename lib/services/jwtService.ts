import jwt from 'jsonwebtoken';
import { CustomJWTPayload } from '../types';

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret_key';
const ACCESS_TOKEN_EXPIRY = '15m';
const REFRESH_TOKEN_EXPIRY = '7d';

export class JWTService {
  static generateAccessToken(payload: Omit<CustomJWTPayload, 'exp'>): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });
  }

  static generateRefreshToken(payload: Omit<CustomJWTPayload, 'exp'>): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });
  }

  static verifyToken(token: string): CustomJWTPayload | null {
    try {
      return jwt.verify(token, JWT_SECRET) as CustomJWTPayload;
    } catch (error) {
      console.error('Token verification failed:', error);
      return null;
    }
  }

  static decodeToken(token: string): CustomJWTPayload | null {
    return jwt.decode(token) as CustomJWTPayload | null;
  }

  static refreshAccessToken(refreshToken: string): string | null {
    const decoded = this.verifyToken(refreshToken);
    if (!decoded) return null;

    // Create a new access token with the same payload
    const { userId, email, role } = decoded;
    return this.generateAccessToken({ userId, email, role });
  }
}
