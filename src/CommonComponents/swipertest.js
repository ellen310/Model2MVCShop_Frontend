// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const SwiperTest =()=>{ 
  return(

    <section className="section pt-0">

    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
    <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={100}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      
        <div className="testimonial-wrap">
          <div className="testimonial">
          <img src="assets/img/person_2.jpg" alt="Image" className="img-fluid"/>
          <blockquote>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis
              explicabo inventore.</p>
          </blockquote>
          <p>&mdash; Chris Stanworth</p>
          </div>
      </div>
      
     
        <div className="testimonial-wrap">
          <div className="testimonial">
          <img src="assets/img/person_1.jpg" alt="Image" className="img-fluid"/>
          <blockquote>
              <p>Yeji's ALDI가 제일 싸요! 빨리 사세요!!</p>
          </blockquote>
          <p>&mdash; Jean Hicks</p>
          </div>
      </div>
      
      
    </Swiper>

    
    </div>

    </section>
  );
};

export default SwiperTest;