import React from "react";
import PropTypes from "prop-types";

const Youtube = ({ embedId }) =>  (
  
  <div className="video-responsive">
  
    <iframe
    id="myVideo"
     width="560" 
    height="315" 
    src={embedId}
     title="YouTube video player"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen

      >


      </iframe>
      
  </div>
);

Youtube.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Youtube;