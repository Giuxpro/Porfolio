import React from 'react'
import "./Recommended.css"

import review from "./review.json"

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Recommended = () => {
  return (
    <section id='recommended'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container"  
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          review.map(({avatar, name ,review},index) =>{
            return(
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={require(`../../assets/${avatar}`)} alt="avatar one" />     
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Recommended