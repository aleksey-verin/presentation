import { useEffect } from 'react'
import styles from './page.module.css'
import { cn } from '../../lib/utils'
import { Button } from '../../components/button'
import { Link, useNavigate } from 'react-router-dom'
import pic7 from '../../assets/pic7.png'
import pic8 from '../../assets/pic8.png'

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step9')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step11')
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
            <strong>SVG-анимации: </strong> Использование векторной графики для создания сложных
            анимаций, таких как анимированные графики, иллюстрации или логотипы. SVG-анимации
            обладают большей гибкостью и масштабируемостью по сравнению с растровой графикой.
          </p>
        </div>
        <div
          className={cn(
            'flex flex-col w-1/3 text-3xl leading-normal items-center justify-center p-5 gap-4',
            styles.container
          )}
        >
          <Link
            to={'https://codepen.io/jjperezaguinaga/full/DZxRmb'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src={pic7}
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
          <Link
            to={'http://127.0.0.1:5500/9.html'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src={pic8}
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
        </div>
      </div>
      <div className='w-full flex justify-between items-center'>
        <Button href={'/step9'}>Назад</Button>
        <p className='text-sm'>10 из 12</p>
        <Button href={'/step11'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
