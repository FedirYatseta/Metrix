export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/order",
    "/settings",
    "/inventory",
    "/conversation",
    "/customer",
  ],
};
