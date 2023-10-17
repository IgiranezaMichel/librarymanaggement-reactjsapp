import {motion} from 'framer-motion'
import VisitorCarouselData from '../../Type/Visitor/VisitorCarouselData';
type visitorView={
  name:VisitorCarouselData[]
}
const VisitorMainCarousel:React.FC<visitorView>=({name})=>{
  if (!Array.isArray(name)) {
    console.log(name);
    return <div>Invalid data passed to MainSection.</div>;
}
  const styles={
 backgroundColor:'#E8E6F5',
  };
    return(
      <>
    <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" role="listbox">
        {name.map((data,index)=>{
          return (
          <div className="carousel-item active" key={index}>
            <div className="row col-sm-12 m-auto p-2 overflow-hidden" style={styles}>
                <div className="col-md-7 py-5">
                    <div className="text-center mb-5">
                        <motion.h1 animate={{
                                      opacity:1.5,
                                      scale:3
                                    }}
                                    initial={{
                                      opacity:0.5,
                                      fontSize:'small'
                                    }}
                                    transition={{duration:1.2}}
                        className="text-primary fw-bolder">Amal Health Africa</motion.h1>
                        <motion.h4 
                        animate={{
                          opacity:1.5,
                          y:0
                        }}
                        initial={{
                          y:20,
                          opacity:0.5,
                        }}
                        transition={{duration:1.2}}
                        className="text-dark fw-bolder">We provide Total health care
                        </motion.h4>
                    </div>
                    <div className="mx-auto container">
                        <div className="card border-0 bg-transparent" >
                          <div className="card-body mx-lg-5 ">
                            <h4 className="card-title fw-bolder text-success">{data.header}</h4>
                            <p className="card-text">
                              {data.body}
                            </p>
                            <motion.a
                            initial={{scale:1}}
                            whileHover={{scale:1.2}}
                              href="#" className="btn btn-primary d-lg-in">Get started</motion.a>
                          </div>
                        </div>
                    </div>
                </div>
          <div className="col-md-5">
          <img src={data.imageUrl} className="w-100 rounded"  />
          </div>
          </div>
        </div>
          )
        })}
      </div>
      <button className="carousel-control-prev" style={{width:'30px'}} type="button" data-bs-target="#carouselId" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-primary text-primary rounded-pill" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next"style={{width:'30px'}} type="button" data-bs-target="#carouselId" data-bs-slide="next">
        <span className="carousel-control-next-icon  bg-primary text-primary rounded-pill" aria-hidden="true" ></span>
        <span className="visually-hidden">Next</span>
        </button>
    </div>
    </>
    )
}
export default VisitorMainCarousel;