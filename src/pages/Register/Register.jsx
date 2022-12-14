import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'Redux/operations/userOperation';
import { Form, Button, Input, Label } from 'pages/Login/Login.styled';

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
      <Label>
        Your name
        <Input type="text" name="name" placeholder="Alex..." />
      </Label>
      <Label>
        Your email
        <Input type="email" name="email" placeholder="Example@mail.com" />
      </Label>
      <Label>
        Create password
        <Input type="password" name="password" placeholder="Your password" />
      </Label>
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default Register;
