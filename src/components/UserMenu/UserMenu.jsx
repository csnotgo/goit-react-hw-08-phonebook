import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'Redux/operations/userOperation';
import { IoIosLogOut } from 'react-icons/io';
import { Button } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(state => state.user.user.name);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <b>{name}</b>
      <Button type="button" onClick={() => dispatch(logoutUserThunk())}>
        <IoIosLogOut size="30" />
      </Button>
    </div>
  );
};
