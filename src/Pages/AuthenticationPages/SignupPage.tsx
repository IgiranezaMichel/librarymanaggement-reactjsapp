import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
const SignupPage=()=>{
    return (
        <>
        <motion.section 
        initial={{opacity:0.8}}
        animate={{opacity:1.5}}
        transition={{duration:1.5}}
        className="position-fixed w-100 overflow-auto p-4" style={{backgroundColor:'#0C68F2',height:'100%'}}>
         <motion.div
         initial={{ y:'25vw' }}
         animate={{y:'0vw'}}
         transition={{type:"spring",stiffness:200}}
         className="mt-5 p-5 bg-light col-sm-6 m-auto rounded">
                     <h1 className="text-center">Signup</h1>
                     <form action="" method="post">
                        <div className="row col-12 m-auto">
                            <div className="form-floating mb-3 border border-2 rounded border-dark col-sm-6">
                                <input
                                type="text"
                                className="form-control" name="formId1" id="formId1"/>
                                <label className="fw-bolder">First name</label>
                            </div>
                            <div className="form-floating mb-3 border border-2 rounded border-dark col-sm-6 ">
                                <input
                                type="text"
                                className="form-control" name="formId1" id="formId1"/>
                                <label className="fw-bolder">Last name</label>
                            </div>
                        </div>
                         <div className="form-floating mb-3 border border-2 rounded border-dark">
                             <input
                             type="text"
                             className="form-control" name="formId1" id="formId1"/>
                             <label className="fw-bolder">Middle Name</label>
                         </div>
                         <div className="mb-3">
                                <label className="form-label">Gender</label>
                                <select className="form-select form-select-lg border border-dark border-2" name="" id="">
                                    <option selected>Select Gender</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Other</option>
                                </select>
                             </div>
                         <div className="form-floating mb-3 border border-dark border-2 rounded">
                             <input
                             type="password"
                             className="form-control" name="formId1" id="formId1"/>
                             <label className="fw-bolder">Email</label>
                         </div>
                         <div className="form-floating mb-3 border border-dark border-2 rounded">
                             <input
                             type="password"
                             className="form-control" name="formId1" id="formId1"/>
                             <label className="fw-bolder">Phone Number</label>
                         </div>
                         <div className="row col-12 m-auto">
                         <div className="mb-3 col-sm-5">
                                <label className="form-label">Continent</label>
                                <select className="form-select form-select-lg border border-dark border-2" name="" id="">
                                    <option selected>Select Continent</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Other</option>
                                </select>
                             </div>
                             <div className="mb-3 col-sm-7">
                                <label className="form-label">Country</label>
                                <select className="form-select form-select-lg border border-dark border-2" name="" id="">
                                    <option selected>Select Country</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Other</option>
                                </select>
                             </div>
                         </div>
                         <div className="form-floating mb-3 border border-dark border-2 rounded">
                             <input
                             type="password"
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
                 
                 <section className="text-center">
                     <h6 className="mb-3">Visit Our social media</h6>
                     <Link to="https://www.youtube.com"><img src="/src/assets/icons/youtube.png" className="mx-2" width={'20em'} alt="youtube"/></Link> 
                     <Link to={"/"}><img src="/src/assets/icons/book.png" className="mx-2 bg-primary rounded" width={'20em'} alt="facebook"/></Link> 
                     <Link to={"/"}><img src="/src/assets/icons/twitter.png" className="mx-2" width={'20em'} alt="twitter.png"/></Link> 
                     <Link to={"https://www.linkedin.com/in/igiraneza-michel"}><img src="/src/assets/icons/linkedin.png" className="mx-2" width={'20em'}  alt="Linkedin"/></Link> 
                 </section>
         </motion.div>
        </motion.section>
         </>
    )
}
export default SignupPage;