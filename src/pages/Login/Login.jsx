import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUserThunk } from 'Redux/operations/userOperation';
import { Form, Button, Input, Label } from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(loginUserThunk(data));

    e.currentTarget.reset();
  };
  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Login
        <Input type="email" name="email" placeholder="Example@mail.com" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" placeholder="Your password" />
      </Label>
      <Button type="submit">Sign in</Button>
      <Link to={'/register'}>Create account</Link>
    </Form>
  );
};

export default Login;
