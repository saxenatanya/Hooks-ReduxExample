import { useEffect, useState } from "react";
import useInputBasic from "../hooks/use-inputBasic";

const BasicForm = (props) => {
  
  const [formIsValid, setFormIsValid] = useState(false);
  const {
    value: enterName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    reset: resetNameInput
  } = useInputBasic(val => val.trim() !== '');

  
  const {
    value: enterLName,
    isValid: enteredLNameIsValid,
    hasError: LnameInputHasError,
    valueChangeHandler: LnameChangeHandler,
    reset: resetLNameInput
  } = useInputBasic(val => val.trim() !== '');

  const {
    value: enterEmail,
    isValid: enteredEmailIsValid,
    hasError: EmailInputHasError,
    valueChangeHandler: emailChangeHandler,
    reset: resetemailInput
  } = useInputBasic(val => val.includes('@'));



  useEffect(() => {
    if (enteredNameIsValid &&enteredLNameIsValid&& enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid,enteredLNameIsValid,enteredEmailIsValid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    resetLNameInput('');
    resetNameInput('');
resetemailInput('');
  };

  
  
  const nameInputClasses = nameInputHasError ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
            onChange={nameChangeHandler}
            value={enterName}
          />
          {!nameInputHasError && <p>error</p>}
        </div>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
          value={enterLName}
          onChange={LnameChangeHandler}/>
        { !LnameInputHasError&& <p>error</p>}
        </div>

      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enterEmail}
        onChange={emailChangeHandler}/>
        { !EmailInputHasError&& <p>error</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};


export default BasicForm;
