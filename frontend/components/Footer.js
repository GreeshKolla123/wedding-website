import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary py-4">
      <div className="container mx-auto flex justify-between">
        <p className="text-white">2023 Wedding Website</p>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </footer>
  );
}