import { ArrowLeft } from 'react-feather';

export function ButtonBack({ ...rest }) {
  return (
    <button {...rest}>
      <ArrowLeft size={18} strokeWidth={3} color="#fff" />
    </button>
  );
}
