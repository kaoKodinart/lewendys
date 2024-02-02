import Page from '../components/Pages';
import SectionType from '../components/SectionType';
import RegisterFormSection from '../sections/RegisterPage/RegisterFormSection';

function RegisterPage() {
    return (
        <Page title='register'>
            <SectionType pageTitle='Register' pageDescription='Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.'/>
            <RegisterFormSection/>
        </Page>
    );
}

export default RegisterPage;