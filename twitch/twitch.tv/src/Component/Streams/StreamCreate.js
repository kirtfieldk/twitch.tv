import React from 'react';
/*
    Field is a component and reduxForm is a function
*/
import { connect } from 'react-redux';
import { createStream } from '../../actions/';
import StreamForm from './StreamForm';


class StreamCreate extends React.Component{
    onSubmit = (formValues) =>{
        this.props.createStream(formValues);
       console.log(formValues);

    }
    render(){
        return(
            <div>
                <h1>Create a Stream</h1>
                <StreamForm onSubmit = {this.onSubmit} />
            </div>
        )
       };
}
export default connect(null, { createStream })(StreamCreate);