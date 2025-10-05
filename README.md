# Frontend CodaComigo

Este é um projeto [Next.js](https://nextjs.org) com TypeScript, Tailwind CSS e Vitest para testes unitários.

## 🚀 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- Yarn (recomendado) ou npm

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd frontend-codacomigo
```

2. Instale as dependências:
```bash
yarn install
# ou
npm install
```

## 🛠️ Comandos Disponíveis

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
yarn dev

# Build para produção
yarn build

# Iniciar servidor de produção
yarn start

# Verificação de tipos TypeScript
yarn typecheck

# Linting do código
yarn lint
```

### Testes
```bash
# Executar testes unitários com cobertura
yarn test:unit

# Executar testes em modo watch (desenvolvimento)
yarn vitest

# Executar testes específicos
yarn vitest Card.test.tsx
```

## 🧪 Estratégia de Testes

### Cobertura de Testes
Este projeto visa **máxima cobertura de testes** em todos os diretórios, **exceto** `/app`:

#### ✅ **Diretórios com Testes Obrigatórios:**
- `src/components/` - Componentes React
- `src/hooks/` - Custom hooks
- `src/services/` - Serviços e APIs
- `src/stores/` - Gerenciamento de estado

#### ❌ **Diretórios Excluídos:**
- `src/app/` - Páginas do Next.js (App Router)

### Estrutura de Testes
```
tests/
├── components/          # Testes de componentes
├── hooks/              # Testes de custom hooks  
├── services/           # Testes de serviços
├── stores/             # Testes de stores
└── setup.ts            # Configuração global dos testes
```

### Configuração de Cobertura
- **Mínimo**: 80% de cobertura em branches, functions, lines e statements
- **Relatórios**: Text, JSON e HTML gerados em `./coverage/`
- **Thresholds**: Configurados no `vitest.config.ts`

### Exemplos de Testes

#### Componente React:
```typescript
// tests/components/MeuComponente.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import MeuComponente from '@/components/MeuComponente';

describe('MeuComponente', () => {
  it('should render correctly', () => {
    render(<MeuComponente title="Teste" />);
    expect(screen.getByText('Teste')).toBeInTheDocument();
  });

  it('should handle user interactions', async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    
    render(<MeuComponente onClick={mockOnClick} />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
```

#### Custom Hook:
```typescript
// tests/hooks/useMeuHook.test.tsx
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useMeuHook } from '@/hooks/useMeuHook';

describe('useMeuHook', () => {
  it('should return initial state', () => {
    const { result } = renderHook(() => useMeuHook());
    expect(result.current.value).toBe(0);
  });

  it('should update state correctly', () => {
    const { result } = renderHook(() => useMeuHook());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.value).toBe(1);
  });
});
```

## 🧩 Componentização

### Princípios de Componentização

#### ✅ **Componentize SEMPRE:**
- **Elementos reutilizáveis**: Botões, inputs, cards, modais
- **Seções de UI**: Headers, footers, sidebars, layouts
- **Lógica de apresentação**: Listas, tabelas, formulários
- **Estados visuais**: Loading, error, empty states

#### 📁 **Estrutura de Componentes:**
```
src/components/
├── ui/                 # Componentes base (Button, Input, etc.)
├── layout/             # Componentes de layout (Header, Footer)
├── forms/              # Componentes de formulário
├── feedback/           # Loading, Error, Success states
└── feature/            # Componentes específicos de features
```

#### 🎯 **Regras de Componentização:**

1. **Um componente = Uma responsabilidade**
2. **Props tipadas com TypeScript**
3. **Testes unitários obrigatórios**
4. **Documentação clara via JSDoc**
5. **Estados controlados quando possível**

### Exemplo de Componente Bem Estruturado:

```typescript
// src/components/ui/Card.tsx
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  onClick?: () => void;
  children?: ReactNode;
}

/**
 * Card component for displaying content with title, description and tags
 * @param title - The main title of the card
 * @param description - Brief description of the content
 * @param imageUrl - URL of the card image
 * @param tags - Array of tag strings
 * @param onClick - Optional click handler
 * @param children - Optional additional content
 */
export default function Card({ 
  title, 
  description, 
  imageUrl, 
  tags, 
  onClick,
  children 
}: CardProps) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Card content */}
      {children}
    </div>
  );
}
```

## 🏗️ Arquitetura do Projeto

```
src/
├── app/                # Next.js App Router (páginas)
├── components/         # Componentes reutilizáveis
│   ├── ui/            # Componentes base
│   ├── layout/        # Componentes de layout
│   └── feature/       # Componentes específicos
├── hooks/             # Custom hooks
├── services/          # Serviços e APIs
├── stores/            # Gerenciamento de estado
├── styles/            # Estilos globais
└── types/             # Definições de tipos TypeScript

tests/                 # Testes unitários
├── components/        # Testes de componentes
├── hooks/            # Testes de hooks
├── services/         # Testes de serviços
├── stores/           # Testes de stores
└── setup.ts          # Configuração dos testes
```

## 🚀 Deploy

### Build de Produção
```bash
yarn build
yarn start
```

### Variáveis de Ambiente
Crie um arquivo `.env.local` com as variáveis necessárias:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📚 Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Vitest** - Testes unitários
- **Testing Library** - Utilitários de teste
- **ESLint** - Linting de código

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Checklist para PRs:
- [ ] Código testado e funcionando
- [ ] Testes unitários com boa cobertura
- [ ] Componentes bem estruturados e reutilizáveis
- [ ] TypeScript sem erros
- [ ] ESLint sem warnings
- [ ] Documentação atualizada
