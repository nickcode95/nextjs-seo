import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Img from '../components/ui/Image';

function PostCard(post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <div className='text-center'>
          <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
            {post.title}
          </Link>
        </div>
        <Link href={post.url} >
          <Img src={post.image} sizes={1} alt={post.alt} />
        </Link>

      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-white">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="p-12 text-white">
      <h1 className="mx-auto text-center mb-8 text-center text-2xl font-black">Blog</h1>
      <div className='flex'>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>

    </div>
  )
}