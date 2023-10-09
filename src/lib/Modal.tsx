"use client";

import React, {useRef} from "react";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import useClickOutside from "@/hooks/useClickOutside";
import {AiOutlineClose} from "react-icons/ai";

enum ModalSize {
    small = "max-w-xs",
    medium = "max-w-md",
    large = "max-w-lg",
    default = "max-w-xs",
}

interface ModalProps {
    children: React.ReactNode,
    screen: "small" | "medium" | "large",
}


export default function Modal({children, screen='small'}: ModalProps) {

    const router : AppRouterInstance  = useRouter();
    const modal : React.MutableRefObject<any> = useRef();
    useClickOutside(modal, () => router.back());

    return (
        <div className="w-full h-screen fixed top-0 left-0 z-50 backdrop-blur-sm">
            <div className={`mt-20 relative mx-auto bg-gray-700 shadow-lg rounded-md text-white ${ModalSize[screen]}`} ref={modal}>
                <button type="button" className="rounded-full p-1 bg-gray-700 text-white absolute top-0 right-0 -m-7" onClick={()=>router.back()} >
                    <AiOutlineClose className="w-6 h-6"/>
                </button>
                <div className="w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}