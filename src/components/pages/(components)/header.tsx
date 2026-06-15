import { Logo } from '@/components/ds/logo';
import { Text } from '@/components/ds/text';

export default function Header() {
  return (
    <div className="mb-6 flex flex-col items-center justify-center gap-4">
      <Logo size="sm" />
      <div className="flex flex-col items-center justify-center">
        <Text size="sub2" weight="bold" tone="black">
          Bem vindo ao
        </Text>
        <Text size="sub1" weight="bold" tone="brand">
          {'<CODACOMIGO/>'}
        </Text>
      </div>
      <Text size="p1" weight="regular" tone="black">
        Insira seus dados abaixo:
      </Text>
    </div>
  );
}
