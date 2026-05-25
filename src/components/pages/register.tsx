'use client'
import React from 'react'
import { Heading } from '@/components/ds/heading'
import { Logo } from '@/components/ds/logo'
import { Text } from '@/components/ds/text'
import { Button } from '@/components/ui/button'
import { SubmitButton } from '../ds/submit-button'
import { Input } from '../ds/input'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 font-inter">
            <div className="w-full max-w-md flex flex-col items-center">
                <Logo size="sm" className="mb-3" />
                <Heading
                    size="xs"
                    weight="bold"
                    as="h1"
                    className="text-black mb-1 font-inter"
                >
                    Cadastre-se
                </Heading>
                <Text
                    size="p2"
                    tone="black"
                    weight="regular"
                    className="mb-6 font-inter"
                    as="span"
                >
                    Insira seus dados abaixo:
                </Text>

                <div className="w-full flex flex-col items-start mb-4">
                    <Text
                        size="p2"
                        tone="black"
                        weight="bold"
                        className="mb-2 font-inter"
                     >
                        Nome
                    </Text>
                    <Input placeholder="Digite seu nome" className="w-full border-[1.5px] rounded-full h-12 shadow-none placeholder:text-zinc-300 placeholder:font-inter placeholder:font-light" />
                 </div>

                <div className="w-full flex flex-col items-start mb-4">
                     <Text
                        size="p2"
                        tone="black"
                        weight="bold"
                        className="mb-2 font-inter"
                    >
                        Data de nascimento
                     </Text>
                     <Input placeholder="29/08/2000" className="w-full border-[1.5px] rounded-full h-12 shadow-none placeholder:text-zinc-300 placeholder:font-inter placeholder:font-light" />
                 </div>

                    <div className="w-full flex flex-col items-start mb-4">
                        <Text
                            size="p2"
                            tone="black"
                            weight="bold"
                            className="mb-2 font-inter"
                        >
                             E-mail
                        </Text>
                        <Input placeholder="lucaspedro@fulldev.com.br" type="email" className="w-full border-[1.5px] rounded-full h-12 shadow-none placeholder:text-zinc-300 placeholder:font-inter placeholder:font-light" />
                    </div>

                    <div className="w-full flex flex-col items-start mb-4">
                         <Text
                            size="p2"
                            tone="black"
                            weight="bold"
                            className="mb-2 font-inter"
                        >
                            Senha
                        </Text>
                        <Input placeholder="******" type="password" className="w-full border-[1.5px] rounded-full h-12 shadow-none placeholder:text-zinc-300 placeholder:font-inter placeholder:font-light" />
                    </div>

                <SubmitButton className="w-full mt-2 mb-6 bg-red-700 text-white font-normal hover:bg-red-800">Pronto!</SubmitButton>

                <div className="flex items-center gap-4 w-full mb-6">
                    <div className="flex-1 h-[0.2px] bg-zinc-300" />
                    <span className="text-zinc-300  font-inter text-sm font-light">ou</span>
                    <div className="flex-1 h-[0.2px] bg-zinc-300" />
                </div>

                <div className="flex justify-center gap-3 w-full">
                    <Button onClick={() => {}} size="social" variant="social" className="flex-1 rounded-2xl border-none bg-zinc-200">
                        <FcGoogle className="size-6 shrink-0 " />
                        Google
                    </Button>
                    <Button onClick={() => {}} size="social" variant="social" className="flex-1 rounded-2xl border-none bg-zinc-200">
                        <FaFacebook className="size-6 shrink-0 text-blue-600" />
                        Facebook
                    </Button>
                </div>
            </div>
        </div>
    )
}
