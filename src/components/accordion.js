import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordion = ({ expanded, handleChange, panelId, title, content, content_list }) => {
  const paragraphs = content.split("##").map(paragraph => paragraph.trim()).filter(paragraph => paragraph);
  const paragraphs_list = content_list.split("##").map(paragraph => paragraph.trim()).filter(paragraph => paragraph);

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
        {/* Render content with <br /> for line breaks */}
        

        {/* Render content paragraphs separated by '##' */}
        <div className="content-paragraphs">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="details-p">{paragraph}</p>
          ))}
        </div>
        
        {/* Render content_list paragraphs separated by '##' */}
        <div className="content-list">
        {paragraphs_list.map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph.split('\n').map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {/* Add line number and text together */}
                  {lineIndex === 0 ? (
                    <p className="details-p-list">
                      {index + 1}. {line}
                    </p>
                  ) : (
                    <p className="details-p-list indent">
                      {line}
                    </p>
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>

      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
