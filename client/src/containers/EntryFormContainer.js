import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import '../App.css';
import  { createEntry } from '../actions/entryFormActions';
import EntryForm from '../components/EntryForm'

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
 
  onChange = event => {
    const {name, value} = event.target
 
    this.setState({
      [name]: value,
    })
  }
 // console.log("onSubmit:", this.state);
  onSubmit = (event) => {
    event.preventDefault()

   debugger

    this.props.createEntry({
      title: this.state.title,
      content: this.state.content}) 
  

    this.setState({
      title: "",
      content: "",
      redirect: true
    })
  }

  render() {  
    const { title, content } = this.state
    if (this.state.redirect === true) {
      return <Redirect to='/entries' /> }
    
    return (
      <EntryForm title={title} content={content} onSubmit={this.onSubmit} onChange={this.onChange} />
      )
  }
}
//how do I add, return to entries upon submit? DONE though redirect boolean 
 //how do I best solve the async problem -- 


const mapStateToProps = state => {
  return {

    entries: state.entries
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createEntry
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EntryFormContainer);