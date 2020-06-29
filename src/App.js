import React, { Component } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import contacts from './data/contacts.json';

class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  forSubmitHandler = data => {
    this.setState({ contacts: [...this.state.contacts, data] });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };

  getExistingContactsName = () => {
    const { contacts } = this.state;
    return contacts.map(contact => contact.name.toLowerCase());
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    console.log(contacts);
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm
            onSubmit={this.forSubmitHandler}
            existingContactsName={this.getExistingContactsName}
          />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
