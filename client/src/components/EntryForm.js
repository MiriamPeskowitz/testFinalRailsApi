// will be a form to add a new entry 
// alink that opens the form 
//  
import React from 'react';
import { Link } from 'react-router-dom';
import './EntryForm.css';
//refactor: use sass for all these colors 
const red = {
    color: '#cd5c5c'
  }

// const align = {
//     verticalAlign: 'middle'
//   }
// const align = {
//   label textarea{
//  vertical-align: middle;
//   }
// }.formfield {
//   <label for="textarea">Label for textarea</label>
//   <textarea id="textarea" rows="5">Textarea</textarea>
// }

const EntryForm = () =>
 
 
    // <h2 style={red}> New Entry </h2>
   
       
    <form>
      <fieldset>
        <legend style={red}> New Entry</legend>
         

        <label htmlFor="Title">Title: <textarea rows="1" cols= "40" name="title"> </textarea></label>
     

        <br/>

        <label htmlFor="content">Entry: <textarea rows="5" cols= "50" name="content"></textarea></label>
    
        <br/>
        <input type="submit" value="Submit" />

      </fieldset>
    <Link to='/entries' style={red}>Cancel</Link>
  </form>


export default EntryForm;

//cancel -- should return to /Entries
// <textarea rows = "5" cols = "50" name = "description">
//             Enter your name
//          </textarea>