// src/components/AccordionUsage.js
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './AccordionUsage.css'; // Import the CSS file
import CustomAccordion from './accordion';

export default function AccordionUsage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='Accordion-contianer'>
       <CustomAccordion 
        expanded={expanded} 
        handleChange={handleChange} 
        panelId="panel1" 
        title="Сэтгэц - Бэлгийн хөгжил (Психосектуаль)" 
        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."} 
      />
       <CustomAccordion 
        expanded={expanded} 
        handleChange={handleChange} 
        panelId="panel2" 
        title="Оюун ухааны хөгжлийн онолууд (Интеллект)" 
        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."} 
      />
       <CustomAccordion 
        expanded={expanded} 
        handleChange={handleChange} 
        panelId="panel3" 
        title="Ёс суртахууны хөгжлийн үе шатууд (Этический)" 
        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."} 
      />
      <CustomAccordion 
       expanded={expanded} 
       handleChange={handleChange} 
       panelId="panel4" 
       title="Сэтгэц нийгмийн хөгжлийн үе шатууд (Психосоциаль)" 
       content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."} 
     />
     <CustomAccordion 
      expanded={expanded} 
      handleChange={handleChange} 
      panelId="panel5" 
      title="Ээнэгшлийн онол" 
      content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."} 
    />




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
          <p className='details-p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
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
    </div>
  );
}
