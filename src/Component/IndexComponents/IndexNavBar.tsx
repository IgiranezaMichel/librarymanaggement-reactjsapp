import { Link } from "react-router-dom";

const IndexNavBar=()=>{

const TopNavBar=[
    {name:"Location",to:"/location",icon:"bi bi-pin-map-fill"},
    {name:"address",to:"/address",icon:"bi bi-envelope"},
    {name:"Time Table",to:"/time-table",icon:"bi bi-calendar-check-fill"},
    {name:"Working hour",to:"/working-hour",icon:"bi bi-clock-fill"},
    {name:"Book Appointment",to:"/book-appointment",icon:"bi bi-clock"},
    {name:"Apply",to:"/apply",icon:"bi bi-folder-check"},
    {name:"Signup",to:"/signup",icon:"bi bi-person-add"},
    {name:"Login",to:"/login",icon:"bi bi-person-check"},
];
const MainNavigationItemList=[
    {name:"Home",to:"/",icon:"bi bi"},
    {name:'About',to:"/about",icon:"bi bi"},
    {name:'Team',to:"/team",icon:"bi bi"},
    {name:"Service",to:"/service",icon:"bi bi"},
    {name:'Department',to:"/department",icon:"bi bi"},
    {name:'Contact',to:"/contact",icon:"bi bi"},
    {name:"Feedback",to:"/feedback",icon:"bi bi"},
    {name:'News',to:"/news",icon:"bi bi"},
    {name:'Translation',to:"",icon:"bi bi"},
];
const Navigation=[
    {color:'',logo:'',sidebarIcon:"bi bi-three-dots fw-bolder",navigationLink:TopNavBar},
    {color:'',logo:'',sidebarIcon:"bi bi-list fw-bolder",navigationLink:MainNavigationItemList}
];
return (
    <>
    {Navigation.map((navigation,index)=>{
        return(
            <>
            <nav className={index==0?"navbar navbar-expand-md navbar-dark bg-primary text-center":"navbar navbar-expand-md navbar-dark bg-light text-center"} >
     
        {index==0?<i className="bi bi-toggle-off mx-4"></i>:<img src="/src/assets/logo.png" className="w-25 mx-4"/>}
      
        <button className={index==1?"navbar-toggler d-lg-none border border-dark mx-1 text-dark":"navbar-toggler d-lg-none border mx-1 text-light"} type="button" data-bs-toggle="collapse" data-bs-target={"#collapsibleNavId1"+index} aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
                <i className={navigation.sidebarIcon}></i>
            </button>
        <div className="collapse navbar-collapse" id={"collapsibleNavId1"+index}>
            <ul className="navbar-nav me-auto mt-2 mt-sm-0">
            </ul>
        <div>
        <ul className="navbar-nav me-auto mt-2 mt-lg-0"> 
               {
                navigation.navigationLink.map((data,index)=>{
                    return ( 
                 <li className="nav-item" key={index}>
                    <Link className="nav-link text-dark fw-bolder" to={data.to}><i className={data.icon}></i> {data.name}</Link>
                 </li>)
                })
               }
           </ul>
        </div>
        </div>
            </nav>
            </>
        )
    })}
    </>

)
}
export default IndexNavBar;