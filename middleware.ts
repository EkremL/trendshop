// export { auth as middleware } from "@/auth";

// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"], // Middleware'in uygulanacağı yollar
//   runtime: "nodejs", // Middleware'in Edge yerine Node.js runtime'da çalışmasını sağlar
// };

import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const { auth: middleware } = NextAuth(authConfig);
