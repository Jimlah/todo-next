"use client";

import React, {useEffect} from "react";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Page() {

    const handleSignIn = async () => {
       await signIn('credentials', {redirect: false, email: 'abdullahij@gmail.com', password: 'password'});
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={handleSignIn} className="px-4 py-2 rounded-md bg-blue-500 mt-4">Login</button>
        </div>
    );
}

