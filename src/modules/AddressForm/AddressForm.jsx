import React from 'react';
// import { Field } from 'formik';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import scss from './address-form.module.scss';
const nameId = nanoid();
const emailId = nanoid();
const phoneId = nanoid();
const addressId = nanoid();

const AddressForm = ({ onChange }) => {
  return (
    <div className={scss.container}>
      <label>
        Name
        <input
          type="text"
          id={nameId}
          name="name"
          placeholder="your name"
          onChange={onChange}
          autoFocus="autofocus"
        ></input>
      </label>

      <label>
        email
        <input
          type="email"
          id={emailId}
          name="email"
          placeholder="your email"
          onChange={onChange}
        ></input>
      </label>

      <label>
        Phone
        <input
          type="tel"
          id={phoneId}
          name="phone"
          placeholder="your phone number"
          onChange={onChange}
        ></input>
      </label>

      <label>
        Address
        <input
          type="text"
          id={addressId}
          name="address"
          placeholder="your delievery address"
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
};

// AddressForm.propTypes = {};

export default AddressForm;
