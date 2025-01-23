import { ReactNode } from 'react';

export interface LoadingProps {
  children: ReactNode;
  fallback: ReactNode;
  isLoading: boolean;
}
