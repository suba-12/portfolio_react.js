import React from 'react';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";



function Education() {
  return (
    <div className="experiance">
      <VerticalTimeline lineColor="#e9d35b"> 
        <VerticalTimelineElement  className="Vertical-timeline-element--education"
        date="2018 - 2019"
        iconStyle ={{ background:"#e9d35b",color:"#fff"}}
        >
          <h2 className="Vertical-timeline-element-tittle">
            <h1>Completed Class 10</h1> 
            I'm Completed My SSLC with good marks !</h2>

        </VerticalTimelineElement>
        
        <VerticalTimelineElement  className="Vertical-timeline-element--title"
        date="2019 - 2021"
        iconStyle ={{ background:"#e9d35b",color:"#fff"}}
        >
          <h2 className="Vertical-timeline-element-tittle">
            <h1>Completed Class 12</h1> 
            I'm Completed My Higher Secondary  with good marks !</h2>
        </VerticalTimelineElement>
       
        
        <VerticalTimelineElement  className="Vertical-timeline-element--year"
        date="2021 - 2021"
        iconStyle ={{ background:"#e9d35b",color:"#fff"}}
        >
          <h2 className="Vertical-timeline-element-year">
            <h1>Joining First year</h1> 
            I'm Completed My First semester and Second semesterwith good Percentage !</h2>

        </VerticalTimelineElement>
        
        <VerticalTimelineElement  className="Vertical-timeline-element--college"
        date="2022 - 2023"
        iconStyle ={{ background:"#e9d35b",color:"#fff"}}
        >
          <h2 className="Vertical-timeline-element-college">
            <h1>Joining Second year</h1> 
            Now,I'm in Third semester !</h2>

        </VerticalTimelineElement>
        </VerticalTimeline>

         </div>
  )
}

export default Education