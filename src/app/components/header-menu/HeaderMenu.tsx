import Link from "next/link";
import Logo from "../logo/Logo";

export default function HeaderMenu() {
    return (
        <div className="flex items-center justify-between p-8 bg-header-menu">
            <Logo />
            <ul className="flex space-x-4">
                <li>
                    <Link className="text-gray-500 hover:text-gray-100 transition duration-300" href="">Nosotros</Link>
                </li>
                <li>
                    <Link className="text-gray-500 hover:text-gray-100 transition duration-300" href="">Delivery</Link>
                </li>
                <li>
                    <Link className="text-gray-500 hover:text-gray-100 transition duration-300" href="">Call Cheers</Link>
                </li>
            </ul>
        </div>
    )
}