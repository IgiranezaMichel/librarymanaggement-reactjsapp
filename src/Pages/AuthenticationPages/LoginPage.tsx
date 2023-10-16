import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
const LoginPage=()=>{
    return (
        <>
       <motion.section
       initial={{opacity:0.8}}
       animate={{opacity:1.5}}
       transition={{duration:1.5}}
       className="position-fixed overflow-auto" style={{backgroundColor:'#0C68F2',height:'100%'}}>
        <motion.div 
        initial={{ y:'25vw' }}
        animate={{y:'0vw'}}
        transition={{type:"spring",stiffness:200}}
        className="mt-5 p-5 ">
            <div className="col-md-10 row m-auto border p-5 bg-light rounded" style={{overflow:"auto"}}>
                <div className="col-sm-5 border  border-2 rounded-2 border-dark p-4">
                    <img src="/src/assets/logo.png" alt="" className="w-50 mb-5"/>
                    <h3 className="fw-bolder mb-3">Get started</h3>
                   <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active nav-link" aria-current="true" aria-label="First slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1" className="nav-link" aria-label="Second slide"></li>
                    </ul>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div  className="card bg-primary p-4">
                                <div className="card-body">
                                    <div className="card-text text-light">
                                    Including a map in your contact information can convey professionalism and credibility, especially for local businesses.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <div  className="card bg-primary p-4">
                                <div className="card-body  text-light">
                                Including a map in your contact information can convey professionalism and credibility, especially for local businesses.
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
                {/* part 2 */}
                <div className="col-md-7">
                    <div className="text-center">
                    <h1>Login</h1>
                    <i className="bi bi-person-circle fs-1"></i>
                    </div>
                    <form action="" method="post">
                        <div className="form-floating mb-3 border border-2 rounded border-dark">
                            <input
                            type="text"
                            className="form-control" name="formId1" id="formId1"/>
                            <label className="fw-bolder">Username</label>
                        </div>
                        <div className="form-floating mb-3 border border-dark border-2 rounded">
                            <input
                            type="password"
                            className="form-control" name="formId1" id="formId1"/>
                            <label className="fw-bolder">Password</label>
                        </div>
                        <span>Already have account ?</span>
                        <div className="modal-footer border-top p-1">
                            <Link to={'/'}><button type="button" className="btn btn-danger mx-2">Cancel</button></Link>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                        <div className="text-center text-muted">Continue with</div>
                        <div className="text-center">
                            <button type="button" className="btn btn-outline-success m-2 w-sm-100"><img src="/src/assets/google.png" width={'25px'}/> Google</button>
                            <button type="button" className="btn bg-primary text-light btn-outline-primary m-2 w-sm-100"><img src="/src/assets/icons/book.png" width={'25px'}/> Facebook</button>
                        </div>
                </div>
                <section className="text-center">
                    <h6 className="mb-3">Visit Our social media</h6>
                    <Link to="https://www.youtube.com"><img src="/src/assets/icons/youtube.png" className="mx-2" width={'20em'} alt="youtube"/></Link> 
                    <Link to={"/"}><img src="/src/assets/icons/book.png" className="mx-2 bg-primary rounded" width={'20em'} alt="facebook"/></Link> 
                    <Link to={"/"}><img src="/src/assets/icons/twitter.png" className="mx-2" width={'20em'} alt="twitter.png"/></Link> 
                    <Link to={"https://www.linkedin.com/in/igiraneza-michel"}><img src="/src/assets/icons/linkedin.png" className="mx-2" width={'20em'}  alt="Linkedin"/></Link> 
                </section>
            </div>
        </motion.div>
       </motion.section>
        </>
    )
}
export default  LoginPage;