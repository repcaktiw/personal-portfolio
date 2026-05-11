import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getLocaleFromPathname } from "@/content/i18n"

export function middleware(request: NextRequest) {
  const locale = getLocaleFromPathname(request.nextUrl.pathname)

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-locale", locale)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}

