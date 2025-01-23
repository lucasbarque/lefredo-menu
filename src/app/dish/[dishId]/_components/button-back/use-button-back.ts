import { useRouter } from 'next/navigation';

export default function useButtonBack() {
  const router = useRouter();

  return {
    router,
  };
}
