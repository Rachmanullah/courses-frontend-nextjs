import Image from 'next/image'
import styles from './navbar.module.scss'
import { logo3 } from '../../../../public/images'
import Button from '@/component/ui/button'
import Modal from '@/component/ui/modal'
import { useState } from 'react'
import Input from '@/component/ui/Input'
import Link from 'next/link'
import { useRouter } from 'next/router'
const NavbarComponent = () => {
    const [isModal, setIsModal] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
    const { pathname } = useRouter()
    const handleModal = (props: string) => {
        if (props == 'login') {
            setIsLogin(true)
            setIsRegister(false);
        } else {
            setIsLogin(false)
            setIsRegister(true);
        }
        setIsModal(!isModal)
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <Link href="/">
                    <Image src={logo3} alt='logo' width={242} height={72} className={styles.navbar__container__logo} />
                </Link>
                <div className={styles.navbar__container__link}>
                    <Link href="/" className={`${styles.navbar__container__link__item} ${pathname === '/' && styles.navbar__container__link__item__active}`}>Home</Link>
                    <Link href="/courses" className={`${styles.navbar__container__link__item} ${pathname === '/courses' && styles.navbar__container__link__item__active}`}>Courses</Link>
                    <Link href="/bootcamp" className={`${styles.navbar__container__link__item} ${pathname === '/bootcamp' && styles.navbar__container__link__item__active}`}>Bootcamp</Link>
                    <Link href="" className={`${styles.navbar__container__link__item} ${pathname === '/about' && styles.navbar__container__link__item__active}`}>about</Link>
                </div>
                <div className={styles.navbar__container__box}>
                    <Button className={styles.navbar__container__box__button} onClick={() => handleModal("login")}>Login</Button>
                    <Button className={styles.navbar__container__box__button} variant="secondary" onClick={() => handleModal("register")}>register</Button>
                </div>
            </div>
            <Modal isOpen={isModal}>
                {
                    isLogin ? <div>
                        <h1 className={styles.navbar__container__modal__title}>Login</h1>
                        <hr className={styles.navbar__container__modal__hr} />
                        <Input label='Email' name='email' type='email' placeholder='Email' />
                        <Input label='Pasword' name='password' type='password' placeholder='Password' />
                        <hr className={styles.navbar__container__modal__hr} />
                        <Button className={styles.navbar__container__modal__button}>Login</Button>
                    </div> :
                        isRegister &&
                        <div>
                            <h1 className={styles.navbar__container__modal__title}>Register</h1>
                            <hr className={styles.navbar__container__modal__hr} />
                            <Input label='Nama' name='name' type='text' placeholder='Nama' />
                            <Input label='Email' name='email' type='email' placeholder='Email' />
                            <Input label='Pasword' name='password' type='password' placeholder='Password' />
                            <hr className={styles.navbar__container__modal__hr} />
                            <Button className={styles.navbar__container__modal__button}>Register</Button>
                        </div>
                }
            </Modal>
        </div>
    )
}

export default NavbarComponent