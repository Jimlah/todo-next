import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Layout({children, user}: { children: React.ReactNode, user: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            {user}
            {children}
        </div>
    )
}