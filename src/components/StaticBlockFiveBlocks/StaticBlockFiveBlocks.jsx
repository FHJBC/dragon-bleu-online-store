import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './StaticBlockFiveBlocks.css';

const StaticBlockFiveBlocks = ({ blok }) => {
  console.log('StaticBlockFiveBlocks', blok);
  console.log('blok.produits', blok.static_five_blocks);
  console.log(
    'blok.produits[0].photo.filename',
    blok.static_five_blocks[0].photo.filename
  );
  const testLink = '#';
  return (
    <div>
      <div className="containerStaticBlock5">
        <div className="leftContainer ">
          <div className="containerImageTextLeft ">
            <span className="shadow"></span>
            <img
              src={blok.photo_Left[0].bigPhoto.filename}
              alt="pexels-bruno-bueno"
              className="imgSlideBlocLeft "
            />
            <a href={testLink} class="overlay-text textLeft">
              {blok.photo_Left[0].textLeft}
            </a>

            <a href={testLink} className="overlay-text textRightPosition">
              <span className="textRight">{blok.photo_Left[0].textRight}</span>
            </a>
          </div>
        </div>

        <div className="rightContainer">
          <div className="top-images-container">
            {blok.static_five_blocks.map((image) => (
              <div className="product">
                <img
                  src={image.photo.filename}
                  className="imgSlideBlocRight"
                  alt="photoProduit"
                />
                <h3 className="productTitle">
                  {image.titre}
                  <br />
                  <p className="price">
                    <b>{image.prix}</b>
                  </p>
                </h3>
                <p class="voir">
                  <b>Voir le produit </b>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VERSION MOBILE */}
      <div className="containerMobile">
        <div className="containerImageTop">
          <img
            src={blok.photo_Left[0].bigPhoto.filename}
            alt="pexels-bruno-bueno"
            className="imageTop "
          />
          <a href={testLink} className="linkMobile">
            <span className="textCenterMobile">{blok.photo_Left[0].textLeft}</span>
          </a>
        </div>

        <div className="containerAllProduct">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
              },
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="SwiperFiveBlock"
          >
            {blok.static_five_blocks.map((image) => (
              <SwiperSlide className="slideFiveStyle">
                <div className="product">
                  <img
                    src={image.photo.filename}
                    className="imgSlideBlocRight"
                    alt="photoProduit"
                  />
                  <h3 className="productTitle">
                    {image.titre}
                    <br />
                    <p className="price">
                      <b>{image.prix}</b>
                    </p>
                  </h3>
                  <p className="voir">
                    <b>Voir le produit </b>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* VERSION MOBILE */}
    </div>
  );
};
export default StaticBlockFiveBlocks;
