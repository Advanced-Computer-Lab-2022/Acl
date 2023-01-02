import React from "react";
import Rating from '@mui/material/Rating';
import PropTypes from "prop-types";
import { Component } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

var instructorId='';
var userId='';
var increment=1;
var NewRating=0.0;
var ratingCounter=0;
var updateSucesful=0;
var review='';


async function calculateAverage(
  newRating,
  rating,
  ratingCounter,
  

) {
  try {
      await axios.post('http://localhost:7007/corporatetrainee/calculateAverageRating',null,{params:{ 
          newRating,    
          rating,
          ratingCounter}})
      .then((response) => {
        console.log(response.status);
          if(response.status==200)
          {
           NewRating= response.data;
           rateInstructor(NewRating,ratingCounter,instructorId)
          }
      })
      .catch((err) => {
        console.log("Error while connecting to db", err);
      });
    } catch (error) {
      console.error(error);
    }
  
}


async function rateInstructor(
    rating,
    ratingCounter,
    InstructorId

) {
    try {
        await axios.put('http://localhost:7007/corporatetrainee/rateinstructor',null,{params:{ 
rating,
            ratingCounter,
        InstructorId}})
        .then((response) => {
          console.log(response.status);
          if(response.status==200)
          {
            updateSucesful=1;
            
          }
        })
        .catch((err) => {
          console.log("Error while connecting to db", err);
        });
      } catch (error) {
        console.error(error);
      }
    
}



  

export default class UserAccountDetails extends Component
{
    constructor(props)
    {
        super(props);

        this.onclickRate=this.onclickRate.bind(this);
        this.onChangeNewRating = this.onChangeNewRating.bind(this);
        this.state ={
            username:'',
            email:'',
            biography:'',
            rating:'',
            newRating:'',
            ratingCounter:'',
            instructors:[],
            instructorId:'',
            review:'',
            reviews:[]
        }
        const params = new URLSearchParams(window.location.search);
    const userId = params.get('instructorId');
     
    }

    async componentDidMount()
    {
      this.setState({
        review:''
      })

     }

  
    onclickRate(value)
      {
        
       calculateAverage(value,this.state.rating,this.state.ratingCounter)  
      }
      
      onChangeNewRating(value)
      {
        this.setState({
          newRating: value
        })
        this.onclickRate(value);
      }
      

    render() {
    return (

  <div>
<label htmlFor="feCity">Rate this instructor</label>
<Rating style={{color:"gold"}}
  name="simple-controlled"
  value={this.state.newRating}
  onChange={(event, newValue) => {
    this.onChangeNewRating(newValue);
  }}
/>
</div>             
  
)}

}