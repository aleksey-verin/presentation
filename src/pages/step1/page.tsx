import { useEffect } from 'react'
import { Button } from '../../components/button'
import { useNavigate } from 'react-router-dom'

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step2')
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', keydownHandler)
    return () => {
      document.removeEventListener('keydown', keydownHandler)
    }
  }, [])

  return (
    <main className='flex min-h-screen flex-col items-center p-10 text-5xl'>
      <div className='flex flex-auto justify-center h-full items-center'>
        <p className='w-2/3 text-4xl leading-normal'>
          Анимации играют ключевую роль в создании интерактивных и привлекательных веб-сайтов. Они
          не только придают страницам живость и динамику, но и способствуют улучшению
          пользовательского опыта. В этом докладе мы рассмотрим как простые, так и сложные анимации,
          их преимущества и способы использования при разработке сайтов.
        </p>
      </div>
      <div className='w-full flex justify-between items-center'>
        <Button href={'/'}>Назад</Button>
        <p className='text-sm'>1 из 12</p>
        <Button href={'/step2'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
