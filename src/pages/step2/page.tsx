import { useEffect } from 'react'
import { Button } from '../../components/button'
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step1')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step3')
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
        <p className='w-2/3 text-3xl leading-normal'>
          <strong>Простые анимации</strong> - это те, которые легко и быстро можно реализовать с
          помощью HTML и CSS, без необходимости использовать JavaScript или другие сложные
          технологии.
          <br />
          <br />
          Простые анимации обычно имеют небольшой объем кода, низкое потребление ресурсов и хорошую
          совместимость с разными браузерами и устройствами.
          <br />
          <br />
          Простые анимации подходят для создания эффектов, которые не требуют сложной логики,
          взаимодействия или динамики, таких как плавное появление, изменение цвета,
          масштабирование, вращение, смещение и т.д.
        </p>
      </div>
      <div className='w-full flex justify-between'>
        <Button href={'/step1'}>Назад</Button>
        <Button href={'/step3'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
