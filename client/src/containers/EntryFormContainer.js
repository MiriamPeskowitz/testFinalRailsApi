import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import '../App.css';
import  { createEntry } from '../actions/entryFormActions';

//componentwillmount -- load entry form 
class EntryFormContainer extends Component {
  constructor() {
    super()

    this.state = ({
      title: "",
      content: ""
    })

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  onChange(event) {

    const field = event.target.name
    let state = this.state
    
    state[field] = event.target.value
    this.setState(state)
  }

  onSubmit(event) {
    event.preventDefault()
    
    this.props.createEntry(this.state)  
    this.setState({
      title: "",
      content: ""
    })
  }

  render() {  
    const { title, content } = this.state

    const red = {color: '#cd5c5c'}

    return (
      <form onSubmit={ this.onSubmit }>
          <fieldset>
            <legend style={red}> New Entry</legend>
            
            <label htmlFor="Title">Title: <textarea rows="1" cols= "40" name="title" value={ title }  onChange={ this.onChange }></textarea></label>
      
            <br/>

            <label htmlFor="content">Entry: <textarea rows="5" cols= "50" name="content" onChange={ this.onChange } value= { content } ></textarea></label>
        
            <br/>
            <input type="submit" value="Submit" />

          </fieldset>

        <Link to='/entries' style={red}>Cancel/Return to Entries</Link>
      
      </form>
    ) 
  }
}
// const mapStateToProps = state => {
//   return {

//     entries: state.entryFormReducer.entries
//   }
// }

const mapDispatchToProps = dispatch => bindActionCreators({
  // fetchAllEntries
  createEntry
}, dispatch)

export default connect(null, mapDispatchToProps)(EntryFormContainer);