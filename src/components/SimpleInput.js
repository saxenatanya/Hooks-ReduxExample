import { useEffect, useState } from 'react';

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid,enteredEmailIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your email</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          value={enteredEmail}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>email must not be empty. & must contain @</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;