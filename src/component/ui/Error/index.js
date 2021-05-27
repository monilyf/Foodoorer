import React from 'react';
import Color from '../../../utils/Color';
import Label from '../Label';

const Error = props => {
  return (
    // <Label small mt={5} mb={5} ms={16} color={Color.ERROR}>
    <Label small mt={5} mb={5} ms={17} color={Color.Error}>
      {props.errorText}
    </Label>
  );
};
export default Error;
