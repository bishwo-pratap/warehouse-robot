
'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

export default function NavBar() {
  return (
    <div>
      <Navbar fluid rounded className='py-2'>
        <Navbar.Brand as={Link} href="http://localhost:3000">
          <h1 className="text-3xl font-bold">Warehouse Robot</h1>
        </Navbar.Brand>
      </Navbar>
      <hr className="h-px bg-gray-200 border-1 dark:bg-gray-700"></hr>
    </div>
  );
}
