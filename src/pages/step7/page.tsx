import { useEffect } from 'react'
import styles from './page.module.css'
import { Button } from '../../components/button'
import { cn } from '../../lib/utils'
import { Link, useNavigate } from 'react-router-dom'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'


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
              src={pic1}
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
          <Link
            to={'https://24preprod.ru/meetups/animations/projects/18.html'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src={pic2}
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
        </div>
      </div>
      <div className='w-full flex justify-between items-center'>
        <Button href={'/step6'}>Назад</Button>
        <p className='text-sm'>7 из 12</p>
        <Button href={'/step8'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
