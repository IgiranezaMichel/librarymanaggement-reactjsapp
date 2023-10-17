import IndexNavBar from "../Component/VisitorComponents/VisitorNavBar";
import Footer from "./Footer/Footer";
import VisitorCarouselData from "../Type/Visitor/VisitorCarouselData";
import VisitorMainCarousel from "../Component/VisitorComponents/VisitorMainCarousel";

const Index=()=>{
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
    <IndexNavBar/>
    <VisitorMainCarousel name ={carouselBody}/>
    <Footer/>
    </>
)
}
export default Index;