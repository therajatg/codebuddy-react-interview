import {
  validateEmail,
  validatePassword,
  validateFirstName,
  validateLastName,
  validateContact,
  validateAddress,
  notEqualsZero,
  formOneSubmitHandler,
  formTwoSubmitHandler,
  formThreeSubmitHandler,
} from '../../helpers';
import { DefaultInput } from '../defaultInput/DefaultInput';
import { ButtonGroup } from '../buttonGroup/ButtonGroup';
import style from './allForms.module.css';

export function FormOne({
  email,
  setEmail,
  password,
  setPassword,
  showSuccess,
  setShowSuccess,
  setKey,
}) {
  return (
    <div className={style.formContainer}>
      <form
        className={style.form}
        onSubmit={event => formOneSubmitHandler(event, setShowSuccess, setKey, email, password)}
      >
        <div className={style.inputElement}>
          <label htmlFor="email">Email</label>
          <DefaultInput
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email"
            errorStatus={validateEmail(email) !== undefined && notEqualsZero(email)}
            errorMessage={validateEmail(password)}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={style.inputElement}>
          <label htmlFor="password">Password</label>
          <DefaultInput
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            errorStatus={validatePassword(password) !== undefined && notEqualsZero(password)}
            errorMessage={validatePassword(password)}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <ButtonGroup formNumber={1} setKey={setKey} />

        {showSuccess && (
          <p className="bg-primary text-white border-success rounded p-2 mt-3">
            Form saved successfully
          </p>
        )}
      </form>
    </div>
  );
}

export function FormTwo({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  address,
  setAddress,
  showSuccess,
  setShowSuccess,
  setKey,
}) {
  return (
    <div className={style.formContainer}>
      <form
        className={style.form}
        onSubmit={event =>
          formTwoSubmitHandler(event, setShowSuccess, setKey, firstName, lastName, address)
        }
      >
        <div className={style.inputElement}>
          <label htmlFor="firstName">First Name</label>
          <DefaultInput
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Enter your first name"
            errorStatus={validateFirstName(firstName) !== undefined && notEqualsZero(firstName)}
            errorMessage={validateFirstName(firstName)}
            onChange={e => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className={style.inputElement}>
          <label htmlFor="lastName">Last Name</label>
          <DefaultInput
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter your last name"
            errorStatus={validateLastName(lastName) !== undefined && notEqualsZero(firstName)}
            errorMessage={validateLastName(lastName)}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className={style.inputElement}>
          <label htmlFor="address">Address</label>
          <DefaultInput
            type="text"
            name="address"
            value={address}
            placeholder="Enter your address"
            errorStatus={validateAddress(address) !== undefined && notEqualsZero(address)}
            errorMessage={validateAddress(address)}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </div>
        <ButtonGroup formNumber={2} setKey={setKey} />
        {showSuccess && (
          <p className="bg-primary text-white border-success rounded p-2 mt-3">
            Form saved successfully
          </p>
        )}
      </form>
    </div>
  );
}

export function FormThree({
  contact,
  setContact,
  selectedCountry,
  setSelectedCountry,
  showSuccess,
  setShowSuccess,
  isChecked,
  setIsChecked,
  setKey,
  email,
  password,
  firstName,
  lastName,
  address,
  navigate,
}) {
  const countryOptions = [
    {
      label: 'India +91',
      value: '+91',
    },
    {
      label: 'USA +1',
      value: '+1',
    },
  ];

  return (
    <div className={style.formContainer}>
      <form
        className={style.form}
        onSubmit={event =>
          formThreeSubmitHandler(
            event,
            setShowSuccess,
            contact,
            email,
            password,
            firstName,
            lastName,
            address,
            selectedCountry,
            navigate,
          )
        }
      >
        <div className={style.inputElement}>
          <label htmlFor="countryCode">Country Code</label>
          <br />
          <select
            value={selectedCountry}
            onChange={e => setSelectedCountry(e.target.value)}
            className={style.countrySelect}
            required
          >
            {countryOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p></p>
          <div className={style.inputElement}>
            <label htmlFor="contact">Contact Number</label>
            <DefaultInput
              type="number"
              onkeydown="return false;"
              name="contact"
              value={contact}
              placeholder="Enter your contact number"
              className={style.contactInput}
              errorStatus={validateContact(contact) !== undefined && notEqualsZero(contact)}
              errorMessage={validateContact(contact)}
              onChange={e => setContact(e.target.value)}
              required
            />
          </div>
          <div className={style.checkboxContainer}>
            <DefaultInput
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(prev => !prev)}
              className={style.checkbox}
              required
            />
            <label>I accept the terms and conditions</label>
          </div>
        </div>
        <ButtonGroup formNumber={3} setKey={setKey} />
        {showSuccess && (
          <p className="bg-primary text-white border-success rounded p-2 mt-3">
            Form saved successfully
          </p>
        )}
      </form>
    </div>
  );
}
