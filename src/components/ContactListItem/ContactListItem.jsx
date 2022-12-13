import PropTypes from 'prop-types';
import { VscTrash } from 'react-icons/vsc';
import { Contact, Button } from './ContactListitem.styled';

export const ContactListitem = ({ name, number, id, deleteContact }) => {
  return (
    <>
      <Contact>
        {name}: {number}
      </Contact>
      <Button type="button" onClick={() => deleteContact(id)}>
        <VscTrash size="30" fill="red" />
      </Button>
    </>
  );
};

ContactListitem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};
