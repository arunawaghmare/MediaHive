import { authOptions } from "@/lib/authoption";
import NextAuth from "next-auth";

import { NextRequest } from "next/server";

const handler = NextAuth(authOptions);

export function GET(req: NextRequest) {
  return handler(req);
}

export function POST(req: NextRequest) {
  return handler(req);
}
