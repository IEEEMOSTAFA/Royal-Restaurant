import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import ContactCard from '../../components/contactcard/contactcard';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <ContactCard></ContactCard>
           <Featured></Featured>
        </div>
    );
};

export default Home;