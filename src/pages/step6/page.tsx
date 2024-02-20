import { useEffect } from 'react'
import { Button } from '../../components/button'
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step5')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step7')
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
        <p className='w-2/3 text-3xl leading-normal'>
          <strong>Сложные анимации</strong> - это те, которые требуют использования JavaScript или других специальных
          технологий, таких как WebGL, SVG или Lottie.<br /><br /> Сложные анимации обычно имеют большой объем
          кода, высокое потребление ресурсов и низкую совместимость с разными браузерами и
          устройствами. <br /><br />Сложные анимации подходят для создания эффектов, которые требуют сложной
          логики, взаимодействия или динамики, таких как 3D-эффекты, параллакс, интерактивная
          графика, видео и аудио.
        </p>
      </div>
      <div className='w-full flex justify-between items-center'>
        <Button href={'/step5'}>Назад</Button>
        <p className='text-sm'>6 из 12</p>
        <Button href={'/step7'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
