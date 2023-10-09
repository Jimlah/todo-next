import NextAuth from "next-auth"
import options from "@/pages/api/auth/authoptions";
import {NextApiRequest, NextApiResponse} from "next";


const handler = NextAuth(options);

// export {
//     handler as GET,
//     handler as POST,
// }

export default async function auth(req: NextApiRequest, res: NextApiResponse) {


    return await NextAuth(req, res, options);
}