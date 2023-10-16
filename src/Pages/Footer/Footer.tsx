import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
const Footer=()=>{
const Today=new Date().getFullYear();
console.log(Today);
    return(
<>
      
    <footer className="text-white" style={{backgroundColor:'#34772E'}}>
        <div className="row col-12 p-5">
            <div className="col-md-9 mt-5">
               <img src="/src/assets/logo.png" className="w-25"/> 
            </div>
            <div className="col-md-3 text-md-center mt-5">
                <h6 className="mb-3">Our social media</h6>
               <img src="/src/assets/icons/youtube.png" className="mx-2" width={'20em'} alt="youtube"/> 
               <img src="/src/assets/icons/book.png" className="mx-2" width={'20em'} alt="facebook"/> 
               <img src="/src/assets/icons/twitter.png" className="mx-2" width={'20em'} alt="twitter.png"/> 
               <img src="/src/assets/icons/linkedin.png" className="mx-2" width={'20em'}  alt="Linkedin"/> 
            </div>
        </div>
        <div className="row col-sm-10 m-auto mb-5">
        <div className="col-md-4 px-5">
            <h3 className="mb-3">Useful Link</h3>
            <motion.nav
            animate={{
                
            }}
            whileHover={{
                fontSize:'large',
                fontWeight:'bolder',
                transition:{duration:1,type:"spring",stiffness:100},
            }}
            transition={{
                type:'spring',
                damping:5
            }}
            className="px-2 mb-2"
            >
                <Link className="nav-link" to={'/apointment'}>Appointment</Link>
            </motion.nav>
            <nav className="px-2 mb-2">
                <Link className="nav-link" to={'/home'}>Team</Link>
            </nav>
            <nav className="px-2 mb-2">
                <Link className="nav-link" to={'/home'}>Service</Link>
            </nav>
            <nav className="px-2 mb-2">
                <Link className="nav-link" to={'/home'}>Department</Link>
            </nav>
            <nav className="px-2 mb-2">
                <Link className="nav-link" to={'/home'}>About us</Link>
            </nav>
            <nav className="px-2 mb-2">
                <Link className="nav-link" to={'/home'}>Time table</Link>
            </nav>
            <nav className="px-2 mb-2">
                <Link className="nav-link" to={'/home'}>Working hour</Link>
            </nav>
            <nav className="px-2 mb-2">
                <Link className="nav-link" to={'/home'}>Department</Link>
            </nav>
        </div>
        <div className="col-md-4 px-5">
            <h3 className="mb-3">Feed back</h3>
            <nav className="px-2">
                Name:<input className="form-control" placeholder="Enter your name here.." autoComplete="false"/>
            </nav>
            <nav className="px-2">
            Email:<input className="form-control" placeholder="example@gmail.com"/>
            </nav>
            <nav className="px-2">
            Message:<textarea className="form-control" placeholder="Enter your Message here .."/>
            </nav>
            <nav className="mt-2">
                <button type="button" className="btn btn-outline-light mx-2 px-5">Send</button>
            </nav>
        </div>
        <div className="col-md-4 px-5">
            <h3 className="mb-3">Contact Information</h3>
            <nav className="px-2">
                <Link to={"mailto:igiramichael@gmail.com"} className="nav-link"><i className="bi bi-envelope"></i> igiramichael@gmail.com</Link>
            </nav>
            <nav className="px-2">
                <Link to={"tel:+250 783402443"} className="nav-link"><i className="bi bi-phone"></i>+250 7885852</Link>
            </nav>
           <h3>Visit us</h3>
           <nav>
            <i className="bi bi-pin-map-fill"></i> <span >KG...</span>
            <div >
            <iframe className="col-sm-12"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255203.55263329137!2d30.12724445!3d-1.9297706000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1697458103025!5m2!1sen!2srw" 
            width="w-100" height="h-100" style={{border:0}} allowFullScreen loading="lazy"></iframe>
            </div>
           </nav>
        </div>
        </div>
<div className="text-center p-3 border-top border-5">
    <h3>Amal Health Africa <span>&copy;</span>{Today}</h3>
</div>
    </footer>

</>
    )
}
export default Footer;