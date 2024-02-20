import { useEffect } from 'react'
import styles from './page.module.css'
import { cn } from '../../lib/utils'
import { Button } from '../../components/button'
import { useNavigate } from 'react-router-dom'

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step3')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step5')
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
            <strong>Плавное изменение размера (Scale):</strong> Анимация, при которой элемент
            изменяет свой размер постепенно. Это может использоваться, например, для анимации кнопок
            при наведении курсора.
          </p>
          <p className=''>
            <strong>Плавное изменение цвета (Color Change):</strong> Эффект, при котором цвет
            элемента постепенно меняется с одного состояния на другое. Это может использоваться,
            например, для подсветки активных элементов или для создания эффекта плавного перехода
            между различными цветовыми схемами.
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
        <Button href={'/step3'}>Назад</Button>
        <Button href={'/step5'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
