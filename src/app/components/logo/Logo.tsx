import Image from "next/image"

export default function Logo() {
    return (
        <div>
            <Image src="./Logo.svg" alt="logo" width={120} height={120} />
        </div>
    )
}