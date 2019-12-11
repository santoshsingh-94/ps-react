import React from 'react';
import RegistrationForm from 'ps-react/RegistrationForm';
import { render } from '@testing-library/react';

export default class ExampleRegistrationForm extends React.Component {
  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    return <RegistrationForm onSubmit={this.onSubmit} />
  }
}