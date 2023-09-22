import Page from '../components/Pages';
import SectionType from '../components/SectionType';
import ReservationFormSection from '../sections/ReservationPage/ReservationFormSection';
import LittleContactBanner from '../sections/HomePage/LittleContactBanner';

function ReservationPage() {
    return (
        <Page title='Reservation'>
            <SectionType pageTitle='Reservation' pageDescription={'Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.'}/>
            <ReservationFormSection/>
            <LittleContactBanner/>
        </Page>
    );
}

export default ReservationPage;