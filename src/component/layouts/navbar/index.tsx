import Image from 'next/image'
import styles from './navbar.module.scss'
import { logo3 } from '../../../../public/images'
import Button from '@/component/ui/button'
const NavbarComponent = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <Image src={logo3} alt='logo' width={242} height={72} className={styles.navbar__container__logo} />
                <div className={styles.navbar__container__link}>
                    <a href="" className={styles.navbar__container__link__item}>Home</a>
                    <a href="" className={styles.navbar__container__link__item}>Courses</a>
                    <a href="" className={styles.navbar__container__link__item}>Bootcamp</a>
                    <a href="" className={styles.navbar__container__link__item}>about</a>
                </div>
                <div className={styles.navbar__container__box}>
                   <Button className={styles.navbar__container__box__button}>Login</Button>
                   <Button className={styles.navbar__container__box__button} variant="secondary">register</Button>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent