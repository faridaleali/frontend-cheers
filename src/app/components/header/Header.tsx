import {HeaderProps} from "@/app/interfaces/header.interface"

export default function Header({ children }: HeaderProps) {
    return (
        <div>
            {children}
        </div>
    )
}