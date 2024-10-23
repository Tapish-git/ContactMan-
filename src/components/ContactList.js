import React from 'react'

const ContactList = ({ contacts }) => {
  return (
    <div>
        {contacts.length > 0 && (
            <div>
                <h3>{contacts.length} contacts uploaded successfully!</h3>
                <ul>
                    {contacts.map((contact, idx) => (
                        <li key={idx}>
                            {contact.name} - {contact.email} - {contact.phone}
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  );
};

export default ContactList;