import styles from './Slider.module.css';
import { images, Image } from '../data/imageData';

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