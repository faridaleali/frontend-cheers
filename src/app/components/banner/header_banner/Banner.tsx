import Image from 'next/image';

export default function Banner() {
  return (
    <>
      <section className="bg-banner">
        <div className="mx-auto px-4 pt-8 bg-cover bg-center bg-opacity-75" style={{ backgroundImage: 'url(/Rectangle.png)' }}>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-8/12 px-4 pt-8">
              <div className="mx-auto max-w-full md:max-w-2xl">
                <Image src="/altobajon.svg" alt="" layout="responsive" width={800} height={600} />
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:w-6/12 xl:w-4/12 px-4 mt-4 md:mt-0">
              <div className="hidden md:block">
                <div className="mx-auto max-w-full">
                  <Image src="/caja.svg" alt="" layout="responsive" width={300} height={300} />
                </div>
              </div>
              <div className="md:hidden">
                <div className="mx-auto max-w-full">
                  <Image src="/packaging.png" alt="" layout="responsive" width={300} height={300} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
