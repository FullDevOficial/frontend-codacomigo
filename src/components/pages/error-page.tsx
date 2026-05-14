import { Heading } from '@/components/ds/heading'
import { Logo } from '@/components/ds/logo'
import { Text } from '@/components/ds/text'

export default function ErrorPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      
      <Logo size="sm" className="mb-1" />

      <Heading
        size="xs"
        weight="bold"
        as="h1"
        className="text-[#FB433C] mb-1"
      >
        Seu PR quebrou a main...
      </Heading>

      <Text
        size="p2"
        tone="black"
        weight="regular"
        className="leading-none"
      >
        Não encontramos uma conta conectada ao{' '}
        <Text size="p2" as="span" tone="brand" weight="regular">
          Google
        </Text>
        .
        <br />
        Tente entrar com outra conta.
      </Text>

    </div>
  )
}