import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-black text-center py-6 text-white">
      <div className="bg-custom-yellow py-2">
        <p className="text-sm text-black font-bold uppercase">Matando el bajón est.2023</p>
      </div>
      <div className="flex flex-col items-center mt-4 mb-8">
        <Image src="/roundLogo.svg" alt="Cheer’s pollo frito" width={100} height={100} />
      </div>
      <p className="text-sm">
        © Cheer’s pollo frito - {new Date().getFullYear()}
      </p>
    </div>
  );
}
