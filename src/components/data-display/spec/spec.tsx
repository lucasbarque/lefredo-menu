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

import { SpecProps } from './spec.types';

export function Spec({ keySpec, size = 16 }: SpecProps) {
  const icons: Record<DishSpecKey, ReactNode> = {
    cold: <IconSnowflake size={size} />,
    highlighted: '',
    hot: <IconFlame size={size} />,
    lactfree: <IconMilkOff size={size} />,
    natural: <IconPlant2 size={size} />,
    organic: <IconLeaf size={size} />,
    suggarfree: <IconCandyOff size={size} />,
    vegan: <IconSeeding size={size} />,
    vegetarian: <IconMeatOff size={size} />,
  };

  if (keySpec === 'highlighted') return;

  return icons[keySpec];
}
