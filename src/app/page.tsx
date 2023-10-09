import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1 className="mx-auto text-white font-medium">Hello World</h1>
        <Link href={"/dashboard"} className="underline">Dashboard</Link>
    </div>
  )
}
