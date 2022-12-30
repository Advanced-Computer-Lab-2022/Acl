import React, { Component } from 'react';
import axios from 'axios';
import UserAccountDetails from './RateInst';
//import {Link} from 'react-router-dom';
//import { response } from 'express';
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

const Review = props => (
  
  <div className='row border border-primary rounded-pill mb-10 mb-3'>
        <div className="col-md-12">
            <div className="p-4">
                <div className="d-flex justify-content-between align-items-center experience"><span>Review</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;7aga?</span></div>
                <div className='row'>
                <div className="col-md-6"><label className="labels">Review body</label><label className="form-control" >{props.review}</label></div>
                 

            </div>
      </div>
      </div>
          </div>
  
)

  
 
export default class RateInstructor extends Component
{
    constructor(props)
    {
        super(props);
        this.onclickRate=this.onclickRate.bind(this);
        this.onChangeNewRating = this.onChangeNewRating.bind(this);
        this.onChangeReview = this.onChangeReview.bind(this);
        this.onclickReviewButton= this.onclickReviewButton.bind(this);
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
     
    }

    async componentDidMount()
    {
      this.setState({
        review:''
      })
      try{
        await axios.post('http://localhost:7007/corporatetrainee/getInstructorId')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                instructorId: response.data
              })
              instructorId=response.data;
              userId=response.data;
            }
          })
          .catch((error) => {
            console.log(error);
          })
        } catch (error) {
          console.error(error);
        }
        try{
          await axios.post('http://localhost:7007/instructor/getInstructorById',null,{params:{instructorId}})
            .then(response => {
              if (response.data.length > 0) {
                console.log(response.data)
                this.setState({
                    username:response.data[0].username,
                    email:response.data[0].email,
                    biography:response.data[0].biography,
                    rating:response.data[0].rating.$numberDecimal,
                    ratingCounter:(response.data[0].ratingCounter)+increment,
                    reviews:response.data[0].review
                })
                ratingCounter=(response.data[0].ratingCounter)+increment;
              }
            })
            .catch((error) => {
              console.log(error);
            })
          } catch (error) {
            console.error(error);
          }

    }

    allinstructors()
    {

        return this.state.reviews.map(currentReviews =>{
            return <Review review={currentReviews} />;
        })
    }

    onclickRate(e)
      {
        e.preventDefault();
       calculateAverage(this.state.newRating,this.state.rating,this.state.ratingCounter)  
      }
      async onclickReviewButton(e)
      {
        e.preventDefault();
        try {
          await axios.put('http://localhost:7007/instructor/addReview',null,{params:{ userId, review}})
         .then(response => {
           if (response.data.length > 0) {
             if(response.status==200)
             {
           
             }
           }
         })
         .catch((error) => {
           console.log(error);
         })
       } catch (error) {
         console.error(error);
       }
   
      } 
      onChangeNewRating(e)
      {
        this.setState({
          newRating: e.target.value
        })
      }
      onChangeReview(e)
      {
        this.setState({
          review: e.target.value
        })
        review=e.target.value;
      }

    render() {
    return (
      <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFM_xyIubtJwKiuFsU3IsBZqxlRbneCKvei3_rifJE098371NG05Ptm0cfoLoAqSrXCg&usqp=CAU"/>
                <span className="font-weight-bold">{this.state.username}</span><span className="text-black-50">{this.state.YoutubeLink}</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Course details</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Username</label><label className="form-control" >{this.state.username}</label></div>
                    <div className="col-md-6"><label className="labels">email</label><label className="form-control" >{this.state.email}</label></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">biography</label><label className="form-control" >{this.state.biography}</label></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">rating</label><label className="form-control" >{this.state.rating}</label></div>
                </div>
                <div className="row mt-3">
                <UserAccountDetails/>

<div className="col-md-6"><label className="labels">Review this instructor</label><div className="mt-5 text-center"><input  type="text"
          id="form3Example3" 
          placeholder="type your review here" 
                required
                className="form-control"
                value={this.state.review}
                onChange={this.onChangeReview}
                /><button className="btn btn-primary profile-button" type="button" onClick={this.onclickReviewButton}>Rate</button></div></div>
                    {/* <div className="col-md-6"><label className="labels">Register for this course</label><div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Register</button></div></div> */}
               </div>
              
            </div>
            </div>
        <div className="col-md-4">
        
        {this.allinstructors()}
         
        </div>
    </div>
</div>


    )
  }
}