import Link from "next/link"

export default function PillBtn({ text, href }: { text: string, href: string }) {
  return (
    <Link
      href={href}
    >
      <button className={`inline-block py-2 px-6 rounded-full bg-sky-600 hover:bg-sky-300 hover:transition-colors text-white`}>
        {text}
      </button>
    </Link>
    
  )
}