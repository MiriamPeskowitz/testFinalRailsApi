import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import '../App.css';
import  { createEntry } from '../actions/entryFormActions';
// import EntryForm from '../components/EntryForm'

const red = {color: '#cd5c5c'}

class EntryFormContainer extends Component {
  constructor() {
    super()

    this.state = ({
      title: "",
      content: "",
      redirect: false
    })
//key: false inside render, if true, redirect to /entries
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
    
    this.props.createEntry({title: this.state.title, content: this.state.content}) 
    this.setState({
      title: "",
      content: "",
      redirect: true
    })
    //use history.push 
    //change the createEntry 

  }

  render() {  
    const { title, content } = this.state
    if (this.state.redirect === true) {
      return <Redirect to='/entries' /> }
    
    return (

      <form onSubmit={ (event) => this.onSubmit(event) }>
          <fieldset>
            <legend style={red}> New Entry</legend>
            
            <label htmlFor="Title">Title: <textarea rows="1" cols= "40" name="title" value={ title }  onChange={ this.onChange }></textarea></label>
      
            <br/>

            <label htmlFor="content">Entry: <textarea rows="5" cols= "50" name="content" onChange={ this.onChange } value= { content } ></textarea></label>
        
            <br/>
            <button type="submit">Add </button>

          </fieldset>

        <Link to='/entries' style={red}>Cancel/Return to Entries</Link>
      
      </form>
    ) 
  }
}
//how do I add, return to entries upon submit? 


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