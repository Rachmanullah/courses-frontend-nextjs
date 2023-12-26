import Image from "next/image"
import { ImageCourses } from "../../../../public/images"
import styles from './cardProduct.module.scss'
const CardProduct = () => {
    return(
        <div className={styles.container}>
              <Image src={ImageCourses} alt='gambar' width={450} />
              <div className={styles.container__info}>
                <div className={styles.container__info__header}>
                  <p>Android Developer</p>
                  <p>Rp. 250.000</p>
                </div>
                <p className={styles.container__info__deskription}>
                  Belajar Android Developer Dengan Bahasa Pemrograman Java. Belajar dari Dasar Hingga Advence dengan studi kasus sederhana.
                </p>
                <p className={styles.container__info__mentors}>
                  Samsul DHT
                </p>
                <div className={styles.container__info__boxRating}>
                  <p>4.5</p>
                  <i className='bx bxs-star' ></i>
                  <p>(100)</p>
                </div>
                <div className={styles.container__info__boxRating}>
                  <p>100 jam</p>
                  <p>100 lectures</p>
                </div>
              </div>
            </div>
    )
}
export default CardProduct
