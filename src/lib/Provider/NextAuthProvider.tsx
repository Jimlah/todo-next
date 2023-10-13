"use client";

import React, {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";
import {AppProps} from "next/app";

export default function NextAuthProvider({children}:{children: ReactNode}): ReactNode
{
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )

}