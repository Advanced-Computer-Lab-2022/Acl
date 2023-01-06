import * as React from 'react';
import ReactPlayer from 'react-player'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import WriteNotes from './WriteNotes';
import { useParams } from 'react-router-dom';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));const ViewSubtitles=({subtitle})=> {
    const [expanded, setExpanded] = React.useState('panel1');
    const { id, id1 } = useParams();
    const videoClick = async (videoid) => {
        try {
          //console.log("hiiiiiiiiiiiiiiiii");
          const response = await fetch(
            `/indiviualtrainee/watchvideo?traineeId=${id}&courseId=${id1}&videoId=${videoid}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">{subtitle.SubName}</AccordionSummary>
       
        <AccordionDetails>
        <ReactPlayer
          width="640px"
          height="360px"
          url={"https://www.youtube.com/watch?v=0F_UQF2gC_g"}
          // url={subtitle.Video[0].youtube_video_link}
          title="Youtube Player"
          controls="true"
          frameborder="0"
          allowFullScreen
          onEnded={() => videoClick(subtitle.Video[0]._id)}
        /><WriteNotes/></AccordionDetails>
    <AccordionDetails>
    Video Description: {subtitle.Video[0].description
      }
    </AccordionDetails>
    
         <AccordionDetails>
        Duration: {subtitle.durationSub} Hours
    </AccordionDetails>
    
      
    </Accordion>
  );
}

export default ViewSubtitles
;