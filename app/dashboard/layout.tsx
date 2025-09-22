'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'

const links = [
  { name: 'customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'dashboard', href: '/dashboard', icon: HomeIcon },
];

export default function NavLinks() {
  const pathname = usePathname(); // lấy path hiện tại

  return (
    <div className="flex flex-col gap-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href; // so sánh

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
