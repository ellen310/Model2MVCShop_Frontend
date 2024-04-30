import React from 'react';

// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const TestimonialsSection = () => {
  

    return (


        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">

            <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            spaceBetween={100}
            slidesPerView={1}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            Pagination
            >
               
                    {/* =======< Testimonials Section ======= -->*/} 
                    <section class="section pt-0">
                        <div class="container">

                            <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                            <div class="swiper-wrapper">
                                <SwiperSlide>
                                    <div class="swiper-slide">
                                    <div class="testimonial-wrap">
                                        <div class="testimonial">
                                        <img src="assets/img/person_1_sq.jpg" alt="Image" class="img-fluid"/>
                                        <blockquote>
                                            <p>배송 빠르네요 굿굿</p>
                                        </blockquote>
                                        <p>&mdash; Brenden Stanworth</p>
                                        </div>
                                    </div>
                                    </div>{/* End testimonial item */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-slide">
                                    <div class="testimonial-wrap">
                                        <div class="testimonial">
                                        <img src="assets/img/person_1.jpg" alt="Image" class="img-fluid"/>
                                        <blockquote>
                                            <p>여기가 제일 싸요! 빨리 사!!</p>
                                        </blockquote>
                                        <p>&mdash; Jean Hicks</p>
                                        </div>
                                    </div>
                                    </div>{/* End testimonial item */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-slide">
                                    <div class="testimonial-wrap">
                                        <div class="testimonial">
                                        <img src="assets/img/person_2.jpg" alt="Image" class="img-fluid"/>
                                        <blockquote>
                                            <p>코코오일 완전 좋아요!!</p>
                                        </blockquote>
                                        <p>&mdash; Chris Stanworth</p>
                                        </div>
                                    </div>
                                    </div>{/* End testimonial item */}
                                </SwiperSlide>
                                
                            </div>
                        <div class="swiper-pagination"></div>
                        </div>

                    </div>
                    </section>{/* End Testimonials Section */}
                
            </Swiper>
        
        </div>

        



    );
};

export default TestimonialsSection;