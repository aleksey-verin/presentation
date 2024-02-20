import { useEffect } from 'react'
import styles from './page.module.css'
import { cn } from '../../lib/utils'
import { Button } from '../../components/button'
import { Link, useNavigate } from 'react-router-dom'

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step9')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step11')
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
            <strong>SVG-анимации: </strong> Использование векторной графики для создания сложных
            анимаций, таких как анимированные графики, иллюстрации или логотипы. SVG-анимации
            обладают большей гибкостью и масштабируемостью по сравнению с растровой графикой.
          </p>
        </div>
        <div
          className={cn(
            'flex flex-col w-1/3 text-3xl leading-normal items-center justify-center p-5 gap-4',
            styles.container
          )}
        >
          <Link
            to={'https://codepen.io/jjperezaguinaga/full/DZxRmb'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src='https://s26klg.storage.yandex.net/rdisk/2e691ab7021a6e84318e780cc95cf1e7696bef7274e6ceaf7e848bc28431ba72/65d4deb1/d0f_A99NVERjX1ysAChNFh6ADDBllkgZo220AcsZEgRHr8nBwQ5Ttg2f6wA7VbYr8Fp9Z0qtQK3ZZp5yQFRD8A==?uid=77569343&filename=pic7.png&disposition=inline&hash=&limit=0&content_type=image/png&owner_uid=77569343&fsize=710422&hid=798559fbe2eeac11a08eda62795f6e29&media_type=image&tknv=v2&etag=7e27a8a1cfbf1e92c7ecb7fe0e507f73&rtoken=bOl3UFcei8NL&force_default=yes&ycrid=na-8d43130364e3edaf771693430cf1bcfd-downloader9f&ts=611d363004e40&s=03e8e9c9558a3e18f06bb4a578014f74a721eef8c72a80ff4ad003ee59c4feb5&pb=U2FsdGVkX1-hPIbnAR3denEZ2mSthvLf28T1X17qt8KK9j2JQIqthqJqLmBYii0tGDco7ionRJxmV2FIjpLXhjfSBCGRv0hbdvVrVr3HfuA'
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
          <Link
            to={'http://127.0.0.1:5500/9.html'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src='https://s599sas.storage.yandex.net/rdisk/46cca82a2f39d85b99aca813118bf3d19998101f9e1ad0eaf0bdb46df48ef75d/65d4dec6/d0f_A99NVERjX1ysAChNFkA_6__DphNsw9nxscclefOXm_OkdgKTtdZat5JJSkZ4Gxyggt_-UpKjMRQqaXB6pw==?uid=77569343&filename=pic8.png&disposition=inline&hash=&limit=0&content_type=image/png&owner_uid=77569343&fsize=27170&hid=9540811a1d225eaf000f4cf8d0664996&media_type=image&tknv=v2&etag=ca14dec07fbdf00574f3dd9d6572c9e0&rtoken=U1WjNsPDUxz0&force_default=yes&ycrid=na-276cfa06d6b89d2085118accbd0eea14-downloader13h&ts=611d36440bd80&s=09da175a516fee8aab044d3175c7df9e32e55ce253828fef22292b4e7ce168e9&pb=U2FsdGVkX19UnhadrTL2vUtjq39MXXzxWGDfpMo6hqD1qAgZBuvlezl89DSFiD4rct6nwIIgER_WMPpDKqGIHvSTSO8ZsusVv-NMjcmxIXc'
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
        </div>
      </div>
      <div className='w-full flex justify-between'>
        <Button href={'/step9'}>Назад</Button>
        <Button href={'/step11'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
