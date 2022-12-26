import {useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate=useNavigate();
const onClick1=()=>{
    navigate('/Admin')}
const onClick2=()=>{
    navigate('/Guest')}
const onClick3=()=>{
    navigate('/Instructor/63a4b47f6cceaf80a95f6530')}
const onClick4=()=>{
    navigate('/IndividualTrainee/63a201d7ae08968b11a08416')}
    const onClick5=()=>{
        navigate('/CorporateTrainee')}
    return (
      <div className="home">
        <h2>Home</h2>
        <button onClick={onClick1}>
        Admin   
        </button>
        <button onClick={onClick2}>
        Guest
        </button>
        <button onClick={() => window.location.href=`/Instructor?userId=${"63a4b47f6cceaf80a95f6530"}`}>
        Instructor
        </button>
        <button onClick={() => window.location.href=`/IndividualTrainee?userId=${"63a6eef8fa29a2b8626fe008"}`}>
        Individual Trainee
        </button>
        <button onClick={onClick5}>
        Corporate Trainee
        </button>
      </div>
    );
  };
  
  export default Home;