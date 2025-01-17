import { ReactNode } from 'react';

interface LoadingProps {
  children: ReactNode;
  fallback: ReactNode;
  isLoading: boolean;
}
export function Loading({ children, fallback, isLoading }: LoadingProps) {
  return (
    <>
      {!isLoading && children}
      {isLoading && fallback}
    </>
  );
}
