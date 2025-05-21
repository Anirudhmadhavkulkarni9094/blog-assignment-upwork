import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-10 bg-white">
      <div className="w-full  px-4 py-4 ">
        <Link href="/" className="text-2xl font-bold text-gray-800">
            My Blog
        </Link>
      </div>
    </header>
  );
}
