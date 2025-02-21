Contexto Técnico:

Framework: Next.js com TypeScript.
Estilização: Tailwind CSS com temas personalizados e suporte a modo escuro/claro.
Componentes: Utiliza componentes reutilizáveis com class-variance-authority para variantes (ex: botões com diferentes estilos).
Providers: Contextos como ThemeProvider para gerenciamento de temas e SidebarProvider para estados compartilhados.
Design System:
Cores:
Background: background-primary, background-card, background-secondary.
Texto: text-primary, text-secondary.
Destaque: accent-primary, accent-secondary, accent-tertiary.
Componentes UI: Botões, modais, inputs, tabelas, etc., com variantes (default, primary, destructive, outline, etc.).
Tipografia: Fontes definidas no Tailwind CSS com classes como text-sm, font-medium, etc.
Transições: Animações suaves com transition-colors e focus-visible para acessibilidade.
Diretrizes:

Consistência Visual: Sempre utilize os componentes e estilos definidos no design system. Evite criar estilos personalizados fora do Tailwind CSS.
Temas: Respeite o modo escuro/claro, utilizando as variáveis de tema definidas em theme.ts.
Componentes Reutilizáveis: Utilize os componentes UI existentes (ex: Button, Modal, Input) e suas variantes antes de criar novos.
TypeScript: Mantenha a tipagem forte e utilize os tipos definidos em src/types/.
Providers: Utilize os contextos existentes (ex: ThemeProvider, SidebarProvider) para gerenciar estados globais.
Acessibilidade: Garanta que todos os componentes sejam acessíveis, com foco visível e atributos ARIA quando necessário.
Exemplo de Uso:

tsx
CopyInsert
import { Button } from '@/components/ui/Button'

export default function ExamplePage() {
  return (
    <div className="bg-background-primary text-text-primary p-4">
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Clique aqui
      </Button>
    </div>
  )
}
Objetivo: Garantir que todas as implementações estejam alinhadas com o design system, sejam consistentes visualmente e sigam as melhores práticas de desenvolvimento.

Design Specifications

Responsive design that works on all screen sizes
Smooth transitions and hover states
Clean typography with clear hierarchy
Theme-aware components
Consistent spacing and alignment
Accessible color contrasts in both themes

Component Requirements

Theme-aware card components
Charts that respond to theme changes
Theme toggle button in header
Themed form elements
Consistent shadows and elevations

Data Requirements

Real-time or simulated updating of metrics
Ability to filter data by date ranges
Interactive charts with hover states
Data should be formatted properly (currency, percentages, large numbers)

Theme Implementation Requirements

Theme Provider setup
Theme toggle functionality
Theme persistence
System theme detection
Smooth theme transitions
Theme-aware component library

Please provide:

Initial project setup instructions with theme support
Component structure and organization
Theme implementation strategy
Example of a theme-aware component
Data fetching strategy
State management approach
Best practices for performance optimization

Additional Considerations:

How to handle theme-specific assets
Ensuring consistent typography across themes
Managing chart colors in different themes
Handling theme transitions smoothly
Ensuring accessibility in both themes

Any potential gotchas or important considerations for building this type of themed dashboard should also be highlighted.
