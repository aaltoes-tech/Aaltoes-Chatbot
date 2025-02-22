import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      quota: number;
      active: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    role: string;
    quota: number;
    active: boolean;
  }
}
