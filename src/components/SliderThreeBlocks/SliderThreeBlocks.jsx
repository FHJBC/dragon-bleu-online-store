import React from 'react';
// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { storyblokEditable } from '@storyblok/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderThreeBlocks.css';

const SliderThreeBlocks = ({ blok }) => {
  return (
    <>
      <section className="section-custom-slider-three-blocks">
        <h2 className="desktop">Les sports de la semaine</h2>
        <h2 className="mobile">Explorer par sport</h2>
        <div
          key={blok._uid}
          {...storyblokEditable(blok)}
          className="swiper-container"
        >
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={10}
            loop={false}
            speed={1200}
            pagination={{ clickable: true }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },

              // when window width is >= 992px
              992: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="slider-three-block"
          >
            {blok.slider_three_blocks.map((block) => {
              return (
                <SwiperSlide>
                  <div class="image-container">
                    <img
                      src={block.slider_block_photo.filename}
                      alt={block.slider_block_photo.alt}
                    />
                    <a href={block.slider_block_button_link}>
                      {block.slider_block_button_label}
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default SliderThreeBlocks;
