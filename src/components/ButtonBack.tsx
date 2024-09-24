import { ArrowLeft } from 'react-feather';
import { useNavigate, useParams } from 'react-router-dom';

export function ButtonBack({ ...rest }) {
  const navigate = useNavigate();

  const { menuId } = useParams();

  return (
    <button {...rest} onClick={() => navigate(`/?menuId=${menuId}`)}>
      <ArrowLeft color="#fff" />
    </button>
  );
}
