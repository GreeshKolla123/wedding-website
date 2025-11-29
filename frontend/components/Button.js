import Link from 'next/link';

export default function Button({ children, href }) {
  return (
    <Link href={href}>
      <a className="bg-primary py-2 px-4 text-white rounded-md">{children}</a>
    </Link>
  );
}