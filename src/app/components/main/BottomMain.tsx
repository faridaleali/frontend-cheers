import Image from 'next/image';

export default function BottomMain() {
  return (
    <div className="flex items-center justify-center lg:justify-end bg-header-bottom">
      <div className="flex flex-col items-center mx-8">
        <Image src="/roundLogo.svg" alt="Logo" width={100} height={100} className="mb-4" />
      </div>
    </div>
  );
}
