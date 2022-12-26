// import React from 'react'

// const PlayVid = () => {
//     const [courses, setCourses]= useState([])
//     const [url, seturl]= useState([])


//     const getCourses = async () =>{
//     const params = new URLSearchParams(window.location.search);
//     const traineeId = params.get('id');
//     console.log(traineeId);
//     await axios.get(`http://localhost:7007/indiviualtrainee/Courses?id=${traineeId}`).then(
//         (res) =>{
//             const resCourses = res.data
//             console.log(resCourses)
//             setCourses(resCourses)
//         })}

//   return (
//     <Modal
//     isOpen={modalIsOpen}  
//     onRequestClose={() => setModalIsOpen(false)}
//     contentLabel="Exercise Completed"
//     style={modalStyles}
//   >
//     <div>
//       <h3>Completed the exercise?</h3>
//       <button
//         onClick={handleExerciseComplete}
//       >
//         Complete exercise
//       </button>
//     </div>
//   </Modal>
//   )
// }

// export default PlayVid
