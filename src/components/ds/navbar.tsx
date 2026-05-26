import { Heart, MessagesSquare, Settings, UserRound } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const NAVIGATION_ITEMS = [
  {
    id: 1,
    icon: <UserRound />,
    title: 'Perfil',
    href: '/profile',
  },
  {
    id: 2,
    icon: <MessagesSquare />,
    title: 'Seus matches',
    href: '/conversations',
  },
  {
    id: 3,
    icon: <Heart />,
    title: 'Quem te curtiu',
    href: '/likes',
  },
  {
    id: 4,
    icon: <Settings />,
    title: 'Configurações',
    href: '/settings',
  },
];

interface NavbarProps {
  active?: string;
}

export const Navbar = ({ active }: NavbarProps) => {
  return (
    <NavigationMenu className="bg-primary w-full p-1">
      <NavigationMenuList>
        {NAVIGATION_ITEMS.map((item) => (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <NavigationMenuItem className="h-20">
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'group h-full')}>
                  <Link
                    href={item.href}
                    className={cn(
                      'bg-transparent hover:bg-[#6E1C00] focus:bg-[#6E1C00]',
                      active === item.href && 'bg-[#6E1C00]',
                    )}
                  >
                    {item.icon}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black">
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
