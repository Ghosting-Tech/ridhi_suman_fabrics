import { getToken } from "next-auth/jwt";

const secret = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET;

export async function checkAuthorization(request) {
  const token = await getToken({ req: request, secret });
  // console.log("checkAuthorization token", token)
  if (!token) {
    return "Unauthorized";
  }

  return token.role === "admin" ? true : false;
}
