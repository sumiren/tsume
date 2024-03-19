import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

const isPublicRoute = createRouteMatcher(['/architecture-test', '/sign-in', '/sign-in/callback']);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) {
    return;
  }

  auth().protect();
});
