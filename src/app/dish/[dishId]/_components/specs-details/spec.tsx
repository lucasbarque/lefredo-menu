import { ReactNode } from 'react';

import { DishSpecKey } from '@/http/api';
import {
  IconCandyOff,
  IconFlame,
  IconLeaf,
  IconMeatOff,
  IconMilkOff,
  IconPlant2,
  IconSeeding,
  IconSnowflake,
} from '@tabler/icons-react';

export interface SpecProps {
  title: string;
  keySpec: DishSpecKey;
}

export function Spec({ title, keySpec }: SpecProps) {
  const icons: Record<DishSpecKey, ReactNode> = {
    cold: <IconSnowflake size={16} />,
    highlighted: '',
    hot: <IconFlame size={16} />,
    lactfree: <IconMilkOff size={16} />,
    natural: <IconPlant2 size={16} />,
    organic: <IconLeaf size={16} />,
    suggarfree: <IconCandyOff size={16} />,
    vegan: <IconSeeding size={16} />,
    vegetarian: <IconMeatOff size={16} />,
  };

  if (keySpec === 'highlighted') return;

  return (
    <div className='flex h-[2.125rem] items-center gap-1'>
      <span className='text-text-default'>{icons[keySpec]}</span>
      <span className='text-title-default text-sm font-medium'>{title}</span>
    </div>
  );
}
