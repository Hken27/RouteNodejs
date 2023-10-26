import { useNavigate } from 'react-router-dom';

const First = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3> Homepage route </h3> <button onClick={() => navigate('/about')}> Check about </button>{' '}
    </>
  );
  //   return <HalamanPertama />;
};

export default First;
