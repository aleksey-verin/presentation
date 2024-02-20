import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/button'
import styles from './page.module.css'
import useAnimation from '../../hooks/useAnimation'



const ConfettiCanvas = () => {
  const navigate = useNavigate()

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step12')
    }
    if (event.key === 'ArrowRight') {
      navigate('/')
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', keydownHandler)
    return () => {
      document.removeEventListener('keydown', keydownHandler)
    }
  }, [])

  const canvasRef = useRef(null)
  useAnimation(canvasRef)

  return (
    <>
      <main className='flex min-h-screen flex-col items-center p-10 text-6xl'>
        <div className='flex flex-auto justify-center h-full items-center z-10'>
          <p>Спасибо за внимание 😎 </p>
        </div>
        <div className='w-full flex justify-between items-center z-10'>
          <Button href={'/step12'}>Назад</Button>
          <Button href={'/'}>В начало</Button>
        </div>
        <canvas className={styles.canvas} ref={canvasRef}></canvas>
      </main>
    </>
  )
}

export default ConfettiCanvas
