import Page from '../components/Pages';
import SectionType from '../components/SectionType';
import DashboardContent from '../sections/UserDashboardPage/DashboardContent';

function UserDashboardPage() {
    return (
        <Page title='Dashboard'>
            <SectionType pageTitle='Dashboard' pageDescription={'Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.'}/>
            <DashboardContent/>
        </Page>
    );
}

export default UserDashboardPage;