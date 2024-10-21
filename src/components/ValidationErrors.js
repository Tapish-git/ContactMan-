import React from 'react'

const ValidationErrors = ({ errors }) => {
  return (
    <div>
        { errors.length > 0 && (
            <div>
                <h3>Errors found:</h3>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  );
};

export default ValidationErrors;