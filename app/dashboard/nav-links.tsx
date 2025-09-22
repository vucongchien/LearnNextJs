import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
 

const links = [
  { name: 'customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'invoices', href: '/dashboard/invoices', icon:   DocumentDuplicateIcon },
  { name: 'dasboard', href: '/dashboard', icon: HomeIcon },
];

export default function NavLinks() {
  return (
    <div className='flex gap-4 p-4 bg-gray-200 md:flex-col md:w-48'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}