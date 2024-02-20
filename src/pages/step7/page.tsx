'use client'
import { useEffect } from 'react'
import styles from './page.module.css'
import { Button } from '../../components/button'
import { cn } from '../../lib/utils'
import { Link, useNavigate } from 'react-router-dom'

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step6')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step8')
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', keydownHandler)
    return () => {
      document.removeEventListener('keydown', keydownHandler)
    }
  }, [])
  return (
    <main className='flex min-h-screen flex-col items-center p-10'>
      <h3 className='text-4xl'>Сложные анимации</h3>
      <div className='flex flex-auto justify-center h-full items-center'>
        <div className='w-2/3 text-3xl leading-normal pr-10'>
          <p className='pb-6'>
            <strong>Анимация скролла (Scroll Animation): </strong> Эффект, при котором элементы
            анимируются при прокрутке страницы пользователем. Например, фоновые изображения могут
            двигаться или изменять прозрачность, чтобы создать впечатление погружения или дополнить
            содержание страницы анимированными эффектами.
          </p>
        </div>
        <div
          className={cn(
            'flex flex-col w-1/3 text-3xl leading-normal items-center justify-center p-5 gap-4',
            styles.container
          )}
        >
          <Link
            to={'https://avia100.rusneb.ru/'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src='https://s703sas.storage.yandex.net/rdisk/1b02e72bad4b9561f5fd13f1eb604caca8a6caa81d4c0545ca7370b4551625e1/65d4de02/d0f_A99NVERjX1ysAChNFq72L2aXpoT28sf7lHH5g4shcTrnOi5mXNWAmf2D7Hj9E9rOfyjTosg4U-NnAA9Oxw==?uid=77569343&filename=pic1.png&disposition=inline&hash=&limit=0&content_type=image/png&owner_uid=77569343&fsize=1452960&hid=2fae3a546ec2ebb37bea1c51c55dbab5&media_type=image&tknv=v2&etag=86f1987da292b2fba8feac7303f047fc&rtoken=Vw7LMtAtRmoD&force_default=yes&ycrid=na-0c850955407b3413333baa907154eab5-downloader15e&ts=611d358920480&s=53e9c277b41c783f1942f82c4ae70f08f2655593c773e61f12bf40c2861eb48b&pb=U2FsdGVkX188nT7RcanUtELFe5nPCuk2VumdQT33ijggzLGCyUuzI4_KBEtTOKil_YJpmKDc0q1D8bRZ3NgotXk3yEeWmPYWtHqlO6KD2VA'
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
          <Link
            to={'http://127.0.0.1:5500/18.html'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src='https://s1009sas.storage.yandex.net/rdisk/53db71f7b6d5fdf6fa5651eff4e0bf6b7ab455cb443c3a332312c248037e1aa7/65d4de2d/d0f_A99NVERjX1ysAChNFlAoaMygFHdrbcd7J64VY3tu6vpCQFYTudJYMNBHCkRtyMP_hAso0HDTojv0m4_IQg==?uid=77569343&filename=pic2.png&disposition=inline&hash=&limit=0&content_type=image/png&owner_uid=77569343&fsize=186038&hid=bcadb2ff7991b5009bf888881f313448&media_type=image&tknv=v2&etag=d2deadd9352ef32567b03462e0326e28&rtoken=c9JVgS8PYwTu&force_default=yes&ycrid=na-571fa701aec483f2a667ef06ea91266b-downloader16e&ts=611d35b222540&s=6a7386986b99c73667a51fd29c702debf9e36014670557b56bf67f56057cb43f&pb=U2FsdGVkX1-jWY7N7OqYb20jeOFwXxnGoq1BwoQV_YLIElQGu_ENebK7zWke4F69e5a-yhsCHnk62MY148AH8lN7NT7R3iz8BHaMO8-mho0'
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
        </div>
      </div>
      <div className='w-full flex justify-between'>
        <Button href={'/step6'}>Назад</Button>
        <Button href={'/step8'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
