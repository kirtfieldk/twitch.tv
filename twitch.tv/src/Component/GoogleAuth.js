import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component{
    // state = {isSignedIn: null};
    /*
        When component loads the componentDIdMount function is called
        The Google APi is so small we have to load in this stuff so Our
        API can get bigger

        Reference the GAPI library
    */
    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '1030603037443-sk69lktv8pr5fkadgv8m10thja2g86p3.apps.googleusercontent.com',
                scope: 'email'
            }).then(() =>{ //Will be executed once gapi is loaded
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) =>{
        if(isSignedIn)
            this.props.signIn(this.auth.currentUser.get().getId());
        else
            this.props.signOut();
    }
    onSignIn = () =>{
        this.auth.signIn();
    }
    onSignOut = () =>{
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.props.isSignedIn === null)
            return null;
        if(this.props.isSignedIn)
            return (
                <button className = 'ui red google button' onClick = {this.onSignOut}>
                   <i className = 'google icon' /> 
                   Sign Out 
                </button>
            );
        else
            return (
                <button className = 'ui red google button'  onClick = {this.onSignIn}>
                    <i className = 'google icon' /> 
                    Sign In
                </button>
            );  
    }
    render(){
       return <div>{this.renderAuthButton()}</div>;
    };
};

const mapStateToProps = state =>{
    return { isSignedIn: state.auth.isSignedIn}

}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);