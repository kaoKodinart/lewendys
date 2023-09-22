import Page from "../components/Pages";
import HomeAbout from "../sections/HomePage/HomeAbout";
import HomeContact from "../sections/HomePage/HomeContact";
import HomeHero from "../sections/HomePage/HomeHero";
import HomeMenu from "../sections/HomePage/HomeMenu";
import HomeTestimony from "../sections/HomePage/HomeTestimony";
import LittleContactBanner from "../sections/HomePage/LittleContactBanner";

function HomePage() {
    return (
        <Page title="Accueil">
            {/* <HomeHero/> */}
            <HomeAbout/>
            {/* <HomeMenu/> */}
            {/* <HomeTestimony/> */}
            {/* <HomeContact/> */}
            {/* <LittleContactBanner/> */}
        </Page>
    );
}

export default HomePage;