"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
 

const links = [
  { name: 'customers', href: '/ui/dashboard/customers', icon: UserGroupIcon },
  { name: 'invoices', href: '/ui/dashboard/invoices', icon:   DocumentDuplicateIcon },
  { name: 'dasboard', href: '/ui/dashboard', icon: HomeIcon },
];

export default function NavLinks() {
  const pathname=usePathname();
  return (
    <div className='flex gap-4 p-4 bg-gray-200 md:flex-col md:w-48'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
              isActive  ? 'bg-sky-100 text-blue-600'
                  : 'bg-gray-50 hover:bg-sky-100 hover:text-blue-600'
            }`}

          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}