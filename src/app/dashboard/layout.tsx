'use client';

import React from "react";
import Link from "next/link";

export default function Layout({children, user, post}: { children: React.ReactNode, user: React.ReactNode, post: React.ReactNode }) {
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