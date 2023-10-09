import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Hello Users, Next.js!</h1>
            {
                Array(10).fill(0).map((_, i) => (
                    <div key={i}>
                        <Link className="underline" href={`/dashboard/users/${i}`}>User {i}</Link>
                    </div>
                ))
            }
        </div>
    )
}
