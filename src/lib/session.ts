import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import type { SessionData } from "./types";

export const sessionOptions = {
  password: process.env.IRON_SESSION_SECRET as string,
  cookieName: "fsa-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax" as const,
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  return getIronSession<SessionData>(cookieStore, sessionOptions);
}
