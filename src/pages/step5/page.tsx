import { useEffect } from 'react'
import styles from './page.module.css'
import { Button } from '../../components/button'
import { cn } from '../../lib/utils'
import { useNavigate } from 'react-router-dom'

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step4')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step6')
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
      <h3 className='text-4xl'>Простые анимации</h3>
      <div className='flex flex-auto justify-center h-full items-center'>
        <div className='w-2/3 text-3xl leading-normal pr-10'>
          <p className='pb-6'>
            <strong>Анимация изменения положения (Move Animation):</strong> Эффект, при котором
            элементы перемещаются с одного места на странице на другое с плавным движением. Это
            может быть полезно для создания интерактивных форм или меню
          </p>
          <p className=''>
            <strong>Анимация поворота (Rotation Animation):</strong> Эффект, при котором элементы
            поворачиваются вокруг своей оси
          </p>
        </div>
        <div
          className={cn(
            'flex flex-col w-1/3 text-3xl leading-normal items-center justify-center p-10',
            styles.container
          )}
        >
          <div className='h-1/2 flex items-center justify-center'>
            <button className={styles.button1}>Hello</button>
          </div>
          <div className='h-1/2 flex items-center justify-center'>
            <button className={styles.button2}>Hello</button>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between'>
        <Button href={'/step4'}>Назад</Button>
        <Button href={'/step6'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
