import { useEffect } from 'react';
import { Button } from '../components/button';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step13')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step1')
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
      <p>Использование анимаций при разработке сайтов</p>
      </div>
      <div className='w-full flex justify-between items-center'>
        <Button href={'/step13'}>В конец</Button>
        <p className='text-sm'>Тема презентации</p>
        <Button href={'/step1'}>Далее</Button>
      </div>
    </main>
  )
};

export default Home;
