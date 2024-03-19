import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/architecture-test', '/sign-in', '/sign-in/callback'],
  ignoredRoutes: ['/architecture-test','/sign-in', '/sign-in/callback']
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
