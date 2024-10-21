import React, { useState } from 'react';
import Papa from 'papaparse';
import FileInput from './FileInput';
import ValidationErrors from './ValidationErrors';
import ContactList from './ContactList';
 

const FileUpload = () => {
    const [contacts, setContacts] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                console.log(result.data);                
                const { data, errors } = result;
                const validationErrors = validateContacts(data);
                if(validationErrors.length > 0){
                    setErrors(validationErrors);
                } else {
                    setContacts(data);
                    setErrors([]);
                }
            },
        });
    };

    const validateContacts = (data) => {
        const validationErrors = [];
        data.forEach((contact, idx) => {
            if(!validateEmail(contact.email)){
                validationErrors.push(`Row ${idx + 1}: Invalid Email`);
            }
            if(!validatePhone(contact.phone)){
                validationErrors.push(`Row ${idx + 1}: Invalid Phone Number`);
            }
            if(!validateDate(contact.dateOfBirth)){
                validationErrors.push(`Row ${idx + 1}: Invalid Date of Birth`);
            }
        });
        return validationErrors;
    };


    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email.trim());
    };

    const validatePhone = (phone) => {
        return /^\d{10}$/.test(phone.trim());
    };

    const validateDate = (dateString) => {
        const date = new Date(dateString.trim());
        return !isNaN(date.getTime());
    };

    return (
        <div>
            <h1>Upload Contacts</h1>
            <FileInput onFileChange={handleFileChange}/>
            <ValidationErrors errors={errors}/>
            <ContactList contacts={contacts}/>
        </div>
    );
};

export default FileUpload;