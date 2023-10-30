import { Button } from 'components/Form/FormElements.styled';
import { Li } from './Contact.styled';
import { useDeleteContactMutation } from 'redux/contactSlice';

// import { useDeleteContactMutation } from 'redux/contactSlice';

const Contact = ({ name, id, number }) => {
  const [onDelete, { isLoading }] = useDeleteContactMutation();
  // console.log(useDeteleteContactMutation(id));
  return (
    <Li>
      <span>{name}</span>
      <span>{number}</span>

      <Button disabled={isLoading} type="button" onClick={() => onDelete(id)}>
        {isLoading ? 'Deliting...' : 'Delete'}
      </Button>
    </Li>
  );
};
export default Contact;
