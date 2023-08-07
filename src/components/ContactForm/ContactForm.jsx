import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Form, Label, Imput } from './ContactForm.styled';
// import { Button } from 'components/ContactItem/ContactItem.styled';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };
}
