"use client";

import React from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Page() {

    const router = useRouter();

    const handleSignIn = () => {
        signIn('credentials', {redirect: false});

        router.push('/dashboard');
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={handleSignIn} className="px-4 py-2 rounded-md bg-blue-500 mt-4">Login</button>
        </div>
    );
}

