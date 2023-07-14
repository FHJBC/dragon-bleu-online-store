import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { storyblokEditable } from '@storyblok/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import LecteurMultimedia from '../../assets/images/DB PICTOGRAMS_Lecteur multimedia.png';
import PlayButtonWhiteFill from '../../assets/images/play-buttonWhiteFill.png';
import './StaticBlockFourVideos.css';

const StaticBlockFourVideos = ({ blok }) => {
  return (
    <div key={blok._uid} {...storyblokEditable(blok)}>
      <h2 className="swiper-video-heading">Une question? Espace F.A.Q</h2>
      <Swiper
        spaceBetween={10}
        loop={true}
        speed={1200}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          // when window width is >= 640px
          990: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper-video video-slider"
      >
        {blok.static_block_four_videos.map((video) => {
          return (
            <SwiperSlide>
              <div className="video-slide">
                <img
                  className="video-player-icon"
                  src={LecteurMultimedia}
                  alt="Lecteur multimedia"
                />
                <img
                  className="player-fill"
                  src={PlayButtonWhiteFill}
                  alt="Lecteur multimedia"
                />
                <div className="video__photo">
                  <img
                    src={video.photo_for_video.filename}
                    alt={video.photo_for_video.alt}
                  />
                </div>
                <div className="video__info">
                  <p className="video__title">{video.title_for_video}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default StaticBlockFourVideos;
