import React from 'react';
import {connect} from 'react-redux';

function BookDetails(props){

    if(!props.selectedBook){
        return(
            <h1>Please select a book</h1>
        )
    }else{
        return (
            <h1>{props.selectedBook}</h1>
        )
    }
}


const mapStateToProps = state => {
    return {
        selectedBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails);