import { Inter } from 'next/font/google'
import NuvoImplementation from "@/components/NuvoImplementation";
import { toast, ToastContainer } from 'react-toastify'
import addFlashMessage from "@/actions/addFlashMessage";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
      <NuvoImplementation />
      <button onClick={() => addFlashMessage('test')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Trigger Flash Message</button>
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} closeOnClick={false} theme='colored' draggable={false} />
    </main>
  )
}
