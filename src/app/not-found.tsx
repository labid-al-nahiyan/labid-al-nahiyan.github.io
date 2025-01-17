import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='font-[25px] underline m-2'>Return Home</Link>
    </div>
  )
}