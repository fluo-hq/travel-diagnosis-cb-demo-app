import React from 'react';

export default function Banks(props) {
  return (
    <ul>
      {
        props.banks.map(bank => {
          return (
            <li key={bank.id}>
              <button onClick={() => props.onBankClick(bank)}>{bank.name}
                <img src={bank.imageURL} height="30px" alt="bank"/>
              </button>
            </li>
          ); 
        })
      }
    </ul>
  );
}