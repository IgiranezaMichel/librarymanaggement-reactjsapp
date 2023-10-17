import VisitorNavBar from "../../Component/VisitorComponents/VisitorNavBar";
import Footer from "../Footer/Footer";
import NeedSomeHelp from "../../Component/VisitorComponents/NeedSomeHelp";
import VisitorCarouselData from "../../Type/Visitor/VisitorCarouselData";
import VisitorMainCarousel from "../../Component/VisitorComponents/VisitorMainCarousel";
const About=()=>{
    const carouselBody: VisitorCarouselData[] = [
        {
            header: 'First Item Header',
            body: 'First Item Body',
            imageUrl: 'URL1'
        },
        {
            header: 'Second Item Header',
            body: 'Second Item Body',
            imageUrl: 'URL2'
        },
        {
            header: 'Third Item Header',
            body: 'Third Item Body',
            imageUrl: 'URL3'
        }
    ];
    return(
        <>
        <VisitorNavBar/>
        <VisitorMainCarousel name={carouselBody}/>
        <div className="m-5">
            <div className="row col-12 m-auto">
                <div className="col-md-9 row">
                <h2 className="fw-bolder text-center" style={{color:'#0C68F2'}}>About us</h2>
                    <div className="col-sm-9">
                    <div className="card border-0" >
                      <div className="card-body">
                        <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                    </div>
                    <div className="col-sm-2">
                        <img src="/src/assets/information.png" width={'150%'} alt="" />
                    </div>
                </div>
                <NeedSomeHelp/>
            </div>
            {/*  */}
            <section>
            <div className="row col-12 m-auto">
            <div className="col-md-6">
                    <div className="card border-0">
                        <div className="card-body">
                            <h3 className="card-title text-center m-5 fw-bolder" style={{color:'#0C68F2'}}>Our Mission</h3>
                            <span className="card-text">
                            <img src="/src/assets/mission.png" style={{float:'right',clear:'left'}} width={'50%'} alt="" />
                            Some quick example text to build on the card title and make up 
                            the bulk of the card's content. Some quick example text to build on 
                            the card title and make up the bulk of the card's content. Some quick example 
                            text to build on
                             the card title and make up the bulk of the card's content.
                            </span>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card border-0">
                        <div className="card-body">
                            <h3 className="card-title text-center m-5 fw-bolder" style={{color:'#0C68F2'}}>Our Vision</h3>
                            <p className="card-text">
                            <img src="/src/assets/vision.png" style={{float:'right',clear:'left'}} width={'50%'} alt="" />
                            Some quick example text to build on the card title and make up
                             the bulk of the card's content. Some quick example text to build 
                             on the card title and make up the bulk of the card's content. Some quick example 
                             text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        {/*  */}
        
        <Footer/>
        </>
    )
}
export default About;