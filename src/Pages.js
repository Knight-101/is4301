import './App.css';
export const modules=[['BT1101','Introduction to Business Analytics'],['BT2101','Econometrics Modelling for Business Analytics'],['BT2102','Data Management and Visualisation'],['BT2103','Optimization Methods in Business Analytics']];
export function Home(){return <><h1>Welcome to NUS</h1><p>NUS is a leading research university in Asia</p><p>Explore the modules and admission process using the navigation above.</p></>;}
export function Academics(){return <><h1>Academics</h1><table><thead><tr><th>Module Code</th><th>Module Title</th></tr></thead><tbody>{modules.map(([code,title])=><tr key={code}><td>{code}</td><td>{title}</td></tr>)}</tbody></table></>;}
export function Admission(){return <><h1>Admission</h1><p>Admission process</p><ul>{['Understanding Admission requirements','Submit application online','Upload supporting documents','Make application fee payment','Check application status'].map(step=><li key={step}>{step}</li>)}</ul></>;}
