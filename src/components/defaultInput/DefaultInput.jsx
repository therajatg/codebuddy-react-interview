import React from 'react';
import style from './defaultInput.module.css';

export const DefaultInput = props => {
  const { errorStatus, errorMessage } = props;
  return (
    <>
      <input {...props} />
      {errorStatus ? <p className={style.errorText}>{errorMessage}</p> : <p></p>}
    </>
  );
};
