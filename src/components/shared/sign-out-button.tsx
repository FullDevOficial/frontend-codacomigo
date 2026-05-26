'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

import { Button } from '../ui/button';

export function SignOut() {
  const onSignout = () => signOut();
  return (
    <Button variant="ghost" className="cursor-pointer" onClick={onSignout}>
      <LogOut />
    </Button>
  );
}
