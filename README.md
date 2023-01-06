
<h1> ✨ University Portal - Online Learning System ✨ </h1>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#motivation">Motivation </a>
    </li>
    <li>
      <a href="#build-status">Build Status</a>
    </li>
    <li><a href="#code-style">Code Style</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#framework-used">Framework Used</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#code-examples">Code Examples</a></li>
    <li><a href="#installations">Installations</a></li>
         <ul>
        <li><a href="#how-to-run-the-backend">how to run backend </a></li>
      </ul>
     <ul>
        <li><a href="#how-to-run-the-frontend">how to run frontend</a></li>
      </ul>
    <li><a href="#api-reference">Api Reference </a></li>
     <li><a href="#tests">Tests</a></li>
     <li><a href="#how-to-use">How to use?</a></li>
    <li><a href="#contribute">Contribute</a></li>
    <li><a href="#license">License</a></li>
  
 
  </ol>
</details>

### Theme 
The theme of the project, is to create an online learning system platform where you can sign up as an individual trainee or enter as corporate trainee based on your company ,  where you can register to a wide variety of courses in different fields taught by instructors with option of taking exams and in the end take your certificate , also the instructor can add any new course and all its material and the money will be transfered to his wallet according to the policy and contract agreed on. Similat to websites (Coursera , Udemy and Udacity)

## Motivation
University Portal is a university project for CSEN704 - 
Advanced Computer Lab course  at the GUC, the main purpose of 
the project was to build a complete online learning platform
system, where users of the web application can search for course,
register and attend courses. Moreover, you can use the web application
as an instructor to teach courses.


## Build Status

* Currently University Portal is a Minimum Value Product (MVP), which can be used by customers and let us observe how they interact with the system.

* Currently in development, there are no known bugs/errors in the system, but if you find any pull requests are more than welcomed.


## Code Style
* Our Code style is standard 
## Screenshots
1️. Home Page
   <img width="1399" alt="Screen Shot 2023-01-03 at 3 25 47 AM" src="https://user-images.githubusercontent.com/105871371/210346436-c8c11210-afeb-4b03-bd3e-de6735674b17.png">

2. Sign up Page
<img width="1399" alt="Screen Shot 2023-01-03 at 12 13 54 PM" src="https://user-images.githubusercontent.com/105871371/210346516-3d263d3b-9bf0-49e8-84d4-1f4a4da79bc7.png">

3. Login Page
<img width="1399" alt="Screen Shot 2023-01-03 at 3 25 58 AM" src="https://user-images.githubusercontent.com/105871371/210346539-d18570f1-2b9a-49f7-9600-90945f540d0c.png">

4. Payment method
 <img width="827" alt="Screen Shot 2023-01-03 at 12 45 24 PM" src="https://user-images.githubusercontent.com/105871371/210346598-7a511da6-bb3b-4338-b5af-37740c2007d4.png">

5. User Home Page
 <img width="1399" alt="Screen Shot 2023-01-03 at 12 49 06 PM" src="https://user-images.githubusercontent.com/105871371/210346628-343f5376-bd7e-4038-8dbb-dfc94f6cec68.png">

6. Admin Home Page
 <img width="1399" alt="Screen Shot 2023-01-03 at 12 50 49 PM" src="https://user-images.githubusercontent.com/105871371/210346666-a7681fbb-f639-4347-8ce6-4a10c75c0edd.png">


## Framework Used
This web application was build with MERN stack:

- MongoDB as our NoSQL database
- ExpressJS as our NodeJS wrapper
- ReactJS for our view library
- NodeJS for server-side JS runtime enviroment

Additional libraries used:

- React-BootStrap - a utility based CSS library
- BootStrap- a utility based CSS library
- Mui - a utility based CSS library
- Ant Design - a utility based CSS library
- Axios - promise-based http client
- Stripe - payment gateway
- jsonwebtoken
- bcryptjs
- mongoose - Object Document Mapper (ODM) of choice
## Features
- Visually appealing UI that helps the user enjoy his time browsing the website
- UX designed to guide the user smoothly and efficiently throughout the website with recovery from error, reversibility and learnability
- Responsive design which gives the user feedback about what is currently happening in the website

