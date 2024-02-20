import { useEffect } from 'react'
import styles from './page.module.css'
import { cn } from '../../lib/utils'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/button'
import pic3 from '../../assets/pic3.png'
import pic4 from '../../assets/pic4.png'

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step7')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step9')
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
            <strong>Параллакс (Parallax): </strong> Эффект, при котором фоновые и передние элементы
            движутся с разной скоростью при прокрутке страницы, создавая глубину и объемность
            визуального пространства.
          </p>
        </div>
        <div
          className={cn(
            'flex flex-col w-1/3 text-3xl leading-normal items-center justify-center p-5 gap-4',
            styles.container
          )}
        >
          <Link
            to={'https://casadilegna.com/en/'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src={pic3}
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
          <Link
            to={'https://www.anthonyfonte.com/'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src={pic4}
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
        </div>
      </div>
      <div className='w-full flex justify-between items-center'>
        <Button href={'/step7'}>Назад</Button>
        <p className='text-sm'>8 из 12</p>
        <Button href={'/step9'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
