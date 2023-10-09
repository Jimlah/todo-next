import Link from "next/link";
import React from "react";

export default function Page() {
    return (<div>
        <h1>Settings</h1>
        <div>
            <ul>
                <li>
                    <Link href={"/dashboard/settings/update-password"}>
                        Change Password
                    </Link>
                </li>
            </ul>
        </div>
    </div>)
}