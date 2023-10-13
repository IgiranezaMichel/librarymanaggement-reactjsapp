const IndexBody=()=>{
    return(
        <>
        <div className="row col-sm-12 m-auto">
        <div className="col-md-7 py-5">
            <div className="text-center mb-5">
                <h1 className="text-primary fw-bolder">Amal Health Africa</h1>
                <h4 className="text-dark fw-bolder">We provide Total health care</h4>
            </div>
            <div className="mx-auto container">
                 <div className="card border-0" >
                   <div className="card-body mx-lg-5 ">
                     <h4 className="card-title fw-bolder text-success">Card title</h4>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" className="btn btn-primary d-lg-in d-md-none">Get started</a>
                   </div>
                 </div>
            </div>
        </div>
        <div className="col-md-5">
        <img src="/src/assets/doctors.jpg" className="w-100 rounded"  />
        </div>
        </div>
        </>
    )
}
export default IndexBody;