import Page from '../components/Pages';
import SectionType from '../components/SectionType';
import LoginFormSection from '../sections/LoginPage/LoginFormSection';

function LoginPage() {
    return (
        <Page title='Login'>
            <SectionType pageTitle='Login' pageDescription='Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.'/>
            <LoginFormSection/>
        </Page>
    );
}

export default LoginPage;