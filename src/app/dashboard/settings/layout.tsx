import React from "react";

export default function Layout({children, password}: { children: React.ReactNode, password: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            {password}
            {children}
        </div>
    )
}