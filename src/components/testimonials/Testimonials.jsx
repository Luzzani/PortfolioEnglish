import React from "react";
import "./testimonials.css";
import AVATAR from "../../assets/avatar.jpg";

// import Swipper core and required module 
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles 
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVATAR,
    name: 'John Doe',
    review: 'Explicabo, expedita odit blanditiis amet tempora excepturi accusantium sit eligendi repudiandae? Fugit necessitatibus ut laboriosam hic sit quam consequuntur praesentium, molestias sed!'
  },
  {
    avatar: AVATAR,
    name: 'John Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, expedita odit blanditiis amet tempora excepturi accusantium sit eligendi repudiandae? Fugit necessitatibus ut laboriosam hic sit quam consequuntur praesentium, molestias sed!'
  },
  {
    avatar: AVATAR,
    name: 'John Doe',
    review: 'dolor sit amet consectetur adipisicing elit. Explicabo, expedita odit blanditiis amet tempora excepturi accusantium sit eligendi repudiandae? Fugit nec praesentium, molestias sed!'
  },
  {
    avatar: AVATAR,
    name: 'John Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit necessitatibus ut laboriosam hic sit quam consequuntur praesentium, molestias sed!'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide keyy={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="client avatar" />
            </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  );
};

export default Testimonials;
