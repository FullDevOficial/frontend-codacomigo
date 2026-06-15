// validação form react hook form - gerencia
// zod validation schema - validação de dados
// flex
// as coisas são caixas!! pensar em caixas

import { z } from 'zod';

export const formLoginSchema = z.object({
  email: z.string({ message: 'O e-mail é obrigatório' }).email({ message: 'E-mail inválido' }),
  password: z
    .string({ message: 'A senha é obrigatória' })
    .min(1, { message: 'A senha é obrigatória' })
    .min(6, { message: 'A senha deve conter no mínimo 6 caracteres' })
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/, {
      message: 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial',
    }),
});

export type FormLoginSchema = z.infer<typeof formLoginSchema>;
