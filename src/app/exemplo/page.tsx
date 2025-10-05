import Card from '@/components/Card';

export default function ExemploPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Página de Exemplo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Demonstração de componentes reutilizáveis
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Card de Exemplo 1"
            description="Este é um exemplo de card com informações básicas."
            imageUrl="/next.svg"
            tags={["React", "Next.js", "TypeScript"]}
          />
          
          <Card
            title="Card de Exemplo 2"
            description="Outro exemplo de card com diferentes configurações."
            imageUrl="/vercel.svg"
            tags={["Frontend", "UI/UX", "Design"]}
          />
          
          <Card
            title="Card de Exemplo 3"
            description="Mais um exemplo para demonstrar a flexibilidade do componente."
            imageUrl="/window.svg"
            tags={["Componentes", "Reutilização", "Modular"]}
          />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Seção de Informações
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Esta página demonstra como criar componentes reutilizáveis em Next.js com TypeScript.
            O componente Card pode ser usado em diferentes contextos e aceita várias propriedades
            para personalização.
          </p>
        </div>
      </div>
    </div>
  );
}
