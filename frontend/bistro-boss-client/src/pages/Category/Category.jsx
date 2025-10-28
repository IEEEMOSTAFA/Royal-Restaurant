

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectionTittle from '../../components/SectionTittle/SectionTittle';

export default function Category() {
  const categories = [
    { id: 1, image: slide1, title: 'Salads' },
    { id: 2, image: slide2, title: 'Pizzas' },
    { id: 3, image: slide3, title: 'Soups' },
    { id: 4, image: slide4, title: 'Desserts' },
    { id: 5, image: slide5, title: 'Drinks' },
  ];

  return (
    <section className="py-12 px-4">

      <SectionTittle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      >

      </SectionTittle>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 pb-6 pt-20">
                <h3 className="text-3xl md:text-4xl uppercase text-white text-center font-bold drop-shadow-2xl tracking-wide">
                  {category.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  );
}