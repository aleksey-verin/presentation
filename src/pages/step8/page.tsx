import { useEffect } from 'react'
import styles from './page.module.css'
import { cn } from '../../lib/utils'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/button'

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step7')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step9')
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
        <div className='w-2/3 text-3xl leading-normal pr-10'>
          <p className='pb-6'>
            <strong>Параллакс (Parallax): </strong> Эффект, при котором фоновые и передние элементы
            движутся с разной скоростью при прокрутке страницы, создавая глубину и объемность
            визуального пространства.
          </p>
        </div>
        <div
          className={cn(
            'flex flex-col w-1/3 text-3xl leading-normal items-center justify-center p-5 gap-4',
            styles.container
          )}
        >
          <Link
            to={'https://casadilegna.com/en/'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src='https://s105vlx.storage.yandex.net/rdisk/d216f557203b65422279f17581a0ef8ef47cab6129c98628af3a2f7c1a8de12a/65d4de62/d0f_A99NVERjX1ysAChNFhewQ7GH3WN2SoJVdSYpoZKrN8eXEim4Udlz22Tt4OcTOlfjgsRzy76GMFMUfX3MAg==?uid=77569343&filename=pic3.png&disposition=inline&hash=&limit=0&content_type=image/png&owner_uid=77569343&fsize=1307972&hid=c5f343a65d4919bdfbdb317e6185e530&media_type=image&tknv=v2&etag=cc1c5fd50ec6a3461e53a8c0d7a2c390&rtoken=Wq8hzCzm5jKJ&force_default=yes&ycrid=na-f91f54ee33bd8d8d71179d25a47733e3-downloader22e&ts=611d35e4adc80&s=362b4a4eeed5637f80a78e8ee68e5aaaa2a899d6f0885de95ee059482e831618&pb=U2FsdGVkX1_0nXigCJdMwZnNlQ2GuNOvoFeUtt2GwyO0qLkTQ78CP8P-4wiVLi4cbiQEtkq2FNzZj7YknE6HBLkCmPsO6ZydPGm633mx1as'
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
          <Link
            to={'https://www.anthonyfonte.com/'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src='https://s68klg.storage.yandex.net/rdisk/42a4a36181efa7bace6de46c74f2ed7750592392610fbda2522495060768866f/65d4de74/d0f_A99NVERjX1ysAChNFvHDokaCTC1zHV2iNgYIWbRaMYJNxT4UrDBRkPs3p7xt7n-DHkzncl4LoiCp84ot1g==?uid=77569343&filename=pic4.png&disposition=inline&hash=&limit=0&content_type=image/png&owner_uid=77569343&fsize=696238&hid=61437a78451a29993e1b43f1efd4c191&media_type=image&tknv=v2&etag=564742f7ad85aadb510cba3496778abe&rtoken=FF45LadUdieo&force_default=yes&ycrid=na-96c481c963e84e147f0c43e83e7b49c2-downloader1f&ts=611d35f5d8500&s=06a8377fe3ac77c975639c6f77468b8b4fbef7b7db3e65ed0c005636343c1341&pb=U2FsdGVkX18o8cVYPHAuENXUxBUd2lMF9V_8fFpIHgE_y7NumwLkxLXiSRb77WJIxrzrtMee4GTl6Gp4aryJnxb7qqop-NRPrapgy-BOXMM'
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
        </div>
      </div>
      <div className='w-full flex justify-between'>
        <Button href={'/step7'}>Назад</Button>
        <Button href={'/step9'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
