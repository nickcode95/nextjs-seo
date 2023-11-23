import Image from 'next/image'
import Blog from '../app/blog/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<Blog />
    </main>
  )
}
