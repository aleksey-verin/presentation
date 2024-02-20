import { useEffect } from 'react'
import styles from './page.module.css'
import { cn } from '../../lib/utils'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/button'
import pic5 from '../../assets/pic5.png'
import pic6 from '../../assets/pic6.png'

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step8')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step10')
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
            <strong>Параллельные анимации (Parallel Animations): </strong> Это анимации, которые
            происходят одновременно на разных элементах или аспектах элемента. Например,
            одновременное изменение цвета и размера элемента.
          </p>
        </div>
        <div
          className={cn(
            'flex flex-col w-1/3 text-3xl leading-normal items-center justify-center p-5 gap-4',
            styles.container
          )}
        >
          <Link
            to={'https://technotext.habr.com/'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src={pic5}
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
          <Link
            to={'https://agentcooper.tilda.ws/'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src={pic6}
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
        </div>
      </div>
      <div className='w-full flex justify-between items-center'>
        <Button href={'/step8'}>Назад</Button>
        <p className='text-sm'>9 из 12</p>
        <Button href={'/step10'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
