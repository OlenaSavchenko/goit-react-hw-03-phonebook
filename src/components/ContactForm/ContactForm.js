import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    existingContactsName: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { existingContactsName } = this.props;
    const reviewExistingContactsNames = existingContactsName().includes(
      name.toLowerCase(),
    );

    if (reviewExistingContactsNames) {
      alert(`${name} is already in contacts`);
    } else if (!name || !number) {
      alert('Fill the form');
    } else if (name.length < 3) {
      alert('Name should have more than 3 letters');
    } else {
      this.props.onSubmit(this.state);
    }

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.nameInputId} className={styles.formLabel}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className={styles.formInput}
          />
        </label>
        <br />
        <label htmlFor={this.numberInputId} className={styles.formLabel}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            className={styles.formInput}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
