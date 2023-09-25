import Page from "../components/Pages";
import SectionType from "../components/SectionType";
import PanierContent from "../sections/PanierPage/PanierContent";

function PanierPage() {
    return (
        <Page title="Panier">
            <SectionType pageTitle={"Panier"} pageDescription={"Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque."}/>
            <PanierContent/>
        </Page>
    );
}

export default PanierPage;