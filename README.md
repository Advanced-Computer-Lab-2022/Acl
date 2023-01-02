
University Portal - Online Learning System
## Motivation
University Portal is a university project for CSEN704 - 
Advanced Computer Lab course  at the GUC, the main purpose of 
the project was to build a complete online learning platform
system, where users of the web application can search for course,
register and attend courses. Moreover, you can use the web application
as an instructor to teach courses.


## Build Status
* Currently University Portal is a Minimum Value Product (MVP), which can be used by customers and let us observe how they interact with the system.

* Currently there are no known bugs/errors in the system, but if you find any pull requests are more than welcomed.


## Code Style
* Our Code style is standard 
## Screenshots
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
-
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

## API Reference 

1. [Axios](https://axios-http.com/docs/intro) for communication between backend and frontend
2. [Stripe](https://stripe.com/docs/js) for online Payments.
3. [Nodemailer](https://nodemailer.com/about/) for sending emails to users
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
[MIT License](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository)
## Credits
[https://wwww.youtube.com/NetNinga](https://www.youtube.com/results?search_query=net+ninga)

[https://wwww.mui.com](https://mui.com/)

[https://wwww.ReactBootStrap.com](https://react-bootstrap.github.io/)
