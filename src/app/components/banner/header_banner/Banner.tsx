export default function Banner() {
    return (
        <>
            <section className="bg-banner">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="w-full lg:w-8/12 px-4">
                            <img src="./altobajon.svg" alt="" />
                        </div>
                        <div className="w-full lg:w-4/12 px-4 mt-4 lg:mt-0">
                            <img src="./caja.svg" alt="" className="hidden md:block" />
                            <img src="./packaging.png" alt="" className="md:hidden" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
