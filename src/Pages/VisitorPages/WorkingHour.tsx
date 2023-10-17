import VisitorMainCarousel from "../../Component/VisitorComponents/VisitorMainCarousel";
import VisitorNavBar from "../../Component/VisitorComponents/VisitorNavBar";
import VisitorCarouselData from "../../Type/Visitor/VisitorCarouselData";
import Footer from "../Footer/Footer";
const WorkingHour=()=>{
    const carouselBody: VisitorCarouselData[] = [
        {
            header: 'First Item Header',
            body: 'First Item Body',
            imageUrl: '/src/assets/doctors.jpg'
        },
        {
            header: 'Second Item Header',
            body: 'Second Item Body',
            imageUrl: '/src/assets/doctors.jpg'
        },
        {
            header: 'Third Item Header',
            body: 'Third Item Body',
            imageUrl: '/src/assets/doctors.jpg'
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
export default WorkingHour;