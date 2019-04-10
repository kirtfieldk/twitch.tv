import streams from '../apis/streams';
import history from '../Component/History';
/*
    Put request overrides properties not updated
    patch req onlu updated properties specifically defined
*/

export const signIn = (userId) =>{
    return {
        type: 'SIGN_IN',
        payload: userId

    };
};

export const signOut = () =>{
    return {
        type: 'SIGN_OUT'

    };
};

export const createStream = formValues => async (dispatch, getState) =>{
    const { userId } = getState().auth; 
    const response = await streams.post('/streams', {...formValues, userId });
    dispatch({
        type: 'CREATE_STREAM',
        payload: response.data
    })
    //After submitting a new stream we get avigated back to the home page!
    history.push('/');
};

export const fetchStreams = () => async dispatch =>{
    const response = await streams.get('/streams');

    dispatch({
        type: 'FETCH_STREAMS',
        payload: response.data
    });
};

export const fetchStream= (id) => async dispatch =>{
    const response = await streams.get(`/streams/${id}`);
    dispatch({type: 'FETCH_STREAM', payload: response.data});
}

export const editStream = (id, formValues) => async dispatch =>{
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: 'EDIT_STREAM', payload: response.data});
    history.push('/');
}

export const deleteStream = (id) => async dispatch =>{
    await streams.delete(`/streams/${id}`);
    dispatch({type: 'DELETE_STREAM', payload: id});
    history.push('/');
} 