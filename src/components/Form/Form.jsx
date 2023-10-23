import { Button, FormEl, Input } from './FormElements.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { addContact } from 'redux/reducer';

export function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onFormSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    const addedContact = { name, number };

    event.target.reset();

    if (contacts.some(({ name }) => addedContact.name === name)) {
      return alert(`${addedContact.name} is alrady in your contacts`);
    }
    dispatch(addContact(addedContact));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <FormEl onSubmit={onFormSubmit}>
        <span>Name</span>
        <Input type="text" name="name" required placeholder="Diana Ivanova" />
        <span>Number</span>
        <Input type="tel" name="number" required placeholder="123-45-67" />
        <Button type="submit">Add contact</Button>
      </FormEl>
    </>
  );
}
