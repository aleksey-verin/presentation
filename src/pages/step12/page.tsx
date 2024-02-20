import { useEffect } from 'react'
import { Button } from '../../components/button'
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step11')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step13')
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
      <h3 className='text-4xl'>Преимущества использования анимаций:</h3>
      <div className='flex flex-col flex-auto justify-center h-full items-center'>
        <p className='w-4/5 text-3xl leading-normal mb-4'>
          <strong>Привлекательный дизайн:</strong> Анимации делают веб-сайты более привлекательными
          и интересными для пользователей, улучшая общее визуальное впечатление.
        </p>
        <p className='w-4/5 text-3xl leading-normal mb-4'>
          <strong>Выделение важных элементов:</strong> Анимации могут использоваться для выделения
          ключевых элементов на странице, таких как кнопки вызова к действию или сообщения об
          ошибке.
        </p>
        <p className='w-4/5 text-3xl leading-normal mb-4'>
          <strong>Увеличение уровня вовлеченности:</strong> Сложные анимации, такие как параллакс
          или 3D-эффекты, могут создавать более глубокий и захватывающий пользовательский опыт,
          привлекая внимание к содержимому сайта.
        </p>
      </div>
      <div className='w-full flex justify-between items-center'>
        <Button href={'/step11'}>Назад</Button>
        <p className='text-sm'>12 из 12</p>
        <Button href={'/step13'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
