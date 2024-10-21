import React, { useState } from 'react';
import Papa from 'papaparse';
 

const FileUpload = () => {
    const [contacts, setContacts] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
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
            if(!validateEmail(contact.email)){
                validationErrors.push(`Row ${idx + 1}: Invalid Email`);
            }

        })
    }




}

export default FileUpload