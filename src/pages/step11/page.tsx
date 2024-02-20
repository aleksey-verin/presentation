'use client'
import { useEffect } from 'react'
import styles from './page.module.css'
import { cn } from '../../lib/utils'
import { Button } from '../../components/button'
import { Link, useNavigate } from 'react-router-dom'

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step10')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step12')
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
            <strong>3D-анимации: </strong> Использование технологий WebGl, Three.js, CSS3 и
            JavaScript для создания трехмерных анимаций и эффектов, таких как вращение, перспектива
            и трансформации элементов в пространстве.
          </p>
        </div>
        <div
          className={cn(
            'flex flex-col w-1/3 text-3xl leading-normal items-center justify-center p-5 gap-4',
            styles.container
          )}
        >
          <Link
            to={'https://kprverse.com/'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src='https://s492vla.storage.yandex.net/rdisk/68537b829dd16e5688f88bfe7461503ff16d151b1d40081699b7fb43779ae206/65d4dedd/d0f_A99NVERjX1ysAChNFvqBs1TZtVzkkdJOJPTbU3Op6TMUi_pSFvIfphRHvxA88zZvVX-VboVsQ5x-mzdLDg==?uid=77569343&filename=pic9.png&disposition=inline&hash=&limit=0&content_type=image/png&owner_uid=77569343&fsize=2180723&hid=8c9f18f06cc539765e4e5ebe3a01a52d&media_type=image&tknv=v2&etag=c99071575e1fe1d74ce220150f11ecf1&rtoken=XqrUpGLrjxf4&force_default=yes&ycrid=na-c49bdc9807371de0b37efa543b33ef31-downloader13f&ts=611d3659fb140&s=d62d1fea27b1ece67b59b0c275b12df0b82116b20a0e51d9bf59e8ca196982c9&pb=U2FsdGVkX19Jrz20Ki-5B6AAB5GHSfz1nd8yahYHgkWrNojjzNXEeNTjpAp9FD1l7DCnejPehWywyLIBLJTFV7gN26iZorJpaPJ_r7Kt15w'
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
          <Link
            to={'https://www.kubota.com/futurecube/'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src='https://s309vla.storage.yandex.net/rdisk/72b7f57f78162c4b176db358eda73b60905ee7f313bf750319e80e6e5d4e5ad4/65d4def2/d0f_A99NVERjX1ysAChNFgzu7W1SP__4yvoUgqUJS5k34ZsNXyzDZpEQGQ5ejbKgRr3fHhR5c5uZ8n_QrQfepg==?uid=77569343&filename=pic10.png&disposition=inline&hash=&limit=0&content_type=image/png&owner_uid=77569343&fsize=518751&hid=863978e0c8ce0637f0becc0749517bba&media_type=image&tknv=v2&etag=849eef60bad5648a5bf13eb069e72c78&rtoken=tFZrmrYOAMJS&force_default=yes&ycrid=na-b0fca1d9088b773f9a162e6fc16f81ee-downloader9f&ts=611d366e02080&s=ef7e5b6479f5e4521b5a9a149e8ada33c8ba8b1732b1848bd121b3c20af5a822&pb=U2FsdGVkX19da0iYZ3Q3UVnPn48vWcMbIDsuGccGZyZ54U3nMmnBQIsAAoZnWyQDlRGehHnjFpfH8RXsbcRJGVLre1e2CTP0Oj_vzKWwlpw'
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
        </div>
      </div>
      <div className='w-full flex justify-between'>
        <Button href={'/step10'}>Назад</Button>
        <Button href={'/step12'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
