import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h2>

        next js
      </h2>


      <Link href={'/pages/posts'}>
      <button>posts page</button>
      </Link>


    </div>
  );
}

