import { Link } from 'react-router-dom';
import { Box, FeaturesList, LinksList } from './Home.styled';

const Home = () => {
  return (
    <Box>
      <h3>Simple phonebook application</h3>
      <FeaturesList>
        <b>You can:</b>
        <li>add contacts</li>
        <li>remove contacts</li>
        <li>filter contacts by name</li>
      </FeaturesList>
      <LinksList>
        <li>
          <Link to={'/login'}>Sign in</Link>
        </li>
        <li>
          <Link to={'/register'}>Sign up</Link>
        </li>
      </LinksList>
    </Box>
  );
};

export default Home;
