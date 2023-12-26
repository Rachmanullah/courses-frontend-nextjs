import Image from 'next/image'
import styles from './footer.module.scss'
import { logo3 } from '../../../../public/images'
const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.container__content}>
                 <Image src={logo3} alt='logo' width={500}/>
                 <div className={styles.container__content__box}>
                    <p>Program</p>
                    <a href="">Courses</a>
                    <a href="">Bootcamp</a>
                 </div>
                 <div className={styles.container__content__box}>
                    <p>Patners</p>
                    <a href="">Lab Mobile Programming ITN Malang</a>
                 </div>
                 <div className={styles.container__content__box}>
                    <p>Kontak</p>
                    <a href=""><i className='bx bxl-gmail' ></i>course_academy@gmail.com</a>
                    <a href=""><i className='bx bxl-instagram' ></i>Course_Academy</a>
                    <a href=""><i className='bx bxl-whatsapp' ></i>085967172715</a>
                 </div>
            </div>
            <div className={styles.container__copyright}>
                <p>Copyright 2023 Course Academy</p>
            </div>
        </div>
    )
}

export default Footer