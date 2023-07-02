export default function YellowBannerMain() {
    return (
        <>
            <div className="flex items-center justify-between bg-yellow-main">
                <div className="flex flex-row items-center justify-center mx-8">
                    <div className="flex flex-row items-center justify-center">
                        <img src="./seguilo.svg" alt="Texto" className="lg:w-auto md:w-3/4 sm:w-1/2 xs:w-1/2" />
                    </div>
                    <div className="md:flex flex-row items-center justify-center mx-8">
                        <img src="./arrows.svg" alt="Pollo" className="lg:w-auto md:w-3/4 sm:w-1/2 xs:w-1/2" />
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center mx-8">
                    <ul className="flex flex-row items-center justify-center">
                        <li className="mx-4">
                            <img src="./whatsapp.svg" alt="WhatsApp" className="lg:w-auto md:w-1/4 sm:w-1/4 xs:w-1/4" />
                        </li>
                        <li className="mx-4">
                            <img src="./instagram.svg" alt="Instagram" className="lg:w-auto md:w-1/4 sm:w-1/4 xs:w-1/4" />
                        </li>
                        <li className="mx-4">
                            <img src="./facebook.svg" alt="Facebook" className="lg:w-auto md:w-1/4 sm:w-1/4 xs:w-1/4" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
