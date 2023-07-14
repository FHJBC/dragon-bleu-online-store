import React, { useEffect, useState } from 'react';

import { storyblokEditable } from '@storyblok/react';
import { Tab, TabList, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
//CSS
import './TabSliderEightBlocks.css';

const TabSliderEightBlocks = ({ blok }) => {
  const [listType, setListType] = useState([]);
  const [selectedType, setSelectedType] = useState('Les plus populaires');
  const [photosOfType, setPhotosOfType] = useState([]);
  useEffect(() => {
    const types = blok.blocMarques.map((item) => item.type);
    setListType(types);
    const enteredTypeItem = blok.blocMarques.find(
      (item) => item.type === selectedType
    );
    const photos = enteredTypeItem ? enteredTypeItem.photos : [];
    setPhotosOfType(photos);
  }, [selectedType]);

  console.log('blockEight :>> ', blok);
  const displaySlider = () => {
    return (
      // <div className="swiper-container">
        <Swiper
          slidesPerGroup={8}
          slidesPerView={8}
          spaceBetween={10}
          speed={800}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="swiperEigth"
        >
          {photosOfType.map((type) => (
            <SwiperSlide className="" key={type._uid}>
              {/* <a href={banner.Link.cached_url}> */}
              <div className="logo__wrapper">
                <img
                  src={type.Image.filename}
                  alt="logo"
                  className="imageInSlide"
                />
              </div>
              {/* </a> */}
            </SwiperSlide>
          ))}
        </Swiper>
      // </div>
    );
  };
  return (
    <div {...storyblokEditable(blok)} className="tabs">
      <Tabs>
        <TabList>
          {listType.map((type) => (
            <Tab key={type} onClick={() => setSelectedType(type)}>
              {type}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      {displaySlider()}
    </div>
  );
};

export default TabSliderEightBlocks;
