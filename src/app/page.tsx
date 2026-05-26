import { Heading } from '@/components/ds/heading';
import { SignOut } from '@/components/shared';

const elements = {
  title: 'Hello <codacomigo />',
};

export default function Home() {
  return (
    <div className="flex h-screen flex-col p-2">
      <header className="flex w-full justify-end">
        <SignOut />
      </header>
      <main className="flex flex-1 items-center justify-center">
        <Heading as="h1" size="xl">
          {elements.title}
        </Heading>
      </main>
    </div>
  );
}
