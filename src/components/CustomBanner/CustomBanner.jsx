import React from 'react';
// Import Swiper React components
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { storyblokEditable } from '@storyblok/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './CustomBanner.css';

const CustomBanner = ({ blok }) => {
  return (
    <div key={blok._uid} {...storyblokEditable(blok)}>
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 5000,
          reverseDirection: true,
          disableOnInteraction: false,
        }}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper-banner-image"
      >
        {blok.banner_items.map((banner_item) => {
          if (
            banner_item.slug !== undefined &&
            banner_item.slug === 'db-banner-video'
          ) {
            return (
              <SwiperSlide>
                <div
                  className="video-container"
                  style={{ height: '100%', width: '100%' }}
                >
                  <iframe
                    style={{ height: '100%', width: '100%' }}
                    src={`${banner_item.content.custom_banner_video_link}?autoplay=1&mute=1&loop=1&controls=0&rel=0`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    loop="true"
                  ></iframe>
                </div>
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide>
                <div key={banner_item.slug} className="banner-container">
                  <img
                    src={
                      banner_item.content.banner_image?.filename &&
                      banner_item.content.banner_image?.filename
                    }
                    alt={banner_item.content.banner_image?.alt}
                  />

                  <a href="{ banner_item.content.banner_button_link }">
                    {banner_item.content.banner_button_label}
                  </a>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

export default CustomBanner;
