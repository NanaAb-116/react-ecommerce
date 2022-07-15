import { Link } from 'react-router-dom';

function Error() {
  return (
    <>
      <p>Page not found</p>
      <Link to='/'>Back Home</Link>
    </>
  );
}

export default Error;
