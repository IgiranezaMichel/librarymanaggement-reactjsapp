import VisitorMainCarousel from "../../Component/VisitorComponents/VisitorMainCarousel";
import VisitorNavBar from "../../Component/VisitorComponents/VisitorNavBar";
import VisitorCarouselData from "../../Type/Visitor/VisitorCarouselData";
import Footer from "../Footer/Footer";
const Services=()=>{
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
        <Footer/>
        </>
    )
}
export default Services;