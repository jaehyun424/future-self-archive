import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import type { SessionData } from "@/lib/types";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/vault")) {
    const response = NextResponse.next();
    const session = await getIronSession<SessionData>(request, response, {
      password: process.env.IRON_SESSION_SECRET as string,
      cookieName: "fsa-session",
    });

    if (!session.isOwner) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/vault/:path*"],
};
