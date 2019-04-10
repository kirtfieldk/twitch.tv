import React from 'react';
import Model from '../Model';
import history from '../History';
import { fetchStream, deleteStream } from '../../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    renderActions = () =>{
        const id = this.props.match.params.id;
        return(
          <div>
            <button 
                onClick = {() => this.props.deleteStream(this.props.match.params.id)} 
                className = 'ui button negative'> Delete</button>
            <Link 
                to = '/' 
                className = 'ui button'>Cancel</Link>
          </div>
        )
    }
    renderContent = () =>{
        if(!this.props.stream){
            return 'Are you sure you want to delete this stream?';
        }
        return `Delete ${this.props.stream.title} `;
    }
    render(){
        return( 
        <div> 
            <Model 
                title ='Delete Stream'
                content = {this.renderContent()}
                action = {this.renderActions()}
                onDismiss = {() => history.push('/')}
            />
        </div>
        )
    }
}
const mapStateToProps = (state, ownProps) =>{
    return{
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);