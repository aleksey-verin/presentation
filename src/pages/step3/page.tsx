import styles from './page.module.css'
import { useEffect } from 'react'
import { Button } from '../../components/button'
import { cn } from '../../lib/utils'
import { useNavigate } from 'react-router-dom'

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step2')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step4')
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
            <strong>Переходы (Transitions):</strong> Простые анимации, которые изменяют свойства
            элемента (например, цвет, размер, прозрачность) по мере изменения состояния. Они часто
            используются для создания плавных переходов между различными состояниями элементов.
          </p>
          <p className=''>
            <strong>Плавное появление/исчезновение (Fade In / Fade Out):</strong> Эффект, при
            котором элемент появляется/исчезает на странице плавно, без резких скачков или
            моментального появления. Это создает более приятное визуальное впечатление для
            пользователей.
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
      <div className='w-full flex justify-between items-center'>
        <Button href={'/step2'}>Назад</Button>
        <p className='text-sm'>3 из 12</p>
        <Button href={'/step4'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
