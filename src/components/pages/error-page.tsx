import { Heading } from '@/components/ds/heading';
import { Logo } from '@/components/ds/logo';
import { Text } from '@/components/ds/text';

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="flex h-[852px] w-[393px] flex-col items-center justify-center rounded-2xl bg-white px-6 text-center shadow-md">
        <Logo size="sm" className="mb-1" />

        <Heading size="xs" weight="bold" as="h1" className="mb-1 text-[#FB433C]">
          Seu PR quebrou a main...
        </Heading>

        <Text size="p2" tone="black" weight="regular" className="max-w-95 leading-none">
          Não encontramos uma conta conectada ao{' '}
          <Text size="p2" as="span" tone="brand" weight="regular">
            Google
          </Text>
          .
          <br />
          Tente entrar com outra conta.
        </Text>
      </div>
    </div>
  );
}
