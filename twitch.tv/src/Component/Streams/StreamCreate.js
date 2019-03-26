import React from 'react';
/*
    Field is a component and reduxForm is a function
*/
import { Field, reduxForm } from 'redux-form';
class StreamCreate extends React.Component{
    renderInput(formProps){
        return (
            <div className = 'field'>
                <label>{formProps.label}</label>
                <input {...formProps.input} />
            </div>
        )
    };
/*
        <input {...formProps.input} /> takes all the values of input and assigns them as properties
         <input 
        onChange = {formProps.input.onChange}
        value = {formProps.input.value}
       />
*/
    onSubmit(formValues){

       console.log(formValues);

    }
/*
    redux-form provided handleSubmit
    handleSubmit auto matically provides e.preventDefault()
*/
    render(){
        return(
             <form className = 'ui form' onSubmit = {this.props.handleSubmit(this.onSubmit)}>
                 <Field name = 'title' component = {this.renderInput} label = 'Enter Title'/>
                 <Field name = 'description' component = {this.renderInput} label = 'Enter Description'/>
                 <button className = 'ui button primary'>Submit</button>
             </form>
        )
       };
}
export default reduxForm({
    //Recieves a object
    form: 'creatingStream'
})(StreamCreate);