import { Heading } from '@/components/ds/heading'
import { Logo } from '@/components/ds/logo'
import { Text } from '@/components/ds/text'
import { Button } from '@/components/ui/button'
import { SubmitButton } from '../ds/submit-button'
import { Input } from '../ds/input'

export default function RegisterPage() {
    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
            <Logo size="sm" className="mb-1" />
            <Heading
                size="xs"
                weight="bold"             
                as="h1"   
                className="text-[#FB433C] mb-1"
            >
                Cadastre-se
            </Heading>
            <Text
                size="p2"
                tone="black"
                weight="regular"
                className="leading-none"
            >
                <Text size="p2" as="span" tone="brand" weight="regular">
                    Insira seus dados abaixo: 
                </Text>
            </Text>
        </div>
    )
}
