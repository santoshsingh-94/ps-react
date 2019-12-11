import React from 'react';
import TextInput from 'ps-react/TextInput';

/**Optional TextBox */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="Example-optional"
        label="First Name"
        name="firstname"
        onChange={() => { }}
        required
        error="First name is required."
      />
    );
  }
}
