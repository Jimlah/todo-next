'use client';

import React, {useEffect} from "react";
import Link from "next/link";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Layout({children, user, post}: { children: React.ReactNode, user: React.ReactNode, post: React.ReactNode }) {

    const router = useRouter();
    const {status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/sign-in");
        }
    }, [status, router]);

    return (
        <div className="flex flex-col h-screen">
            <div>
                <ul>
                    <li>
                        <Link className="underline" href="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link className="underline" href="/dashboard/settings">
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link className="underline" href="/dashboard/users">
                            Users
                        </Link>
                    </li>
                </ul>
            </div>
            {children}
        </div>
    )
}