import { LoadingProps } from './loading.types';

export function Loading({ children, fallback, isLoading }: LoadingProps) {
  return (
    <>
      {!isLoading && children}
      {isLoading && fallback}
    </>
  );
}
