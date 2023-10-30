import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from './components/Form/Form';
import { ContactList } from './components/ContactList/ContactList';
import { Container } from './components/Container.styled';
import { Input, Section } from './components/Form/FormElements.styled';

import { useGetContactsQuery } from 'redux/contactSlice';
import { useState } from 'react';

export function App() {
  const { data } = useGetContactsQuery();

  const [filter, setFilter] = useState('');

  const onChangeImputFilter = event => {
    setFilter(event.target.value.trim());
  };

  let filteredContacts = [];
  if (data) {
    filteredContacts = data.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
  return (
    <>
      <ToastContainer />
      <Container>
        <Form />
        <h2>Contacts</h2>

        {data === null ? (
          <p>No contacts</p>
        ) : (
          <Section>
            {/* console.log(data); */}
            {data?.length > 0 ? (
              <div>
                <p>Find conacts by name</p>
                <Input
                  type="text"
                  placeholder="Search contact"
                  value={filter}
                  onChange={onChangeImputFilter}
                />
              </div>
            ) : (
              <p>No contacts</p>
            )}
            <ContactList contacts={filteredContacts} />
          </Section>
        )}
      </Container>
    </>
  );
}
