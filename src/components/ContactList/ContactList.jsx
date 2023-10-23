import Contact from '../Contact/Contact.jsx';
import { Ul } from './ContactList.styled.js';

export const ContactList = ({ contacts }) => {
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </Ul>
  );
};
