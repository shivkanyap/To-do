import React from 'react'
import {connect} from 'react-redux'
// import {setCount} from '../action/getaction'

const containerStyle = {
    display: 'flex'
  }

const buttonStyle = {
    fontSize: '1.5rem',
    width: '30',
    height: '10'
  }

class Counter extends React.Component
{

    getMax=()=>{
        this.props.dispatch({type:'ADD_ONE'})
    }
    getMin=()=>{
        this.props.dispatch({type:'MIN_ONE'})
    }
    render()
    {
        return(
            <div className="App" >
        <header className="App-header">
            <div style={containerStyle}>
                <h1>COUNT -  {this.props.count}</h1><br/>

                <button type="button"  onClick={this.getMax} style={buttonStyle}>Max+</button>
                <button type="button" onClick={this.getMin} style={buttonStyle}>Min-</button>
            </div>
            </header>
            </div>
          
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        count:state.count
    }
}
export default connect(mapStateToProps) (Counter)