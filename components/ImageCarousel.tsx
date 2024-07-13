import React from 'react';
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';

const images = [
  { src: '/images/cekakJawa.JPG', alt: 'Cekak Jawa', title: 'Cekak Jawa', subtitle:'Halcyon cyanoventris', description: 'Cekak Jawa adalah karnivora kecil dengan tubuh ramping dan ekor panjang berbelang, terkenal dengan kecepatan dan kelincahannya.' },
  { src: '/images/takurTulungTumpuk.JPG', alt: 'Takur Tulung Tumpuk', title: 'Takur Tulung Tumpuk', subtitle:'Megalaima javensis', description: 'Burung ini dikenal dengan panggilan kerasnya dan paruh besar berwarna cerah yang digunakan untuk memakan buah-buahan dan serangga.' },
  { src: '/images/elang-ularBido.jpg', alt: 'Elang-ular Bido', title: 'Elang-ular Bido', subtitle: 'Megalaima javensis', description: 'Burung ini dikenal dengan panggilan kerasnya dan paruh besar berwarna cerah yang digunakan untuk memakan buah-buahan dan serangga.' },
  { src: '/images/garangan.JPG', alt: 'Garangan', title: 'Megalaima javensis', subtitle: 'Garangan', description: 'Burung ini dikenal dengan panggilan kerasnya dan paruh besar berwarna cerah yang digunakan untuk memakan buah-buahan dan serangga.' },
  { src: '/images/kijang.JPG', alt: 'Kijang', title: 'Megalaima javensis', subtitle: 'Kijang', description: 'Burung ini dikenal dengan panggilan kerasnya dan paruh besar berwarna cerah yang digunakan untuk memakan buah-buahan dan serangga.' },
  { src: '/images/kukangJawa.JPG', alt: 'Kukang Jawa', title: 'Megalaima javensis', subtitle: 'Kukang Jawa', description: 'Burung ini dikenal dengan panggilan kerasnya dan paruh besar berwarna cerah yang digunakan untuk memakan buah-buahan dan serangga.' },
  { src: '/images/lutungJawa.JPG', alt: 'Lutung Jawa', title: 'Megalaima javensis', subtitle: 'Lutung Jawa', description: 'Burung ini dikenal dengan panggilan kerasnya dan paruh besar berwarna cerah yang digunakan untuk memakan buah-buahan dan serangga.' },
  { src: '/images/musangRase.JPG', alt: 'Musang Rase', title: 'Megalaima javensis', subtitle: 'Musang Rase', description: 'Burung ini dikenal dengan panggilan kerasnya dan paruh besar berwarna cerah yang digunakan untuk memakan buah-buahan dan serangga.' },
  { src: '/images/ratufaBicolor.JPG', alt: 'Ratufa Bicolor', title: 'Megalaima javensis', subtitle: 'Ratufa Bicolor', description: 'Burung ini dikenal dengan panggilan kerasnya dan paruh besar berwarna cerah yang digunakan untuk memakan buah-buahan dan serangga.' },
];

const ImageCarousel: React.FC = () => {
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
              <p className={styles.description}>{image.description}</p>
            </div>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="390" height="308" viewBox="0 0 390 308" fill="none">
            <path d="M390 308V28C390 28 302.696 0 195 0C87.3045 0 0 24 0 24V308H390Z" fill="#6C6817"/>
          </svg> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
