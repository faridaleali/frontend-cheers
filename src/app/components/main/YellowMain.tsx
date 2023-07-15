import Image from 'next/image';

export default function YellowBannerMain() {
  return (
    <div className="flex items-center justify-between bg-yellow-main">
      <div className="flex flex-row items-center justify-center mx-8">
        <div className="flex flex-row items-center justify-center">
          <Image
            src="/seguilo.svg"
            alt="Texto"
            width={500}
            height={300}
            className="w-full md:w-auto sm:w-2/3 xs:w-1/2 mx-auto sm:mx-0"
          />
        </div>
        <div className="md:flex flex-row items-center justify-center mx-8">
          <Image
            src="/arrows.svg"
            alt="Pollo"
            width={500}
            height={300}
            className="w-full md:w-auto sm:w-2/3 xs:w-1/2"
          />
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center mx-8">
        <ul className="flex flex-row items-center justify-center">
          <li className="mx-4">
            <Image
              src="/whatsapp.svg"
              alt="WhatsApp"
              width={50}
              height={50}
              className="w-full"
            />
          </li>
          <li className="mx-4">
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={50}
              height={50}
              className="w-full"
            />
          </li>
          <li className="mx-4">
            <Image
              src="/facebook.svg"
              alt="Facebook"
              width={50}
              height={50}
              className="w-full"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
