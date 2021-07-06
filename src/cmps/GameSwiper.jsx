import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
// import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import ImageGallery from 'react-image-gallery';

export const GameSwiper = (props) => {
  const gameImgs = props.gameImgs;
  console.log(props.gameImgs);
  return (
    <div className="game-screenshots-container">
      <ImageGallery items={gameImgs} />
    </div>
  );
};
