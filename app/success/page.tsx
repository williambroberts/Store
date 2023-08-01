"use client"
import Link from "next/link";
import { useBearStore } from "../../zustand/storePersist";

export default function SuccessPage() {
    const {bears,addABear}=useBearStore()
    return (
        <div className="mt-20">
                <div>{bears}</div>
            <button
            onClick={()=>addABear()}
            >add a 🐻</button>
            <Link href={"/"}>Back home</Link>
        </div>
    )
}