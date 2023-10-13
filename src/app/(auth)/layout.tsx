"use client";


import {ReactNode, useEffect} from "react";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

export default function Layout({children}: {children: ReactNode}): ReactNode {

    const router = useRouter();

    const {status} = useSession();

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/dashboard');
        }
    }, [router, status]);

    return (
        <>
            {children}
        </>
    )
}