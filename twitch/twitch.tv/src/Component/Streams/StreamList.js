import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions'; 

class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }
    renderList = () =>{
        return this.props.streams.map(stream =>{
            return (
                <div className = 'item' key ={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className = 'large middle align icon camera'/>
                    <div className = 'content' >
                      <Link to = {`/streams/${stream.id}`} className = "header">  
                        {stream.title}
                      </Link>    
                    </div>
                    <div className = 'description'>{stream.description}</div> 
                </div>
            );
        });
    };
    renderCreate = () =>{
        if(this.props.isSignedIn){
           return(
                <div style = {{textAlign: 'right'}}>
                    <Link to ='/stream/create' className = 'ui button primary'>
                        Create New Stream
                    </Link>
                </div>
           );
        }
    }

    renderAdmin = (stream) =>{
        if(stream.userId === this.props.currentUserId){
            return(
                <div className = 'right floated content'>
                    <Link to = {`/stream/edit/${stream.id}`} className = 'ui button primary'>
                        Edit
                    </Link>
                    <Link to = {`/stream/delete/${stream.id}`} className = 'ui button negative'>
                        Delete
                    </Link>
                </div>
            );
        }
    };

    render(){
        console.log(this.props.streams);
        return(
            <div>
                <h1 className = 'center'>StreamList</h1>
                <div className = 'ui celled list'>{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
};

const mapStateToProps = (state) =>{
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }

}

export default connect(mapStateToProps, { fetchStreams })(StreamList);