
export default function YellowBannerMain() {
    return (
        <>
            <div className="flex items-center justify-between bg-yellow-main">
                <div className="flex flex-row items-center justify-center mx-8">
                    <div className="flex flex-row items-center justify-center">
                        <img src="./seguilo.svg" alt="Texto" className="mb-4" />
                    </div>
                    <div className="flex flex-row items-center justify-center mx-8">
                        <img src="./arrows.svg" alt="Pollo" className="mb-4" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mx-8">
                    <ul className="flex flex-row items-center justify-center">
                        <li className="mx-4">
                            <img src="./whatsapp.svg" alt="Twitter" className="mb-4" />
                        </li>
                        <li className="mx-4">
                            <img src="./instagram.svg" alt="Instagram" className="mb-4" />
                        </li>
                        <li className="mx-4">
                            <img src="./facebook.svg" alt="Facebook" className="mb-4" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
