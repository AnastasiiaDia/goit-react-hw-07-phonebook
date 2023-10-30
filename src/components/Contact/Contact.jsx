import { Button } from 'components/Form/FormElements.styled';
import { Li } from './Contact.styled';
import { useDeleteContactMutation } from 'redux/contactSlice';
import { toast } from 'react-toastify';
import { successSettings } from 'utilits/toastifySettings';

// import { useDeleteContactMutation } from 'redux/contactSlice';

const Contact = ({ name, id, number }) => {
  const [onDelete, { isLoading }] = useDeleteContactMutation();
  const onDeleteContactById = id => {
    onDelete(id);
    toast.success(`${name} is was deleted successfully 👀`, successSettings);
  };
  // console.log(useDeteleteContactMutation(id));
  return (
    <Li>
      <span>{name}</span>
      <span>{number}</span>

      <Button
        disabled={isLoading}
        type="button"
        onClick={() => onDeleteContactById(id)}
      >
        {isLoading ? 'Deliting...' : 'Delete'}
      </Button>
    </Li>
  );
};
export default Contact;
