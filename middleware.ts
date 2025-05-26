// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/dashboard(.*)', // protect dashboard area
    '/history(.*)',   // other protected routes
    '/api/(.*)',      // protect API routes
  ],
};
