import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    access_token: string
    id_token: string
    roles: string[]
    error?: string
  }
}

import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
  interface JWT {
    access_token: string
    refresh_token: string
    id_token: string
    decoded: {
      realm_access: {
        roles: string[]
      }
    }
    expires_at: number
    error?: string
  }
}
