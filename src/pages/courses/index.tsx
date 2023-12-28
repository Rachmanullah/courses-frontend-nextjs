import Button from '@/component/ui/button';
import styles from './courses.module.scss'
import CardProduct from '@/component/ui/cardProduct';
import Image from 'next/image';
import { ImageCourses } from '../../../public/images';
const CoursesPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__content}>
                <h1>Courses Kami</h1>
                <div className={styles.container__content__horizontalScroll}>
                    <Button className={styles.container__content__horizontalScroll__button}>All</Button>
                    <Button className={styles.container__content__horizontalScroll__button}>Fullstack</Button>
                    <Button className={styles.container__content__horizontalScroll__button}>Backend</Button>
                    <Button className={styles.container__content__horizontalScroll__button}>frontend</Button>
                    <Button className={styles.container__content__horizontalScroll__button}>Mobile</Button>
                    <Button className={styles.container__content__horizontalScroll__button}>Ios</Button>
                    <Button className={styles.container__content__horizontalScroll__button}>IoT</Button>
                    <Button className={styles.container__content__horizontalScroll__button}>Database</Button>
                    <Button className={styles.container__content__horizontalScroll__button}>Design</Button>
                </div>
                <div className={styles.container__content__boxProduct}>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
                <div className={styles.pagination}>
                    <button>
                        Previous
                    </button>
                    <span>1, 2, 3, 4, 5, 6 ...</span>
                    <button>
                        Next
                    </button>
                </div>
                <div className={styles.container__content__advertisement}>
                    <Image src={ImageCourses} alt='gambar' width={450} />
                    <div className={styles.container__content__advertisement__info}>
                        <p className={styles.container__content__advertisement__info__title}>#UpgradeSkill Bersama Edspert</p>
                        <p className={styles.container__content__advertisement__info__description}>Dapatkan pelatihan dari mentor-mentor expert dengan harga yangterjangkau dan mulai #UpgradeSkill mu sekarang juga!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesPage;