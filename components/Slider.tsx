import styles from './Slider.module.css';

type Image = {
    src: string;
    alt: string;
    title: string;
    subtitle: string;
    description: string;
  };
  

const images: Image[] = [
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

function splitArray(array: Image[]): [Image[], Image[]] {
    const middleIndex = Math.ceil(array.length / 2);
    return [array.slice(0, middleIndex), array.slice(middleIndex)];
}  

export default function Slider(){
    const [firstRow, secondRow] = splitArray(images);

    return(
        <div className={styles.container}>
            <h1>Satwa Liar di Hutan Coban Talun</h1>
            <div className={styles.row}>
                {firstRow.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className={styles.image} />
                ))}
            </div>
            <div className={styles.row}>
                {secondRow.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className={styles.image} />
                ))}
            </div>
        </div>
    )
}