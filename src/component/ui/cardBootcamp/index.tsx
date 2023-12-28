import Image from 'next/image'
import styles from './cardBootcamp.module.scss'
import { ImageCourses } from '../../../../public/images'
import Button from '../button'

const CardBootcamp = () => {
    return (
        <div className={styles.container}>
            <Image src={ImageCourses} width={350} alt='Image' height={300}/>
            <div className={styles.container__BoxCategory}>
                <p className={styles.container__BoxCategory__title}>Bootcamp</p>
            </div>
            <div className={styles.container__content}>
                <h3 className={styles.container__content__title}>Advance Bootcamp IoT - for IoT Engineering Batch 2</h3>
                <p className={styles.container__content__date}>Senin, 15 Januari 2024</p>
                <p className={styles.container__content__description}>8 Sesi dalam 1 Bulan, 2 Pertemuan/pekan (Senin dan Rabu)</p>
                <p className={styles.container__content__price}>Rp. 750.000</p>
                <Button className={styles.container__content__button}>Join Now</Button>
            </div>
        </div>
    )
}

export default CardBootcamp