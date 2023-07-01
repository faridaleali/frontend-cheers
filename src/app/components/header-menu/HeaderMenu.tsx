import Link from "next/link";
import Logo from "../logo/Logo";

export default function HeaderMenu() {
    return (
        <div className="flex items-center justify-between ng-gray-100 p-4">
            <Logo />
            <ul className="flex space-x-4">
                <li>
                    <Link href="">Nosotros</Link>
                </li>
                <li>
                    <Link href="">Delivery</Link>
                </li>
                <li>
                    <Link href="">Call Cheers</Link>
                </li>
            </ul>
        </div>
    )
}