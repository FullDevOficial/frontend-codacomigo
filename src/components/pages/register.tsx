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
        <>
        <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
            <Logo size="sm" className="mb-1" />
            <Heading
                size="xs"
                weight="bold"             
                as="h1"   
                className="text-black mb-1"
            >
                Cadastre-se
            </Heading>
            <Text
                size="p2"
                tone="black"
                weight="regular"
                className="leading-none"
            >
                <Text size="p2" as="span" tone="black" weight="regular">
                    Insira seus dados abaixo: 
                </Text>
            </Text>
            <Text
                size="p2"
                tone="black"
                weight="bold"
                className="leading-none"
                >
                    Nome
            </Text>
            <Input placeholder="Digite seu nome" className="mb-4" />
             <Text
                size="p2"
                tone="black"
                weight="bold"
                className="leading-none"
                >
                    Data de nascimento
            </Text>
            <Input placeholder="29/08/2000" className="mb-4" />
             <Text
                size="p2"
                tone="black"
                weight="bold"
                className="leading-none"
                >
                    E-mail
            </Text>
            <Input placeholder="lucaspedro@fulldev.com.br" type="email"/>
             <Text
                size="p2"
                tone="black"
                weight="bold"
                className="leading-none"
                >
                    Senha
            </Text>
            <Input placeholder="******" type="password"/>

            <SubmitButton className="mt-6 mb-4">Cadastrar</SubmitButton>

        </div>

      <div className="flex items-center gap-4 w-full">
        <div className="flex-1 h-px bg-gray-300" />

        <span className="text-gray-400 text-sm">
          ou
        </span>

        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <div className="flex justify-center">
      <Button onClick={() => {}} size="social" variant="social">
      <FcGoogle className="size-6 shrink-0" />
       Google
      </Button>
        <Button onClick={() => {}} size="social" variant="social">
      <FaFacebook className="size-6 shrink-0 text-blue-600" />
       Facebook
      </Button>
    </div>
     </>
    )
}
