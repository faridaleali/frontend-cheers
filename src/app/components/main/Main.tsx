import Image from 'next/image';

export default function Main() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center pt-6 pb-6">
      <div className="flex flex-col xs:items-center justify-end mx-8">
        <Image src="/Texto.svg" alt="Texto" width={500} height={300} className="mb-4" />
      </div>
      <div className="flex flex-col xs:items-center justify-end mx-8">
        <Image src="/Pollo.svg" alt="Pollo" width={500} height={300} className="mb-4" />
      </div>
    </div>
  );
}
