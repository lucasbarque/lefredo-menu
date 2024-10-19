import { ArrowLeft } from 'react-feather';

export function ButtonBack({ ...rest }) {
  return (
    <button {...rest}>
      <ArrowLeft color="#fff" />
    </button>
  );
}
