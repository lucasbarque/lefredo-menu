import Image from 'next/image';

import clsx from 'clsx';

import { AdditionalsList } from '@/components/AdditionalsList';
import { ButtonBack } from '@/components/ButtonBack';
import { Chip } from '@/components/Chip';
import { Line } from '@/components/Line';
import { Slider } from '@/components/Slider';
import { Tag } from '@/components/Tag';

import { fetchWrapper } from '@/utils/fetchWrapper';

interface SectionData {
  description: string;
}

interface DishDetails {
  id: string;
  title: string;
  description: string;
  price: number;
  medias: [
    {
      id: string;
      filename: string;
    },
  ];
  section: SectionData;
  portion: string | null;
}

interface Params {
  params: {
    dishId: string;
  };
}

export default async function Page({ params }: Params) {
  const data = await fetchWrapper<DishDetails | null>(
    `/api/dish/${params.dishId}`,
  );

  console.log(data);

  const images = data?.medias.map((image) => {
    return {
      title: image.id,
      url: image.filename,
    };
  });

  return (
    <div className="z-0">
      <ButtonBack className="absolute left-5 top-8 z-40 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary" />

      {images && images.length > 0 && <Slider images={images} />}
      <div
        className={clsx(
          'absolute flex flex-col left-0 right-0 bottom-0 z-10  rounded-t-2xl bg-white',
          {
            'h-[67vh]': images && images.length > 0,
            'h-[100vh]': images && images.length == 0,
          },
        )}
      >
        <div
          className={clsx('pt-2 px-6', {
            'mt-3': images && images.length == 0,
          })}
        >
          {data?.portion && (
            <div className="flex items-center justify-center">
              <Tag title={data.portion} />
            </div>
          )}

          <h2 className="px-8 font-secondary font-bold text-center text-2xl text-title-default pb-2">
            {data?.title}
          </h2>
          {images && images.length > 0 && <Line />}
        </div>
        <div className=" flex-1 flex gap-4 flex-col overflow-y-auto px-6 pt-4 pb-4">
          {/* Description */}
          <p className=" text-regular-1xs text-text-default">
            {data?.description}
          </p>

          {/* Icons */}
          <div className="bg-tag-details-background w-full flex items-center gap-4 justify-center rounded-2xl">
            <div className="flex gap-1 items-center h-[2.125rem]">
              <Image src="/icon-snowflake.svg" width={17} height={17} alt="" />
              <span className="text-sm font-medium text-title-default">
                Bebida Gelada
              </span>
            </div>

            {/* <div className="flex gap-1 items-center h-[2.125rem]">
              <Image src="/icon-flame.svg" width={17} height={17} alt="" />
              <span className="text-sm font-medium text-title-default">
                Bebida Quente
              </span>
            </div> */}
            {/* <div className="flex gap-1 items-center h-[2.125rem]">
              <Image src="/icon-leaf.svg" width={17} height={17} alt="" />
              <span className="text-sm font-medium text-title-default">
                Item vegano
              </span>
            </div> */}
            {/* <div className="flex gap-1 items-center h-[2.125rem]">
              <Image src="/icon-hour.svg" width={17} height={17} alt="" />
              <span className="text-sm font-medium text-title-default">
                20 minutos
              </span>
            </div> */}
          </div>

          {/* Additionals */}
          <div>
            <h2 className="font-secondary text-title-default font-medium pb-1">
              Adicionais
            </h2>
            <AdditionalsList />
          </div>

          {/* Flavors */}
          <div>
            <h2 className="font-secondary text-title-default font-medium">
              Sabores
            </h2>
            <div className="flex gap-2 flex-wrap">
              <Chip title="Frango" isActive />
              <Chip title="Palmito" />
              <Chip title="Frango com Palmito" />
            </div>
          </div>

          {/* Observations */}
          {data?.section.description && (
            <div>
              <h2 className="font-secondary text-title-default font-medium">
                Observações
              </h2>
              <p className="text-sm text-text-default">
                {data.section.description}
              </p>
            </div>
          )}
        </div>
        <div className="px-6 text-center pb-4">
          <Line />
          <p className="text-sm pt-4 font-bold title-default">Valor</p>
          <span className="font-extrabold">
            R${' '}
            {data?.price &&
              new Intl.NumberFormat('pt-BR', {
                currency: 'BRL',
                minimumFractionDigits: 2,
              }).format(data?.price / 100)}
          </span>
        </div>
      </div>
    </div>
  );
}
