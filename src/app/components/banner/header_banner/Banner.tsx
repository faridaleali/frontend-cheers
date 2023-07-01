export default function Banner() {
    return (
        <>
            <section className="bg-banner">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="w-full lg:w-8/12 xs:px-4 lg:px-0">
                            <img src="./altobajon.svg" alt="" />
                        </div>
                        <div className="w-full lg:w-4/12 xs:px-4 lg:px-0">
                            <img src="./caja.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
