import Button from '@/component/ui/button';
import styles from './bootcamp.module.scss'
import Image from 'next/image';
import { ImageCourses } from '../../../public/images';
import CardBootcamp from '@/component/ui/cardBootcamp';

const BootcampPage = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.container__content}>
                <h1>Courses Kami</h1>
                <div className={styles.container__content__horizontalScroll}>
                    <Button className={styles.container__content__horizontalScroll__button}>Terbaru</Button>
                    <Button className={styles.container__content__horizontalScroll__button}>Technology</Button>
                    <Button className={styles.container__content__horizontalScroll__button}>Data</Button>
                </div>
                <div className={styles.container__content__boxProduct}>
                    <CardBootcamp/>
                    <CardBootcamp/>
                    <CardBootcamp/>
                    <CardBootcamp/>
                    <CardBootcamp/>
                    <CardBootcamp/>
                </div>
            </div>
        </div>
    )
}

export default BootcampPage;