## Code Examples
* We use the MRC pattern(Module-Router-Controller)
1. Courses schema `courses.model`
<img width="864" alt="Screen Shot 2023-01-06 at 8 00 48 PM" src="https://user-images.githubusercontent.com/105871371/211071451-c8ea5982-e14d-4653-a59b-a2a4b7f80d2c.png">
<img width="864" alt="Screen Shot 2023-01-06 at 8 01 13 PM" src="https://user-images.githubusercontent.com/105871371/211071525-81e9f812-6ef9-48e6-ae86-8676bfa3dd82.png">

2.Create Course `courses.controller`
<img width="969" alt="Screen Shot 2023-01-06 at 8 04 42 PM" src="https://user-images.githubusercontent.com/105871371/211071977-bb5ccd85-e389-45d1-a67b-f2c8bf3932a6.png">

3.Routes used in `courses.routes`

      `router.post('/createcourses/:id', coursesCtrl.createCourses)`

## Installations

1. Get a free API Key at [https://localhost7007.com](https://example.com)
2. Clone the repository 
   ```sh
   git clone https://github.com/Advanced-Computer-Lab-2022/Acl.git

- Make sure you have [NodeJS](https://nodejs.org/en/) installed on your machine

  You can check by running

         node -v

  in your terminal to make sure NodeJS is setup correctly

- Make sure to include .env file in your directories

### How to run the frontend:

1.  In your terminal navigate to

         /Acl/frontend

2.  Install npm by running

         npm install

3.  Install required packages by running

         npm install

4.  Spin up the development server using

          npm start

    open your browser at http://localhost:3000

### How to run the backend:

1.  In your terminal navigate to

         /Acl/backend

2.  Install nodemon by running

         npm i -g nodemon

3.  Install required packages by running

         npm install

4.  Spin up the development backend using

          npx nodemon@latest app.js

    It will run on http://localhost:8080
    
## Environment variable
You need to add those variables to .env file

`ATLAS_URI`

`MONGO_URI`

`SERVER_PORT`

`AUTH_EMAIL` 

`AUTH_PASS`

## API Reference 

1. Sign up

`POST \signUp`

| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required.  Bearer token is added.|

| Body | Type | Description |
| --- | -- | --- |
| `username`| `String` | Required. username of IndividualTrainee|
| `password`| `String` | Required. password of IndividualTrainee|
| `email`| `String` | Required. email of IndividualTrainee|
| `firstName`| `String` | Required. first name of IndividualTrainee|
| `lastName`| `String` | Required. last name of IndividualTrainee|

> Response

  `
  {
  
        "auth": true,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjcwMWE0YzZjMDg2ODllM2RkOTM3MSIsImlhdCI6MTY3MjkzNzg5MiwiZXhwIjoxNjczMTk3MDkyfQ.yY5g_1_Vj-JA0PRNJcSkfft9h701JPJ8QorCoeD5Y8U",
        "result": {
            "username":"malak1",
            "password":"$2b$10$T8XROrQkHx1SBS6zkp7/6OJNPV4burY3H/7T1vHLY.5T1jP9jC9Yy",
            "first_name":"malak",
            "last_name":"ahmed",
            "gender":"female",
            "email":"malakeldardery15@gmail.com",
            "solution":[],
            "courses":[{"progress":{"$numberInt":"100"},
            "_id":{"$oid":"63b41c0ba505c4a576a9fc73"},
            "watchedVideos":[{"videoId":{"$oid":"63b41c0ba505c4a576a9fc77"},
            "_id":{"$oid":"63b41f7ca505c4a576a9fd69"}}],
            "examGrades":[]}],
            "createdAt":{"$date":{"$numberLong":"1672748164785"}},
            "updatedAt":{"$date":{"$numberLong":"1672752098572"}},
            "__v":{"$numberInt":"0"},
            "wallet":{"$numberInt":"320"}}
    }
    }
    `

2. Login

` POST \login`

| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required.  Bearer token is added.|

| Body | Type | Description |
| --- | -- | --- |
| `username`| `String` | Required. username of user|
| `password`| `String` | Required. password of user|
> Response

 
 `
  {
      
      "auth": true,
      "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjMzNGI1ZmYxOWE1ZTYzZjU3ZGExOSIsImlhdCI6MTY3MjkzNzAxMCwiZXhwIjoxNjczMTk2MjEwfQ.XiaLlVKPZ2w4808vb1s8fbVEMqEXIuAnrtS5BOvVJEk",
      
      "result": {
          "_id": "63b334b5ff19a5e63f57da19",
          "username": "hello",
          "password": "$2b$10$tUIvGiUZyfG/OMKoO9mlzOc0q9ZeHj99V6UvGWNCR28nAfjzgOWJO",
          "type": "Admin",
          "reviews": [],
          "registeredCourses": [],
          "createdAt": "2023-01-02T19:47:01.147Z",
          "updatedAt": "2023-01-03T09:10:47.042Z",
          "__v": 0
        }
 }
 `

3. Logout

`GET \logout`

> Response

`"Logged Out"`

4. Add Admin


`POST admin\createadmin`

| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required. Bearer token of the Admin.|

| Body | Type | Description |
| --- | -- | --- |
| `username`| `String` | Required. username of Admin|
| `password`| `String` | Required. password of Admin|


> Response

 `
 {
    
      
      "username":"hello",
      
      "password":"$2b$10$QZSrKkUJw89nWm7/pYOLyO1.fW9h0R31/3sBdXig66MjeY0bfc4sW",
      
      "admin":true,
      
      "createdAt":{"$date":{"$numberLong":"1672746189151"}},
      
      "updatedAt":{"$date":{"$numberLong":"1672746189151"}},
      
      "__v":{"$numberInt":"0"}
      
}
`

5.Add Corporate Trainee


`POST \addCorporateTrainee`

| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required. Bearer token of the Admin.|

| Body | Type | Description |
| --- | -- | --- |
| `username`| `String` | Required. username of Corporate Trainee|
| `password`| `String` | Required. password of Corporate Trainee|

> Response

` 
{

      "username": "malak1",
      "password": "$2b$10$ys73Uq3uguhPkcx5rTAfLux8oEoeSPkLIfE.km7ApIpk92jJyc.tW",
      "type": "Corporate Trainee",
      "reviews": [],
      "registeredCourses": [],
      "_id": "63b427bee51b3b865c5812a4",
      "createdAt": "2023-01-03T13:03:58.285+00:00",
      "updatedAt": "2023-01-03T13:13:52.897+00:00",
      "__v": 0
} 
`

6. Add Instructor


`POST \addInstructor`

| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required. Bearer token of the Admin.|

| Body | Type | Description |
| --- | -- | --- |
| `username`| `String` | Required. username of Instructor|
| `password`| `String` | Required. password of Instructor|

> Response

`
{
      
      "name:"sama",
      "username":"sama1",
      "email":"samayasser424@gmail.com",
      "password":"$2b$10$kWS7YcE3UNWa/kToQRu2juWHAPsjXDgschvW24Qynq8wRqHzf696O",
      "FirstTime":false,
      "coursesGiven":[{"$oid":"63b4158a8cc2eb8d8c2e2c9d"},
      {"$oid":"63b41c0ba505c4a576a9fc73"}],
      "rating":{"$numberDecimal":""},
      "ratingCounter":{"$numberInt":""},
      "Review":"",
      "createdAt":{"$date":{"$numberLong":"1672746246216"}},
      "updatedAt":{"$date":{"$numberLong":"1672750158978"}},
      "__v":{"$numberInt":"0"},
      "biography":""
   }
}
`

7. Create Course

`POST \createCourse`
 
| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required. Bearer token of the Instructor.|

| Body | Type | Description |
| --- | -- | --- |
| `title`| `String` | Required. title of Course|
| `summary`| `String` | Required. summary of Course|
| `defaultPrice`| `String` | Required. summary of Course|
| `subject`| `String` | Required. summary of Course|
| `link`| `String` | Required. summary of Course|

> Response

`
{

    "title":"math",
  
    "preview":[{"Video":[{"youtube_video_link":"https://www.youtube.com/watch?v=ZRMd5YpZ7oQ","description":"reactJs",
  
    "_id":{"$oid":"63b4158a8cc2eb8d8c2e2c9f"}}],
  
    "_id":{"$oid":"63b4158a8cc2eb8d8c2e2c9e"}}],
  
    "Subtitle":[{"SubName":"algebre",
  
    "durationSub":"1","exercisesNum":{"$numberInt":"1"},
  
    "Video":[{"youtube_video_link":"https://www.youtube.com/watch?v=MY6ZZIn93V8",
  
    "description":"reactJs","_id":{"$oid":"63b4158a8cc2eb8d8c2e2ca1"}}],
  
    "_id":{"$oid":"63b4158a8cc2eb8d8c2e2ca0"}}],
  
    "price":{"$numberInt":"160"},
  
    "summary":"i love math",
  
    "duration":"2",
  
    "levelOfCourse":"2",
  
    "rating":{"$numberDecimal":"0"},
  
    "ratingCounter":{"$numberInt":"0"},
  
    "Review":[],
  
    "Subject":"geometrie",
  
    "mcqExam":[],
  
    "Currency":"EGP",
  
    "Instructor":{"$oid":"63b415068cc2eb8d8c2e2c8f"},
  
    "discount":[{"discountamount":{"$numberInt":"20"},
  
    "startdate":{"$date":{"$numberLong":"1674000000000"}},
  
    "enddate":{"$date":{"$numberLong":"1674259200000"}},
  
    "_id":{"$oid":"63b425d4a505c4a576aa016b"}}],
  
    "createdAt":{"$date":{"$numberLong":"1672746378389"}},
  
    "updatedAt":{"$date":{"$numberLong":"1672751066316"}},
  
    "__v":{"$numberInt":"0"},
  
    "numOfEnrolledStudents":{"$numberInt":"1"},
  
    "numOfVisitors":{"$numberInt":"1"}}
}

`

8.View All Coueses

`GET \viewallcourses`


> Response

` [
    {
     
        "_id":{"$oid":"63b4158a8cc2eb8d8c2e2c9d"},
        "title":"math",
        "preview":[{"Video":[{"youtube_video_link":"https://www.youtube.com/watch?v=ZRMd5YpZ7oQ",
        "description":"reactJs",
        "_id":{"$oid":"63b4158a8cc2eb8d8c2e2c9f"}}],
        "_id":{"$oid":"63b4158a8cc2eb8d8c2e2c9e"}}],
        "Subtitle":[{"SubName":"algebre",
        "durationSub":"1",
        "exercisesNum":{"$numberInt":"1"},
        "Video":[{"youtube_video_link":"https://www.youtube.com/watch?v=MY6ZZIn93V8",
        "description":"reactJs",
        "_id":{"$oid":"63b4158a8cc2eb8d8c2e2ca1"}}],
        "_id":{"$oid":"63b4158a8cc2eb8d8c2e2ca0"}}],
        "price":{"$numberInt":"160"},
        "summary":"i love math",
        "duration":"2",
        "levelOfCourse":"2",
        "rating":{"$numberDecimal":"0"},
        "ratingCounter":{"$numberInt":"0"},
        "Review":[],
        "Subject":"geometrie",
        "mcqExam":[],
        "Currency":"EGP",
        "Instructor":{"$oid":"63b415068cc2eb8d8c2e2c8f"},
        "discount":[{"discountamount":{"$numberInt":"20"},
        "startdate":{"$date":{"$numberLong":"1674000000000"}},
        "enddate":{"$date":{"$numberLong":"1674259200000"}},
        "_id":{"$oid":"63b425d4a505c4a576aa016b"}}],
        "createdAt":{"$date":{"$numberLong":"1672746378389"}},
        "updatedAt":{"$date":{"$numberLong":"1673020988511"}},
        "__v":{"$numberInt":"0"},
        "numOfEnrolledStudents":{"$numberInt":"2"},
        "numOfVisitors":{"$numberInt":"1"}}
    },
    {
        "_id":{"$oid":"63b41c0ba505c4a576a9fc73"},
        "title":"CS",
        "preview":[{"Video":[{"youtube_video_link":"https://www.youtube.com/watch?v=ZRMd5YpZ7oQ","description":"NET NINJA",
        "_id":{"$oid":"63b41c0ba505c4a576a9fc75"}}],
        "_id":{"$oid":"63b41c0ba505c4a576a9fc74"}}],
        "Subtitle":[
        {"SubName":"CS101",
        "durationSub":"2",
        "exercisesNum":{"$numberInt":"2"},
        "Video":[{"youtube_video_link":"https://www.youtube.com/watch?v=ZRMd5YpZ7oQ",
        "description":"NET NINJA",
        "_id":{"$oid":"63b41c0ba505c4a576a9fc77"}}],
        "_id":{"$oid":"63b41c0ba505c4a576a9fc76"}}],
        "price":{"$numberInt":"2000"},
        "summary":"HARD ",
        "duration":"20 HOURS",
        "levelOfCourse":"1",
        "rating":{"$numberDecimal":"3"},
        "ratingCounter":{"$numberInt":"1"},
        "Review":["hii"],
        "Subject":"COMP",
        "mcqExam":[],
        "Currency":"EGP",
        "Instructor":{"$oid":"63b415068cc2eb8d8c2e2c8f"},
        "discount":[],
        "createdAt":{"$date":{"$numberLong":"1672748043931"}},
        "updatedAt":{"$date":{"$numberLong":"1672749073957"}},
        "__v":{"$numberInt":"0"},
        "numOfEnrolledStudents":{"$numberInt":"1"}
        }      
]`


9. Reprot a problem

`POST \reportProblem`
 
| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required. Bearer token of the User.|

| Body | Type | Description |
| --- | -- | --- |
| `type`| `String` | Required. type of Problem|
| `theProblem`| `String` | Required. body of Problem|

| query | Type | Description |
| --- | -- | --- |
| `courseId`| `String` | Required. Id of course|

> Response

`
{

          "name":"not working",
          "type":"tech",
          "status":"",
          "course":[{"$oid":"63b41c0ba505c4a576a9fc73"}],
          "instructor":[{"$oid":"63b415068cc2eb8d8c2e2c8f"}],
          "individualtrainee":[],
          "corporatetrainee":[],
          "Description":"ggghbhbh",
          "followups":[{"number":{"$numberInt":"1"},
          "Description":"not working2",
          "_id":{"$oid":"63b42509a505c4a576aa014d"}}],
          "createdAt":{"$date":{"$numberLong":"1672750303767"}},
          "updatedAt":{"$date":{"$numberLong":"1672752611236"}},
          "__v":{"$numberInt":"0"}}
}
`

10. View Reported Problems
`GET \getcortraineereports`
`GET \getindividualreports`
`GET \getinstructorreports`

 
| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required. Bearer token of the User.|




> Response

`
{
    {
    
          "name":"not working",
          
          "type":"tech",
          
          "status":"",
          "course":[{"$oid":"63b41c0ba505c4a576a9fc73"}],
          
          "instructor":[{"$oid":"63b415068cc2eb8d8c2e2c8f"}],
          
          "individualtrainee":[],
          
          "corporatetrainee":[],
          
          "Description":"ggghbhbh",
          
          "followups":[{"number":{"$numberInt":"1"},
          
          "Description":"not working2",
          
          "_id":{"$oid":"63b42509a505c4a576aa014d"}}],
          
          "createdAt":{"$date":{"$numberLong":"1672750303767"}},
          
          "updatedAt":{"$date":{"$numberLong":"1672752611236"}},
          
          "__v":{"$numberInt":"0"}}
    }
}
`

11. Add Follow Up

`PATCH \followup`


| Body | Type | Description |
| --- | -- | --- |
| `problem`| `String` | Required. problem ID of Problem|
| `followUp`| `String` | Required. followup of Problem|


> Response 

`
{

          "name":"not working",
          
          "type":"tech",
          
          "status":"unseen",
          
          "course":[{"$oid":"63b41c0ba505c4a576a9fc73"}],
          
          "instructor":[{"$oid":"63b415068cc2eb8d8c2e2c8f"}],
          
          "individualtrainee":[],
          
          "corporatetrainee":[],
          
          "Description":"ggghbhbh",
          
          "followups":[ "hello",
          
          "Description":"not working2",
          
          "_id":{"$oid":"63b42509a505c4a576aa014d"}}],
          
          "createdAt":{"$date":{"$numberLong":"1672750303767"}},
          
          "updatedAt":{"$date":{"$numberLong":"1672752611236"}},
          
          "__v":{"$numberInt":"0"}}
          
}
`
12. Resolve Reported Problem

`PATCH \solve`


| Body | Type | Description |
| --- | -- | --- |
| `problem`| `String` | Required. problem ID of Problem|
| `status`| `String` | Required. status of Problem|


> Response

`
{
    {
    
          "name":"not working",
          
          "type":"tech",
          
          "status":"resolved",
          "course":[{"$oid":"63b41c0ba505c4a576a9fc73"}],
          
          "instructor":[{"$oid":"63b415068cc2eb8d8c2e2c8f"}],
          
          "individualtrainee":[],
          
          "corporatetrainee":[],
          
          "Description":"ggghbhbh",
          
          "followups":[{"number":{"$numberInt":"1"},
          
          "Description":"not working2",
          
          "_id":{"$oid":"63b42509a505c4a576aa014d"}}],
          
          "createdAt":{"$date":{"$numberLong":"1672750303767"}},
          
          "updatedAt":{"$date":{"$numberLong":"1672752611236"}},
          
          "__v":{"$numberInt":"0"}}
    }
}
`

13. Request Refund

`POST \requestRefund`

| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required. Bearer token of the User.|

| query | Type | Description |
| --- | -- | --- |
| `courseId`| `String` | Required. Id of course|

> Response

`
{

      "_id":{"$oid":"63b42294a505c4a576a9ffb7"},
      
      "trainee":{"$oid":"63b41c84a505c4a576a9fc90"},
      
      "course":{"$oid":"63b4158a8cc2eb8d8c2e2c9d"},
      
      "status":"",
      
      "createdAt":{"$date":{"$numberLong":"1672749716206"}},
      
      "updatedAt":{"$date":{"$numberLong":"1672752098766"}},
      
      "__v":{"$numberInt":"0"}
    
}`


14. Approve Refund Request

`PATCH \approverefund`

| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required. Bearer token of the User.|


| Body | Type | Description |
| --- | -- | --- |
| `status`| `String` | Required. whether Problem accepted or not|




> Response

`
[
    {
    
        "_id":{"$oid":"63b42294a505c4a576a9ffb7"},
        
        "trainee":{"$oid":"63b41c84a505c4a576a9fc90"},
        
        "course":{"$oid":"63b4158a8cc2eb8d8c2e2c9d"},
        
        "status":"approved",
        
        "createdAt":{"$date":{"$numberLong":"1672749716206"}},
        
        "updatedAt":{"$date":{"$numberLong":"1672752098766"}},
        
        "__v":{"$numberInt":"0"}
        
    }
]`

14. Decline Refund Request

`PATCH \declinerefund`

| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required. Bearer token of the User.|


| Body | Type | Description |
| --- | -- | --- |
| `status`| `String` | Required. whether Problem accepted or not|




> Response

`
[
    {
    
        "_id":{"$oid":"63b42294a505c4a576a9ffb7"},
        
        "trainee":{"$oid":"63b41c84a505c4a576a9fc90"},
        
        "course":{"$oid":"63b4158a8cc2eb8d8c2e2c9d"},
        
        "status":"declined",
        
        "createdAt":{"$date":{"$numberLong":"1672749716206"}},
        
        "updatedAt":{"$date":{"$numberLong":"1672752098766"}},
        
        "__v":{"$numberInt":"0"}
    }
]
`

15. View Access Request

`GET \accessrequests`

| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required. Bearer token of the User.|


> Response

`
[
    {

        "_id":{"$oid":"63b429a3a505c4a576aa01f4"},
        
        "courseId":{"$oid":"63b4158a8cc2eb8d8c2e2c9d"},
        
        "corporatetrainee":{"$oid":"63b427bee51b3b865c5812a4"},
        
        "status":"",
        
        "__v":{"$numberInt":"0"}
        
    }
]
`

16. Approve Access Request

`PATCH \approverequests`

| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required. Bearer token of the User.|


| Body | Type | Description |
| --- | -- | --- |
| `status`| `String` | Required. whether Access approved or not|


> Response

`
[
    {

        "_id":{"$oid":"63b429a3a505c4a576aa01f4"},
        
        "courseId":{"$oid":"63b4158a8cc2eb8d8c2e2c9d"},
        
        "corporatetrainee":{"$oid":"63b427bee51b3b865c5812a4"},
        
        "status":"approved",
        
        "__v":{"$numberInt":"0"}
        
    }
]
`

17. Edit Instructor Info

`PATCH \EditMyProfile`


| Body | Type | Description |
| --- | -- | --- |
| `email`| `String` | Required. email of Instructor|
| `biography`| `String` | Required. biography of Instructor|

| query | Type | Description |
| --- | -- | --- |
| `courseId`| `String` | Required. Id of course|


> Response

`
{
      
      "name:"sama",
      "username":"sama1",
      "email":"samayasser@gmail.com",
      "password":"$2b$10$kWS7YcE3UNWa/kToQRu2juWHAPsjXDgschvW24Qynq8wRqHzf696O",
      "FirstTime":false,
      "coursesGiven":[{"$oid":"63b4158a8cc2eb8d8c2e2c9d"},
      {"$oid":"63b41c0ba505c4a576a9fc73"}],
      "rating":{"$numberDecimal":"2"},
      "ratingCounter":{"$numberInt":"2"},
      "Review":"hello",
      "createdAt":{"$date":{"$numberLong":"1672746246216"}},
      "updatedAt":{"$date":{"$numberLong":"1672750158978"}},
      "__v":{"$numberInt":"0"},
      "biography":"fgghg"
}
`

18. Set Discount

`PATCH \definepromotion`

| Body | Type | Description |
| --- | -- | --- |
| `discount`| `String` | Required. Discount Amount|
| `startDate`| `String` | Required. startdate of Discount|
| `endDate`| `String` | Required. enddate of Discount|

| query | Type | Description |
| --- | -- | --- |
| `courseId`| `String` | Required. Id of Course|


> Response


`
{

        "_id": "63b4158a8cc2eb8d8c2e2c9d",
        
        "discountamount": "20",
        
        "startdate":"2023-01-18T00:00:00.000+00:00",
        
        "enddate":"2023-01-21T00:00:00.000+00:00",
        
        "_id":"63b425d4a505c4a576aa016b",
        
        "createdAt":"2023-01-03T11:46:18.389+00:00",
        
        "updatedAt":"2023-01-06T16:03:08.511+00:00",

        "__v": 0
 }
 `
 
 19.View Progress

 `GET \progress`

| Headers | Type | Description |
| --- | -- | --- |
| `Authorization`| `String` | Required. Bearer token of the User.|
 
| query | Type | Description |
| --- | -- | --- |
| `courseId`| `String` | Required. Id of Course|

> Response

`
{
    "value": 0
}` 

20.Add Rating


`PUT \rateinstructor`


| Body | Type | Description |
| --- | -- | --- |
| `rating`| `String` | Required. rate of Instructor|
| `review`| `array` | Required. review of Instructor|

| query | Type | Description |
| --- | -- | --- |
| `instructorId`| `String` | Required. Id of course|


> Response

`
{
      
      "name:"sama",
      "username":"sama1",
      "email":"samayasser@gmail.com",
      "password":"$2b$10$kWS7YcE3UNWa/kToQRu2juWHAPsjXDgschvW24Qynq8wRqHzf696O",
      "FirstTime":false,
      "coursesGiven":[{"$oid":"63b4158a8cc2eb8d8c2e2c9d"},
      {"$oid":"63b41c0ba505c4a576a9fc73"}],
      "rating":{"$numberDecimal":"2"},
      "ratingCounter":{"$numberInt":"1"},
      "Review":"hello",
      "createdAt":{"$date":{"$numberLong":"1672746246216"}},
      "updatedAt":{"$date":{"$numberLong":"1672750158978"}},
      "__v":{"$numberInt":"0"},
      "biography":"fgghg"
}
`

21. Filter all courses

`GET \filterallcoursessubject`

| query | Type | Description |
| --- | -- | --- |
| `price`| `String` | Required. Price to be filter|
| `rating`| `String` | Required. Rating to be filter|
| `subject`| `String` | Required. Subject to be filter|


> Response

` [
    {
     
        "_id":{"$oid":"63b4158a8cc2eb8d8c2e2c9d"},
        "title":"math",
        "preview":[{"Video":[{"youtube_video_link":"https://www.youtube.com/watch?v=ZRMd5YpZ7oQ",
        "description":"reactJs",
        "_id":{"$oid":"63b4158a8cc2eb8d8c2e2c9f"}}],
        "_id":{"$oid":"63b4158a8cc2eb8d8c2e2c9e"}}],
        "Subtitle":[{"SubName":"algebre",
        "durationSub":"1",
        "exercisesNum":{"$numberInt":"1"},
        "Video":[{"youtube_video_link":"https://www.youtube.com/watch?v=MY6ZZIn93V8",
        "description":"reactJs",
        "_id":{"$oid":"63b4158a8cc2eb8d8c2e2ca1"}}],
        "_id":{"$oid":"63b4158a8cc2eb8d8c2e2ca0"}}],
        "price":{"$numberInt":"160"},
        "summary":"i love math",
        "duration":"2",
        "levelOfCourse":"2",
        "rating":{"$numberDecimal":"0"},
        "ratingCounter":{"$numberInt":"0"},
        "Review":[],
        "Subject":"geometrie",
        "mcqExam":[],
        "Currency":"EGP",
        "Instructor":{"$oid":"63b415068cc2eb8d8c2e2c8f"},
        "discount":[{"discountamount":{"$numberInt":"20"},
        "startdate":{"$date":{"$numberLong":"1674000000000"}},
        "enddate":{"$date":{"$numberLong":"1674259200000"}},
        "_id":{"$oid":"63b425d4a505c4a576aa016b"}}],
        "createdAt":{"$date":{"$numberLong":"1672746378389"}},
        "updatedAt":{"$date":{"$numberLong":"1673020988511"}},
        "__v":{"$numberInt":"0"},
        "numOfEnrolledStudents":{"$numberInt":"2"},
        "numOfVisitors":{"$numberInt":"1"}}
    },
    {
        "_id":{"$oid":"63b41c0ba505c4a576a9fc73"},
        "title":"CS",
        "preview":[{"Video":[{"youtube_video_link":"https://www.youtube.com/watch?v=ZRMd5YpZ7oQ","description":"NET NINJA",
        "_id":{"$oid":"63b41c0ba505c4a576a9fc75"}}],
        "_id":{"$oid":"63b41c0ba505c4a576a9fc74"}}],
        "Subtitle":[
        {"SubName":"CS101",
        "durationSub":"2",
        "exercisesNum":{"$numberInt":"2"},
        "Video":[{"youtube_video_link":"https://www.youtube.com/watch?v=ZRMd5YpZ7oQ",
        "description":"NET NINJA",
        "_id":{"$oid":"63b41c0ba505c4a576a9fc77"}}],
        "_id":{"$oid":"63b41c0ba505c4a576a9fc76"}}],
        "price":{"$numberInt":"2000"},
        "summary":"HARD ",
        "duration":"20 HOURS",
        "levelOfCourse":"1",
        "rating":{"$numberDecimal":"3"},
        "ratingCounter":{"$numberInt":"1"},
        "Review":["hii"],
        "Subject":"COMP",
        "mcqExam":[],
        "Currency":"EGP",
        "Instructor":{"$oid":"63b415068cc2eb8d8c2e2c8f"},
        "discount":[],
        "createdAt":{"$date":{"$numberLong":"1672748043931"}},
        "updatedAt":{"$date":{"$numberLong":"1672749073957"}},
        "__v":{"$numberInt":"0"},
        "numOfEnrolledStudents":{"$numberInt":"1"}
        }      
]`

## Tests
- Postman can be used to test the functionality of different API endpoints make sure to attach bearer token if endpoint requires token

- Any browser can be used to test the functionality of the frontend webpages and web compenents and the integration with the
## How to use?
What can you do on the portal

- Login/Signup to the portal
- Go to the admin dashboard if signed in with admin account

  - Create Users (Instructor, CorpotateTrainee, Admin)
  - Set course promotion
  - View and grant access to course requests
  - Accept or Decline course's refund requests
  - View reported problems and mark resolved or pending

- Go to the Individual Trainee home if signed in with Individual Trainee account

  - Search for a course
  - Choose a course 
  - View Course details if signned in
  - Register in a course and pay for it
  - Enter visa details
  - Confirm payment to be enrolled
  - Rate
  - Add review
  - Add Report
  - Watch videos
  - Take exams

- Go to the Corporate Trainee home if signed in with Corporate Trainee account
    - Rate 
    - Add review
    - Add Report
    - Watch videos
    - Take exams
    - Request access to specific course

- Go to the Instructor home if signed in with Instructor account

  - Create Course
  - Create exams
  - Add Report
  - Upload Videos
  - Update your personal informations


  - Update your password

  - Logout

## Contribute 
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch
            
             git checkout -b BranchName
3. Commit your Changes 
           
            git commit -m 'message'
4. Push to the Branch 

            git push origin BranchName
5. Open a Pull Request

## License
* [MIT License](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository)

* [Apache Licence](https://httpd.apache.org/)
## Credits
✨[https://wwww.youtube.com/NetNinga](https://www.youtube.com/results?search_query=net+ninga)

✨[https://wwww.mui.com](https://mui.com/)

✨[https://wwww.ReactBootStrap.com](https://react-bootstrap.github.io/)

## Authors
- Marco Moheb
- Malak Eldardeery
- Sama Yasser
- Mansour Mohamed
- Alaa Ali