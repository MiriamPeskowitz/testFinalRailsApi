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

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  onChange = event => {
    const {name, value} = event.target
 
    this.setState({
      [name]: value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    console.log("onSubmit:", this.state)

    this.props.createEntry({
      title: this.state.title,
      content: this.state.content}) 

    this.setState({
      // title: "",
      // content: "",
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

const mapStateToProps = state => {
  return {
    entries: state.entryFormReducer.entries
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createEntry
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EntryFormContainer);

