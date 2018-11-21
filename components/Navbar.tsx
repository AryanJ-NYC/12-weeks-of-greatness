import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
    </div>
  );
}
