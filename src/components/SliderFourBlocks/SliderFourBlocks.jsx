import React from 'react';
// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { storyblokEditable } from '@storyblok/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderFourBlocks.css';

const SliderFourBlocks = ({ blok }) => {
  return (
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
          680: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          // when window width is >= 992px
          992: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="slider-four-block"
      >
        {blok.slider_four_blocks.map((block) => {
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
  );
};

export default SliderFourBlocks;
