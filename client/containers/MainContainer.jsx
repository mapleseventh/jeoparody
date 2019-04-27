import React from 'react'
import { connect } from 'react-redux';
import ColumnComponent from '../components/ColumnComponent.jsx'

const mapStateToProps = (store) => ({
    totalScore: store.trivia.totalScore,
    questionData: store.trivia.questionData
})


const mapDispatchToProps = (dispatch) => ({
    //nothing dispatched yet
  });


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
    }

  

    render(){
        console.log(this.props.totalScore)
        return (
            <div className='main-container-div'>
                <h1>Would you like to play a game?</h1>
                <ColumnComponent questionData={this.props.questionData}/>
            </div>
        )            
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);