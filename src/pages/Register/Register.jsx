import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'Redux/operations/userOperation';
import { Form, Button, Input } from 'pages/Login/Login.styled';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(registerUserThunk(data));
    e.currentTarget.reset();
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="name" placeholder="Alex..." />
      <Input type="email" name="email" placeholder="Example@mail.com" />
      <Input type="password" name="password" placeholder="Your password" />
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default Register;
