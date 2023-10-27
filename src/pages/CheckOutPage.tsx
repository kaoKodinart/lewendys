import Page from "../components/Pages";
import SectionType from "../components/SectionType";
import CheckoutContent from "../sections/CheckoutPage/CheckoutContent";

function CheckOutPage() {
    return (
        <Page title="Checkout">
            <SectionType pageTitle="CheckOut" pageDescription={'Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.'}/>
            <CheckoutContent/>
        </Page>
    );
}

export default CheckOutPage;