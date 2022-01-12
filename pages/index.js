import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Twitter App build with Next JS, Tailwind CSS, Recoil" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/124/124021.png" />
      </Head>
      
      <main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>

        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}

        {/* Widgets */}


        {/* Modal */}
      </main>
    </div>
  )
}
