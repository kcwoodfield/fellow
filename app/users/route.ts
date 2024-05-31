import { NextResponse } from 'next/server';

/**
 * Handles the GET request for the users route.
 * @returns A JSON response with the message "Hello from users".
 */
export function GET() {
  return NextResponse.json({ message: 'Hello from users' });
}