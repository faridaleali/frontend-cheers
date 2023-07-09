export default function Footer() {
    return (
        <footer className="bg-black text-center py-12 text-white">
           
            <div className="mb-8">
                <img src="./roundLogo.svg" alt="Cheer’s pollo frito" className="inline-block mb-4 h-16 w-auto" />
            </div>
            <p className="text-sm">
                © Cheer’s pollo frito - {new Date().getFullYear()}
            </p>
        </footer>
    );
}
