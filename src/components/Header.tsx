import Image from 'next/image';

export function Header() {
  return (
    <div className="pt-6 px-6">
      <div className="flex justify-between items-center">
        <Image src="/logo-niura.svg" alt="" width={104} height={46} priority />
        <Image
          src="/icon-location.svg"
          alt=""
          width={44}
          height={44}
          priority
        />
      </div>
      <div className="pt-4">
        <p className="font-nunito-sans text-heading-xs-bold text-title-default">
          Olá
        </p>
        <h3 className="font-nunito-sans text-heading-md text-title-default">
          Nosso cardápio foi elaborado com muito carinho pra você, bom apetite!
        </h3>
      </div>
    </div>
  );
}
