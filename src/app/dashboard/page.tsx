'use client';


import {useSession} from "next-auth/react";

export default function Page() {
    const session = useSession();
    console.log(session);
    return (
        <div>
        <h1>Hello Dashboard, Next.js!</h1>
        </div>
    )
}