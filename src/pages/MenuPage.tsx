import Page from '../components/Pages';
import SectionType from '../components/SectionType';
import LittleContactBanner from '../sections/HomePage/LittleContactBanner';
import MenuDetails from '../sections/MenuPage/MenuDetails';

function MenuPage() {
    return (
        <Page title='Menu'>
            <SectionType pageTitle='Menu' pageDescription={'Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.'}/>
            <MenuDetails/>
            <LittleContactBanner/>
        </Page>
    );
}

export default MenuPage;