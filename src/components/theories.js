// src/components/AccordionUsage.js
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './AccordionUsage.css'; // Import the CSS file

export default function AccordionUsage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='Accordion-contianer'>
      <Accordion 
        className={`accordion ${expanded === 'panel1' ? 'expanded' : ''}`} 
        expanded={expanded === 'panel1'} 
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="accordion-summary"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion 
        className={`accordion ${expanded === 'panel2' ? 'expanded' : ''}`} 
        expanded={expanded === 'panel2'} 
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordion-summary"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
