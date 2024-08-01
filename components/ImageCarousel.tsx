import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';

const images = [
  { src: '/images/cekakJawa.JPG', alt: 'Cekak Jawa', title: 'Cekak Jawa', subtitle:'Halcyon cyanoventris', description: 'Cekak Jawa adalah karnivora kecil dengan tubuh ramping dan ekor panjang berbelang, terkenal dengan kecepatan dan kelincahannya.' },
  { src: '/images/takurTulungTumpuk.JPG', alt: 'Takur Tulung Tumpuk', title: 'Takur Tulung Tumpuk', subtitle:'Megalaima javensis', description: 'Burung ini dikenal dengan panggilan kerasnya dan paruh besar berwarna cerah yang digunakan untuk memakan buah-buahan dan serangga.' },
  { src: '/images/elang-ularBido.jpg', alt: 'Elang-ular Bido', title: 'Elang-ular Bido', subtitle: 'Spilornis cheela', description: 'Burung ini dikenal dengan panggilan kerasnya dan paruh besar berwarna cerah yang digunakan untuk memakan buah-buahan dan serangga.' },
  { src: '/images/garangan.JPG', alt: 'Garangan', title: 'Garangan', subtitle: 'Herpectes javanivus', description: 'Burung ini dikenal dengan panggilan kerasnya dan paruh besar berwarna cerah yang digunakan untuk memakan buah-buahan dan serangga.' },
  { src: '/images/kijang.JPG', alt: 'Kijang', title: 'Kijang', subtitle: 'Muntiacus muntjak', description: 'Burung ini dikenal dengan panggilan kerasnya dan paruh besar berwarna cerah yang digunakan untuk memakan buah-buahan dan serangga.' },
  { src: '/images/kukangJawa.JPG', alt: 'Kukang Jawa', title: 'Kukang Jawa', subtitle: 'Nycticebus javanicus', description: 'Kukang Jawa adalah primata nokturnal yang bergerak lambat dan memiliki gigitan beracun untuk pertahanan diri.' },
  { src: '/images/lutungJawa.JPG', alt: 'Lutung Jawa', title: 'Lutung Jawa', subtitle: 'Trachypithecus auratus', description: 'Lutung Jawa memiliki bulu hitam mengkilap dan ekor panjang yang membantu mereka menjaga keseimbangan saat melompat di antara pepohonan.' },
  { src: '/images/musangRase.JPG', alt: 'Musang Rase', title: 'Musang Rase', subtitle: 'Viverricula indica', description: 'Musang rase adalah mamalia nokturnal yang terkenal dengan kemampuan mengeluarkan bau menyengat dari kelenjar analnya sebagai mekanisme pertahanan.' },
  { src: '/images/ratufaBicolor.JPG', alt: 'Jelarang', title: 'Jelarang', subtitle: 'Ratufa Bicolor', description: 'Jelarang adalah tupai raksasa dengan warna bulu yang kontras, sering terlihat melompat di antara pepohonan tinggi di hutan tropis Asia.' },
  { src: '/images/kadalanBirah.JPG', alt: 'Kadalan Birah', title: 'Kadalan Birah', subtitle: 'Phaenicophaeus curvirostris', description: 'Jelarang adalah tupai raksasa dengan warna bulu yang kontras, sering terlihat melompat di antara pepohonan tinggi di hutan tropis Asia.' },
  { src: '/images/elang-alapCina.JPG', alt: 'Elang Alap Cina', title: 'Elang Alap Cina', subtitle: 'Accipiter soloensis', description: 'Jelarang adalah tupai raksasa dengan warna bulu yang kontras, sering terlihat melompat di antara pepohonan tinggi di hutan tropis Asia.' },
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
          <svg xmlns="http://www.w3.org/2000/svg" width="390" height="308" viewBox="0 0 390 308" fill="none">
            <path d="M390 308V28C390 28 302.696 0 195 0C87.3045 0 0 24 0 24V308H390Z" fill="#6C6817"/>
          </svg>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
