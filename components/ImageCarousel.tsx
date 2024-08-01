import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';
import { images } from '../data/imageData';

export default function ImageCarousel(){
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={styles.mySwiper}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          <div className={styles.upperText}>
            <div className={styles.innerWrapper}>
              <h4 className={styles.subtitle}>{image.subtitle}</h4>
              <h1 className={styles.title}>{image.title}</h1>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.lowerText}>
            <div className={styles.innerWrapper}>
              <h2 className={styles.descTitle}>Fakta Menarik</h2>
              <p className={styles.description}>{image.description}
                <sup>
                  <a href={image.link} style={{
                                              color: 'blue',
                                              textDecoration: 'none',
                                              }}> 
                    [{index+1}]
                  </a>
                </sup>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
