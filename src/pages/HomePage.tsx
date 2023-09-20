import Page from "../components/Pages";
import HomeAbout from "../sections/HomePage/HomeAbout";
import HomeHero from "../sections/HomePage/HomeHero";

function HomePage() {
    return (
        <Page title="Accueil">
            <HomeHero/>
            <HomeAbout/>
        </Page>
    );
}

export default HomePage;