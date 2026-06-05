'use client'
import React from 'react'
import { Heading } from '@/components/ds/heading'
import { Logo } from '@/components/ds/logo'
import { Text } from '@/components/ds/text'
import { Button } from '@/components/ui/button'
import { SubmitButton } from '../ds/submit-button'
import { Input } from '../ds/input'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { DateInput } from "@/components/ds/date-input"
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { Loader2 } from "lucide-react"

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGithubLogin = () => {
    signIn('github')
  }

  const handleGoogleLogin = () => {
    signIn('google')
  }

  const handleRegister = async () => {
    try {
      setIsLoading(true)

    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

    return (
        <div className="min-h-screen bg-white flex justify-center px-6 py-12 md:items-center md:py-0 font-inter">
            <div className="w-full max-w-lg flex flex-col items-center px-4">
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
                       <DateInput />
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

                <SubmitButton
                    onClick={handleRegister}
                    disabled={isLoading}
                    className="w-full mt-2 mb-6 bg-red-700 text-white font-normal hover:bg-red-800"
                >
                     {isLoading ? (
                       <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Cadastrando...
                      </>
                     ) : (
                       "Pronto!"
                     )}
                </SubmitButton>

                <div className="flex items-center gap-4 w-full mb-6">
                    <div className="flex-1 h-[0.2px] bg-zinc-300" />
                    <span className="text-zinc-300  font-inter text-sm font-light">ou</span>
                    <div className="flex-1 h-[0.2px] bg-zinc-300" />
                </div>

                <div className="flex justify-center gap-3 w-full">
                    <Button
                        onClick={handleGoogleLogin}
                        size="social"
                        variant="social"
                        className="flex-1 rounded-2xl border-none bg-zinc-200 hover:bg-zinc-300 transition-colors"
                    >
                     <FcGoogle className="size-6 shrink-0" />
                         Google
                    </Button>

                    <Button
                         onClick={handleGithubLogin}
                         size="social"
                         variant="social"
                         className="flex-1 rounded-2xl border-none bg-zinc-200 hover:bg-zinc-300 transition-colors"
                    >
                     <FaGithub className="size-6 shrink-0 text-gray-800" />
                         Github
                    </Button>
                </div>
            </div>
        </div>
    )
}
