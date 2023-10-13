import { Link } from "react-router-dom";
import IndexBody from "./IndexBody";
function IndexNavBar(){
return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mt-" >
        <Link className="navbar-brand" to="#">Navbar</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-sm-0">
            </ul>
        <div>
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                   <Link className="nav-link" to="/#">Location</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#"> Book Appointment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#"><i className="bi bi-trash"></i> Time table </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">signup</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">login</Link>
                </li>
           </ul>
        </div>
        </div>
    </nav>
    <nav className="navbar navbar-expand-lg navbar-dark bg-white border-bottom" >
        <Link className="navbar-brand" to="#">
            <img src="/src/assets/logo.png" alt="logo" className="w-25 mx-3"/>
        </Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
     
        <div className="container">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                   <Link className="nav-link text-dark fw-bolder" to="/#">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark fw-bolder" to="#">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark fw-bolder" to="#"><i className="bi bi-trash"></i>Team</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark fw-bolder" to="#">Service</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark fw-bolder" to="#">Department</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark fw-bolder" to="#">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark fw-bolder" to="#">Feedback</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark fw-bolder" to="#">News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark fw-bolder" to="#">Translation</Link>
                </li>
           </ul>
        </div>
        </div>
    </nav>
    <IndexBody/>
    </>
)
}
export default IndexNavBar;