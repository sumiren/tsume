import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  ignoredRoutes: ['/architecture-test'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
