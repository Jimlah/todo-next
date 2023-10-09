export default function Page({ params }:{params: {id: string}}) {
    return (
        <div>
        <h1>Hello User Number {params.id} , Next.js!</h1>
        </div>
    )
}