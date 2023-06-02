import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container'>
    <Head>
        <title>Home</title>
    </Head>
    <h1>HOME</h1>
    <p>
    A home, or domicile, is a space used as a permanent or semi-permanent residence for one or many humans, and sometimes various companion animals.
    </p>
    </div>
  );
}