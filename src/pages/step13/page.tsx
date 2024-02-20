import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';


const Page = () => {
  const navigate = useNavigate();

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

  return (
    <main className="flex min-h-screen flex-col items-center p-10 text-6xl">
      <div className="flex flex-auto justify-center h-full items-center">
      <p>Спасибо за внимание 😎 </p>
      </div>
      <div className='w-full flex justify-between items-center'>
        <Button href={'/step12'}>Назад</Button>
        <p className='text-sm'>Конец</p>
        <Button href={'/'}>В начало</Button>
      </div>
    </main>
  )
};

export default Page;
