import Modal from "@/lib/Modal";

export default function Page({ params }:{params: {id: string}}) {
    return (
        <Modal screen="small">
            <div className="p-6">
                <h1>Hello Modal {params.id}</h1>
            </div>
        </Modal>
    )
}