import React from 'react'

const ContactList = ({ contacts }) => {
  return (
    <div>
        {contacts.length > 0 && (
            <div>
                <h3>{contacts.length} contacts uploaded successfully!</h3>
                <ul>
                    
                </ul>
            </div>
        )}
    </div>
  )
}

export default ContactList