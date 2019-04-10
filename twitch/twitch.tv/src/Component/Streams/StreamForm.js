import React from 'react';
/*
    Field is a component and reduxForm is a function
*/
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{
    renderInput = (formProps) => {
        //console.log(formProps.meta); vary important information
        return (
            <div className = 'field'>
                <label>{formProps.label}</label>
                <input {...formProps.input} />
                <div>{this.renderError(formProps.meta)}</div>
            </div>
        )
    };

    renderError({ error, touched }){
        if(touched && error){
            return(
            <div className = 'ui error message'>
             <div className = 'error'>{error}</div>
            </div>
            );
        }
        return <div></div>;
    };
/*
        <input {...formProps.input} /> takes all the values of input and assigns them as properties
         <input 
        onChange = {formProps.input.onChange}
        value = {formProps.input.value}
       />


       calls createStream action when form submitted
*/
    onSubmit = (formValues) =>{
        this.props.onSubmit(formValues);
       console.log(formValues);

    }
/*
    redux-form provided handleSubmit
    handleSubmit auto matically provides e.preventDefault()
    For validation >> If there is an error you would return an object like 
    {
        title: "cannot be null"
    }
*/
    render(){
        return(
             <form className = 'ui form error' onSubmit = {this.props.handleSubmit(this.onSubmit)}>
                 <Field name = 'title' component = {this.renderInput} label = 'Enter Title'/>
                 <Field name = 'description' component = {this.renderInput} label = 'Enter Description'/>
                 <button className = 'ui button primary'>Submit</button>
             </form>
        )
       };
}
/*
    The validate methid takes the title from the 
    name props in the form and same for description
*/
const validate = (formValues) =>{
    const err = {};
    if(!formValues.title){
        err.title = "Please enter a Title";
    }      
    if(!formValues.description){
        err.description =  "Please enter a discription";
    }
    return err;
}


export default reduxForm({
    //Recieves a object
    form: 'streamForm',
    validate
})(StreamForm);


