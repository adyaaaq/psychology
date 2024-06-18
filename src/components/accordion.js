import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordion = ({ expanded, handleChange, panelId, title, content }) => {
  return (
    <Accordion 
      className={`accordion ${expanded === panelId ? 'expanded' : ''}`} 
      expanded={expanded === panelId} 
      onChange={handleChange(panelId)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${panelId}-content`}
        id={`${panelId}-header`}
        className="accordion-summary"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails className="accordion-details">
        {content}
        <p className='details-p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
