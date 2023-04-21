export const validateEmail = text => {
  let reg = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  return reg.test(text) === false ? 'Please enter a valid email address' : undefined;
};

export const validatePassword = value => {
  const regex =
    /^(?=.*[A-Z]{2})(?=.*[a-z]{2})(?=.*\d{2})(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/]{2}).{8,}$/;
  return value && !regex.test(value)
    ? 'Please enter 2 capital letters, 2 small letters, 2 numbers and 2 special character.'
    : undefined;
};

export const notEqualsZero = value => {
  if (value) {
    if (value.length !== 0) return true;
    else return false;
  } else return false;
};

export const validateFirstName = value =>
  /^[a-zA-Z]{2,50}$/.test(value)
    ? undefined
    : 'Please enter only alphabets with total length between 2 to 50 characters';

export const validateLastName = value =>
  /^[a-zA-Z]+$/.test(value) || value === '' ? undefined : 'Please enter only alphabets';

export const validateAddress = value =>
  value.length > 9 ? undefined : 'Please enter at least 10 characters';

export const validateContact = value =>
  value.length === 10 ? undefined : 'Number should be 10 digit long';

export const formOneSubmitHandler = (event, setShowSuccess, setKey, email, password) => {
  event.preventDefault();
  if (validateEmail(email) === undefined && validatePassword(password) === undefined) {
    if (event.nativeEvent.submitter.name === 'saveAndNextButton') {
      setKey('2');
    } else {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  }
};

export const formTwoSubmitHandler = (
  event,
  setShowSuccess,
  setKey,
  firstName,
  lastName,
  address,
) => {
  event.preventDefault();
  if (
    validateFirstName(firstName) === undefined &&
    validateLastName(lastName) === undefined &&
    validateAddress(address) === undefined
  ) {
    if (event.nativeEvent.submitter.name === 'saveAndNextButton') {
      setKey('3');
    } else {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  }
};

export const formThreeSubmitHandler = (
  event,
  setShowSuccess,
  contact,
  email,
  password,
  firstName,
  lastName,
  address,
  countryCode,
  navigate,
) => {
  event.preventDefault();
  if (validateContact(contact) === undefined) {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        'emailId': email,
        'password': password,
        'firstName': firstName,
        'lastName': lastName,
        'address': address,
        'countryCode': countryCode,
        'phoneNumber': contact,
      }),
    };
    fetch('https://codebuddy.review/submit', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .then(() => navigate('/posts'))
      .catch(error => console.log(error));
  }
};
