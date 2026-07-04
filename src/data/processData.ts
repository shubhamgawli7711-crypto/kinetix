export interface ProcessStep {

    number: string;

    title: string;

    description: string;

    points: string[];

}

export const processSteps: ProcessStep[] = [

{

number:"01",

title:"Discover",

description:
"Every successful project begins with understanding your business. We research your market, audience and goals before making a single creative decision.",

points:[

"Brand Research",

"Audience Analysis",

"Competitor Study",

"Goal Mapping"

]

},

{

number:"02",

title:"Strategize",

description:
"We transform insights into a clear execution plan that aligns creativity with measurable business outcomes.",

points:[

"Creative Direction",

"Content Strategy",

"Campaign Planning",

"Execution Roadmap"

]

},

{

number:"03",

title:"Create",

description:
"From cinematic videos and branding to websites and marketing campaigns, every asset is crafted with precision.",

points:[

"Video Production",

"Brand Identity",

"Website Development",

"Motion Graphics"

]

},

{

number:"04",

title:"Evolve",

description:
"We launch, analyse and continuously optimise every project to maximise long-term performance and growth.",

points:[

"Launch",

"Optimisation",

"Analytics",

"Scaling"

]

}

];