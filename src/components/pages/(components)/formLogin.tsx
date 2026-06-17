import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { Input } from '@/components/ds/input';
import { SubmitButton } from '@/components/ds/submit-button';
import { Text } from '@/components/ds/text';
import { SeparatorLogin } from '@/components/pages/(components)/separatorLogin';

import { FormLoginSchema, formLoginSchema } from './formLoginSchema';

export function FormLogin() {
  const { control, handleSubmit } = useForm<FormLoginSchema>({
    resolver: zodResolver(formLoginSchema),
    mode: 'onSubmit',
  });

  function onSubmit(data: FormLoginSchema) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field, fieldState }) => (
            <div>
              <Text size="p2" weight="bold" tone="black">
                E-mail
              </Text>
              <Input placeholder="Digite seu e-mail" value={field.value} onChange={field.onChange} />
              {fieldState.error?.message && (
                <Text size="small" tone="colored">
                  {fieldState.error.message}
                </Text>
              )}
            </div>
          )}
        />
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field, fieldState }) => (
            <div className="mt-4 mb-4">
              <Text size="p2" weight="bold" tone="black">
                Senha
              </Text>
              <Input placeholder="Digite sua senha" type="password" value={field.value} onChange={field.onChange} />
              {fieldState.error?.message && (
                <Text size="small" tone="colored">
                  {fieldState.error.message}
                </Text>
              )}
            </div>
          )}
        />
        <a href="/forgot-password" className="w-fit">
          <Text as="span" tone="gray" size="p2" weight="medium">
            Esqueceu a senha?
          </Text>
        </a>
        <SubmitButton type="submit" className="mt-6 mb-4 w-full bg-orange-700 hover:bg-orange-800">
          <Text weight="regular">Entrar</Text>
        </SubmitButton>
      </form>
      <SeparatorLogin />
    </>
  );
}
