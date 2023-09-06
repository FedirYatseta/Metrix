import withAuth from "next-auth/middleware"

export default withAuth({
    callbacks: {
        authorized({ req, token }) {
            console.log('req', req)

            // `/admin` requires admin role
            if (req.nextUrl.pathname === "/signin") {
                return token?.userRole === "admin"
            }
            // `/me` only requires the user to be logged in
            return !!token
        },
    },
})
export const config = { matcher: ['/', '/order', '/settings', '/inventory', '/conversation', '/customer'] }