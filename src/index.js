import React from 'react';
import ReactDOM from 'react-dom';

import FormContainer from "./js/components/container/FormContainer.jsx";


const customers = [
  {
      id: 1,
      name: 'Nguyễn Văn A'
  },
  {
      id: 2,
      name: 'Nguyễn Văn B'
  }
];

ReactDOM.render(
    <FormContainer />,
    document.getElementById('app')
);