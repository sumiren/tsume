import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/architecture-test'],
  ignoredRoutes: ['/architecture-test']
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
