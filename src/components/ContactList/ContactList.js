import React from "react";
import PropTypes from "prop-types";

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ol>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {`${contact.name} -`} {`tel: ${contact.number}   `}
          <button type="button" onClick={() => onRemoveContact(contact.id)}>
            delete
          </button>
        </li>
      ))}
    </ol>
  );
}

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
