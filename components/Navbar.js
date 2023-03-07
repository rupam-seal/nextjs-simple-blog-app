import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={36} height={36} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blogs">Blogs</Link>
    </nav>
  );
};

export default Navbar;
