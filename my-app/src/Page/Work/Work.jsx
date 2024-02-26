import data from '../../Data/data.json';
import Header from '../../Containers/Header/Header';
import Footer from '../../Containers/Footer/Footer';
import WorkSlide from '../../Components/WorkSlide/WorkSlide';
import InfoWorks from '../../Components/InfoWorks/InfoWorks';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function Work() {
    const { id } = useParams();

    const workId = data.find((element) => element.id === id);

    if (!workId) {
        return <Navigate to='/404' replace />;
    }

    return (
        <>
            <Header />
            <main>
                <WorkSlide />
                <InfoWorks />
            </main>
            <Footer />
        </>
    )
}
export default Work