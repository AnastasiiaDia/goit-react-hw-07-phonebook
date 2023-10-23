import { Button } from 'components/Form/FormElements.styled';
import { Li } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/reducer';

const Contact = ({ name, id, number }) => {
  const distatch = useDispatch();
  const onDeleteContact = id => {
    distatch(deleteContact(id));
  };
  return (
    <Li>
      <span>{name}</span>
      <span>{number}</span>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Li>
  );
};
export default Contact;
