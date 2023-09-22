import React from 'react';
import Page from '../components/Pages';
import MapInfo from '../sections/ContactPage/MapInfo';
import SectionType from '../components/SectionType';
import HomeContact from '../sections/HomePage/HomeContact';
import MapSection from '../sections/ContactPage/MapSection';

function ContactPage() {
    return (
        <Page title='Contact'>
            <SectionType pageTitle='Contact' pageDescription={'Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.'}/>
            <MapInfo/>
            <HomeContact/>
            <MapSection/>
        </Page>
    );
}

export default ContactPage;