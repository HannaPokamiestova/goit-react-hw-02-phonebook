import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={() => onDeleleteContact(id)}
          />
        );
      })}
    </List>
  );
};
