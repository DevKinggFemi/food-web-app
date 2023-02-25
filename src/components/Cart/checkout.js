import { useRef, useState } from 'react';
import  classes from './checkout.module.css'

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;


const Checkout = props => {
const [formInputValidity, setFormInputValidty] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
});

const nameInputRef = useRef();
const streetInputRef = useRef();
const postalInputRef = useRef();
const cityInputRef = useRef();
   


   const ConfirmHandler = (event)=> {
        event.preventDefault();
   
    const EnteredName = nameInputRef.current.value;
    const EnteredStreet = streetInputRef.current.value;
    const Enteredpostal = postalInputRef.current.value;
    const EnteredCity = cityInputRef.current.value;

    const EnteredNameIsValid = !isEmpty(EnteredName);
    const EnteredStreetIsValid = !isEmpty(EnteredStreet);
    const EnteredCityIsValid = !isEmpty(EnteredCity);
    const EnteredPostalIsValid = isFiveChars(Enteredpostal);
   
    setFormInputValidty ({
name: EnteredNameIsValid,
city: EnteredCityIsValid,
postalCode: EnteredPostalIsValid,
street: EnteredStreetIsValid
    });
    


    const formIsValid = EnteredNameIsValid && EnteredStreetIsValid && EnteredCityIsValid &&
 EnteredPostalIsValid;

    if (!formIsValid) {
        return;
    }
  props.onSubmit({
name: EnteredName,
city : EnteredCity,
postalCode: Enteredpostal,
street: EnteredStreet
  });
 
    };

    const nameControlClasses = `${classes.control} ${formInputValidity.name ? " " : classes.invalid}`;
    const postalCodeControlClasses = `${classes.control} ${formInputValidity.postalCode ? "" : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? " " : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? " " : classes.invalid}`;


    return <form onSubmit={ConfirmHandler} className={classes.form}> 
        <div className={nameControlClasses}>
            <label htmlFor='name'> Yourname</label>
            <input type ="text" id= "name"  ref={nameInputRef}/>
            {!formInputValidity.name && <p>Please Enter A Valid name</p>}
        </div>
        <div className={streetControlClasses}>
<label htmlFor='street'> Street</label>
<input type="text" id= "street" ref={streetInputRef}/>
{!formInputValidity.street && <p>Please Enter A Valid  street</p>}


        </div>
        <div className={postalCodeControlClasses}>
            <label htmlFor='postal'> Postal Code</label>
            <input type ="number" id= "postal" ref={postalInputRef} />
            {!formInputValidity.postalCode && <p>Please Enter A Valid Postal Code</p>}

        </div>
        <div className={cityControlClasses}>
            <label htmlFor='city'> City</label>
            <input type ="text" id= "city" ref={cityInputRef}/>
            {!formInputValidity.city && <p>Please Enter A Valid City name</p>}

        </div>
<div className={classes.actions}>
        <button> Confirm</button>
        <button className={classes.submits} type='button' onClick={props.onClose}>Cancel</button>
        </div>
    </form> 
};

export default Checkout;