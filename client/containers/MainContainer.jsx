import React from 'react'
import { connect } from 'react-redux';
import CardDisplay from '../componets/CardDisplay.jsx'

const mapStateToProps = (store) => ({
    totalScore: store.totalScore,
})


const mapDispatchToProps = dispatch => ({
    //nothing dispatched yet
  });


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <h1>Would you like to play a game?</h1>
        )
    }


}


export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);