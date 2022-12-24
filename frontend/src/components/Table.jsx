import { useNavigate } from "react-router-dom";
 
const Table = ({ data }) => {
  const navigate = useNavigate(); 
    return (
      <table>
        <tbody>
          <tr>
            <th>title</th>
            <th>price</th>
            <th>Subject</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
             <button onClick={()=>{navigate(`/coursePage/${item._id}`)}}><td>{item.title}</td></button> 
              <td>{item.price}</td>
              <td>{item.Subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;