import Page from '../components/Pages';
import SectionType from '../components/SectionType';
import AboutDetailsSection from '../sections/AboutPage/AboutDetailsSection';
import ChooseUsSection from '../sections/AboutPage/ChooseUsSection';
import LittleContactBanner from '../sections/HomePage/LittleContactBanner';

function AboutPage() {
    return (
        <Page title='A Propos'>
            <SectionType pageDescription='Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.' pageTitle='A Propos'/>
            <AboutDetailsSection/>
            <ChooseUsSection/>
            <LittleContactBanner/>
        </Page>
    );
}

export default AboutPage;