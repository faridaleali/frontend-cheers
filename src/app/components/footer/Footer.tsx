export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center bg-black">
            <div className="flex flex-row items-center justify-center">
                <img src="./roundLogo.svg" alt="" width={150} />
            </div>
            <div className="flex flex-row items-center justify-center mt-20 mb-20">
                <p className="text-white">© Cheer’s pollo frito - 2019</p>
            </div>
        </div>
    )
}