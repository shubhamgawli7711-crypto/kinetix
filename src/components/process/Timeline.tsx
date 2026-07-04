import { processSteps } from "../../data/processData";

interface Props{

    activeStep:number;

}

export default function Timeline({

    activeStep

}:Props){

return(

<div className="timeline">

<div className="timeline-line">

<div

className="timeline-progress"

style={{

height:`${(activeStep/3)*100}%`

}}

></div>

</div>

{

processSteps.map((step,index)=>(

<div

key={step.number}

className={

`timeline-item

${activeStep>=index?"active":""}

`

}

>

<div className="timeline-dot"></div>

<span>

{step.title}

</span>

</div>

))

}

</div>

);

}