import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const RequestSubmitted = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onClick1 = () => {
    navigate(`/corporatetrainee/${id}`);
  };

  return (
    <div className="home">
      <h2>Request Submitted Successfully!</h2>
      <button onClick={onClick1}>Back to home page</button>
    </div>
  );
};

export default RequestSubmitted;