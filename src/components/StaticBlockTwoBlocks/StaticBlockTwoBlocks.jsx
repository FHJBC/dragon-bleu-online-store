import React from 'react';
// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { storyblokEditable } from '@storyblok/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './StaticBlockTwoBlocks.css';

const StaticBlockTwoBlocks = ({ blok }) => {
  return (
    <>
      <div key={blok._uid} {...storyblokEditable(blok)}>
        <div className="static-two-block__container">
          {blok.static_block_two_blocks.map((block) => {
            if (block.component === 'StaticLeftBlock') {
              return (
                <div className="static-two-block__left">
                  <img src={block.photo.filename} alt={block.photo.alt} />
                  <a href="/">
                    {block.text1}
                    <span>, {block.text2}</span>
                  </a>
                </div>
              );
            }

            if (block.component === 'StaticRightBlock') {
              return (
                <div className="static-two-block__right">
                  <img src={block.photo.filename} alt={block.photo.alt} />
                  <a href="/">{block.text}</a>
                </div>
              );
            }
          })}
        </div>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={10}
          loop={false}
          speed={800}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="static-two-block-swiper"
        >
          {blok.static_block_two_blocks.map((block) => {
            if (block.component === 'StaticLeftBlock') {
              return (
                <SwiperSlide>
                  <div class="static-two-block__left">
                    <img
                      src={block.photo.filename}
                      alt={block.photo.alt}
                    />
                    <a href="/">
                      {block.text1}
                      <span>, {block.text2}</span>
                    </a>
                  </div>
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide>
                  <div class="static-two-block__right">
                    <img
                      src={block.photo.filename}
                      alt={block.photo.alt}
                    />
                    <a href="/">{block.text}</a>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </>
  );
};

export default StaticBlockTwoBlocks;
