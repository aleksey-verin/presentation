import { useEffect } from 'react'
import styles from './page.module.css'
import { cn } from '../../lib/utils'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/button'

const Page = () => {
  const navigate = useNavigate();

  const keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      navigate('/step8')
    }
    if (event.key === 'ArrowRight') {
      navigate('/step10')
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
            <strong>Параллельные анимации (Parallel Animations): </strong> Это анимации, которые
            происходят одновременно на разных элементах или аспектах элемента. Например,
            одновременное изменение цвета и размера элемента.
          </p>
        </div>
        <div
          className={cn(
            'flex flex-col w-1/3 text-3xl leading-normal items-center justify-center p-5 gap-4',
            styles.container
          )}
        >
          <Link
            to={'https://technotext.habr.com/'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src='https://s430vlx.storage.yandex.net/rdisk/614f1663c13250cfc0aad3889c8f8c9080243892a96800f551044ff6bd2e4770/65d4de8a/d0f_A99NVERjX1ysAChNFtnRuj9fAvybZcE3-FrDZgRmqB-_jO4fWob4HqU3L2b5zzrR6GkDiSL0MDL9rbwLrQ==?uid=77569343&filename=pic5.png&disposition=inline&hash=&limit=0&content_type=image/png&owner_uid=77569343&fsize=709377&hid=cabad5ef8a7253c8383c03bcbddca22a&media_type=image&tknv=v2&etag=2c8246bafa52210e22b70c08c99f3c0d&rtoken=FAqQ1AuApLHK&force_default=yes&ycrid=na-3ab4dd461627f017877b7521495a1695-downloader3e&ts=611d360ad3680&s=d91d56038267cc1cada9e4cc2b3e21edaee2f2bddd620d6e647761f0ec10568f&pb=U2FsdGVkX19fC_kc9NVdHvKjmPEJB5PvYvWxCrCdmfRV1yuzxKVbtAAH9rfnuOYpVbN6cVouFDMe7H6B8_DChvQkUNY-ku5q5XFCJX33ql8'
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
          <Link
            to={'https://agentcooper.tilda.ws/'}
            target='_blank'
            className='h-1/2 w-full flex items-center justify-center rounded-xl overflow-hidden'
          >
            <img
              src='https://s21klg.storage.yandex.net/rdisk/21004f2c0ff7f1acae731c11923b29b59f296440a499f297c4b1f9a95bd3f252/65d4de9f/d0f_A99NVERjX1ysAChNFpK3jNJZM_kdFTlaSuk9JPJNrVzwkfPELLSEz3jYfQOFgDhtQ_3QjHZcy7kXoK8-IA==?uid=77569343&filename=pic6.png&disposition=inline&hash=&limit=0&content_type=image/png&owner_uid=77569343&fsize=1156863&hid=06639685fd053fcef9ac76482a1bf48e&media_type=image&tknv=v2&etag=69c7a85181de213117e45cbc6295df7e&rtoken=Z76jCtL4O7aC&force_default=yes&ycrid=na-29485d9156bc1cccf787ef532371be69-downloader3e&ts=611d361eda5c0&s=f221c4dd25d48ddd7e3fe1d48f8c5da4c8dc55b3aea611e054384ea737cca7f2&pb=U2FsdGVkX19l3bnRVpp4Y81GTJiMOgZE7WpJogKKK0NjopM0tVTO12Gb4nwYgeSettXMKFqVhyTr8EFzHybauanmz8GWtRTChw1OxftwkoY'
              width={300}
              height={300}
              alt=''
              className='object-cover w-full h-full rounded-xl overflow-hidden hover:scale-110 transition-all duration-300'
            />
          </Link>
        </div>
      </div>
      <div className='w-full flex justify-between'>
        <Button href={'/step8'}>Назад</Button>
        <Button href={'/step10'}>Далее</Button>
      </div>
    </main>
  )
}

export default Page
