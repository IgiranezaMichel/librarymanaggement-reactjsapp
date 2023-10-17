import { Link } from "react-router-dom";

const NeedSomeHelp=()=>{
    return(
        <>
        <div className="col-md-3 m-2 bg-primary">
                    <div className="border-bottom border-3 p-1 border-white text-center">
                        <h4 className="text-light p-1">Need some help?</h4>
                        <button type="button" className="btn btn-outline-light w-75 border-2 fw-bolder text-center">Send us email</button>
                    </div>
                    <div className="border-bottom border-3 p-1 border-white ">
                        <h4 className="text-light p-1">Visit us </h4>
                        <span><i className="bi bi-location-marker"></i>Adress</span>
                    </div>
                    <div className=" p-1 ">
                        <h4 className="text-light p-1">Call us on </h4>
                        <i className="bi bi-phone" aria-hidden="true"></i>
                        <span><i className="bi bi-location-marker"></i>+250 785548</span>
                    </div>
                    <div className="d-grid gap-2 mb-3">
                    <section className="text-center">
                    <h6 className="mb-3">Visit Our social media</h6>
                    <Link to="https://www.youtube.com"><img src="/src/assets/icons/youtube.png" className="mx-2" width={'20em'} alt="youtube"/></Link> 
                    <Link to={"/"}><img src="/src/assets/icons/book.png" className="mx-2 bg-primary rounded" width={'20em'} alt="facebook"/></Link> 
                    <Link to={"/"}><img src="/src/assets/icons/twitter.png" className="mx-2" width={'20em'} alt="twitter.png"/></Link> 
                    <Link to={"https://www.linkedin.com/in/igiraneza-michel"}><img src="/src/assets/icons/linkedin.png" className="mx-2" width={'20em'}  alt="Linkedin"/></Link> 
                </section>
                      <button type="button" className="btn btn-outline-light">make Appointment</button>
                    </div>
                </div>
        </>
    )
}
export default NeedSomeHelp;