import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { bindActionCreators } from 'redux'
import '../App.css';
import  { createEntry } from '../actions';
import EntryForm from '../components/EntryForm'

class EntryFormContainer extends Component {
  state = ({
    title: "",
    content: "",
    redirect: false
  })
//key: false inside render, if true, redirect to /entries
   
  handleChange = event => {
    const {name, value} = event.target
 
    this.setState({
      [name]: value,
    })
  }
 // console.log("onSubmit:", this.state);
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createEntry(this.state)


    // this.props.createEntry({
    //   title: this.state.title,
    //   content: this.state.content}) 
  

    this.setState({
      title: "",
      content: "",
      redirect: true
    })
  }

  render() {  
    return (
    <div>
        <h4>Add Entry</h4>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <input type="text" name="title" required value={this.state.title} onChange={this.handleChange} placeholder="Title" />
          </div>
          <div>
            <textarea name="content" rows='5' required value={this.state.content} onChange={this.handleChange} placeholder="Content" />
          </div>
          <button type="submit">Create</button>
         </form> 
      </div>
      )
  


    // const { title, content } = this.state
    // if (this.state.redirect === true) {
    //   return <Redirect to='/entries' /> }
    
    // return (
    //   <EntryForm title={title} content={content} onSubmit={this.onSubmit} onChange={this.onChange} />
    //   )
  }
}
//how do I add, return to entries upon submit? DONE though redirect boolean 
 //how do I best solve the async problem -- 


// const mapStateToProps = state => {
//   return {

//     entries: state.entries
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators({
//   createEntry
//   }, dispatch)

const mapDispatchToProps = { createEntry };

export default connect(null, mapDispatchToProps)(EntryFormContainer);