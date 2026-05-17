import { Heading } from '@/components/ds/heading';
import { SignOut } from '@/components/shared';

const elements = {
  title: 'Hello <codacomigo />',
};

export default function Home() {
  return (
    <div className="p-2 h-screen flex flex-col">
      <header className='flex w-full justify-end'>
        <SignOut />
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Heading as="h1" size="xl">
          {elements.title}
        </Heading>
      </main>
    </div>
  );
}
