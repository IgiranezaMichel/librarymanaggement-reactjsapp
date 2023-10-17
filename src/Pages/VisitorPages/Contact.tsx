import NeedSomeHelp from "../../Component/VisitorComponents/NeedSomeHelp";
import VisitorNavBar from "../../Component/VisitorComponents/VisitorNavBar";
import Footer from "../Footer/Footer";
import VisitorCarouselData from "../../Type/Visitor/VisitorCarouselData";
import VisitorMainCarousel from "../../Component/VisitorComponents/VisitorMainCarousel";
const Contact=()=>{
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
 return (
    <>
    <VisitorNavBar/>
    <VisitorMainCarousel name={carouselBody}/>
    <div className="m-5">
            <div className="row col-12 m-auto">
                <div className="col-md-9 row">
                <h2 className="fw-bolder text-center" style={{color:'#0C68F2'}}>Contact Us</h2>
                <section>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </section>
                <div className="col-sm-4 bg-success">
                        <img src="/src/assets/call.png" width={'100%'} alt="" />
                    </div>
                    <div className="col-sm-8">
                    <div className="card border-0" >
                      <div className="card-body">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control border border-dark border-2"
                            id="input1"
                            placeholder="name@example.com"
                          />
                          <label >Name</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control border border-dark border-2"
                            id="input1"
                            placeholder="name@example.com"
                          />
                          <label >Email</label>
                        </div>
                         <div className="mb-3">
                           <label  className="form-label">Message</label>
                           <textarea className="form-control border border-dark border-2" name="" id="" rows={3}></textarea>
                         </div>
                         <div className="modal-footer">
                         <button type="button" className="btn btn-outline-success w-25 fw-bolder border-success border border-2">Message</button>
                         </div>
                      </div>
                    </div>
                    </div>
                    
                </div>
                <NeedSomeHelp/>
            </div>
            {/*  */}
        </div>
    <Footer/>
    </>
 )
}
export default Contact;