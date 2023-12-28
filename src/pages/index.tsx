import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { ImageCourses, gambar1, gambar2 } from '../../public/images/'
import CardProduct from '@/component/ui/cardProduct'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Courses Academy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <div className={styles.home__sectionHeader}>
          <div className={styles.home__sectionHeader__item}>
            <p className={styles.home__sectionHeader__item__text1}>DESIGNED FOR FULLSTACK WEB DEV & MOBILE APP</p>
            <p className={styles.home__sectionHeader__item__text2}>Belajar Fullstack Web Developer dan Mobile App jadi Mudah bareng Praktisi Ahli!</p>
            <p className={styles.home__sectionHeader__item__text3}>Belajar dari basic sampai tingkat advanced secara fleksibel dimana aja dan kapan aja!</p>
          </div>
          <Image src={gambar1} alt='gambar' width={400} className={styles.home__sectionHeader__images} />
        </div>
        <div className={styles.home__content}>
          <p className={styles.home__content__title}>
            4 Alasan Web Developer menjadi
            <span className={styles.home__content__title__span}>"Profesi yang Sangat Menjanjikan"</span>
          </p>
          <div className={styles.home__content__group1}>
            <div className={styles.home__content__group1__card}>
              <i className='bx bx-dollar'></i>
              <p>Gaji untuk skill Web Developer cukup tinggi, sejalan dengan kontribusi digital yang diberikan</p>
            </div>
            <div className={styles.home__content__group1__card}>
              <i className='bx bxs-invader'></i>
              <p>Pekerjaan sebagai Web Developer sulit digantikan oleh Robot</p>
            </div>
            <div className={styles.home__content__group1__card}>
              <i className='bx bx-briefcase-alt-2'></i>
              <p>Pekerjaan yang dapat dikerjakan dimana saja atau Work from Anywhere (WFA)</p>
            </div>
            <div className={styles.home__content__group1__card}>
              <i className='bx bxs-buildings'></i>
              <p>Banyak perusahaan yang membutuhkan web developer mulai dari start up hingga perusahaan besar</p>
            </div>
          </div>
          <p className={styles.home__content__title}>
            Kenapa Course Academy Berbeda
          </p>
          <div className={styles.home__content__group2}>
            <div className={styles.home__content__group2__card}>
              <h5>Kurikulum standar industri global</h5>
              <p>Kurikulum dikembangkan bersama perusahaan dan pemilik teknologi dunia sesuai kebutuhan industri terkini.</p>
              <h5>Belajar fleksibel sesuai jadwal Anda</h5>
              <p>Belajar kapan pun, di mana pun, secara mandiri. Bebas memilih kelas sesuai minat belajar. Akses seumur hidup ke kelas dan forum diskusi setelah lulus.</p>
            </div>
            <Image src={gambar2} alt='gambar' width={637} />
          </div>
          <p className={styles.home__content__title}>
            Course Coding dengan Pembelajaran Intensif
          </p>
          <div className={styles.home__content__group3}>
            <div className={styles.home__content__group3__card}>
              <i className='bx bx-book-content'></i>
              <h6>Kurikulum Kebutuhan Industri</h6>
              <p>Materi dirancang sesuai dengan kompetensi di industri terkini.</p>
            </div>
            <div className={styles.home__content__group3__card}>
              <i className='bx bx-briefcase-alt-2'></i>
              <h6>Projek Portofolio</h6>
              <p>Membuat final projek berupa aplikasi web atau mobile untuk portofolio.</p>
            </div>
            <div className={styles.home__content__group3__card}>
              <i className='bx bx-bulb'></i>
              <h6>Growth Mindset</h6>
              <p>Sesi konsultasi pengembangan diri untuk mengembangkan soft skill.</p>
            </div>
            <div className={styles.home__content__group3__card}>
              <i className='bx bx-dollar'></i>
              <h6>Affordable</h6>
              <p>Kelas yang tetap berkualitas dengan biaya yang terjangkau.</p>
            </div>
            <div className={styles.home__content__group3__card}>
              <i className='bx bxs-medal'></i>
              <h6>Certificate</h6>
              <p>Setelah selesai mengikuti kelas, akan ada sertifikat kelulusan yang bisa kamu gunakan untuk mempermudah mendapat pekerjaan.</p>
            </div>
            <div className={styles.home__content__group3__card}>
              <i className='bx bxs-graduation'></i>
              <h6>Mentor Expert Dibidangnya</h6>
              <p>Para mentor adalah para mentor berpengalaman yang siap membimbing kamu.</p>
            </div>
          </div>
          <p className={styles.home__content__title}>
            Kategori Kelas
          </p>
          <div className={styles.home__content__group4}>
            <div className={styles.home__content__group4__card}>
              <i className='bx bxl-php' ></i>
              <p>Backend Developer</p>
            </div>
            <div className={styles.home__content__group4__card}>
              <i className='bx bxl-html5' ></i>
              <p>Frontend Developer</p>
            </div>
            <div className={styles.home__content__group4__card}>
              <i className='bx bxl-android' ></i>
              <p>Android Developer</p>
            </div>
            <div className={styles.home__content__group4__card}>
              <i className='bx bxl-apple' ></i>
              <p>IoS Developer</p>
            </div>
            <div className={styles.home__content__group4__card}>
              <i className='bx bx-wifi' ></i>
              <p>Internet Of Things</p>
            </div>
            <div className={styles.home__content__group4__card}>
              <i className='bx bxl-unity' ></i>
              <p>Design</p>
            </div>
            <div className={styles.home__content__group4__card}>
              <i className='bx bxl-postgresql' ></i>
              <p>Database</p>
            </div>
            <div className={styles.home__content__group4__card}>
              <i className='bx bx-code-block' ></i>
              <p>Fullstack Developer</p>
            </div>
          </div>
          <p className={styles.home__content__title}>
            Top Courses
          </p>
          <div className={styles.home__content__TopCourses}>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
          </div>
        </div>
      </main>
    </>
  )
}
