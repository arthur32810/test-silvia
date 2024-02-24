import data from '../../Data/data.json';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';
import WorkSlide from '../../Components/WorkSlide/WorkSlide';
// import InfoWorks from '../../Components/InfoWorks/InfoWorks';

function Work() {

    return (
        <>
            <Header />
            <WorkSlide />
            {/* <InfoWorks /> */}
            <Footer />
        </>
    )
}
export default Work