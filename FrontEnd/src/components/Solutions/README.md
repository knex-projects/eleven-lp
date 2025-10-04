# Documentação da Seção de Soluções

## Visão Geral

A seção de soluções apresenta os serviços oferecidos pela Eleven Consultoria, organizados em cards responsivos que detalham tradução e consultoria internacional. A seção utiliza um sistema de grid flexível e tokens de cores consistentes para criar uma experiência visual harmoniosa.

## Estrutura de Componentes

-   **SolutionsSection**: Container principal da seção
-   **SolutionCard**: Componente individual para cada solução

## Sistema de Grid

### Container Principal (`SolutionsSection`)

```tsx
<section className="w-full min-h-screen flex flex-col items-center justify-center">
```

-   **Layout**: `flex flex-col` - Layout vertical centralizado
-   **Largura**: `w-full` - Ocupa toda a largura disponível
-   **Altura mínima**: `min-h-screen` - Altura mínima da viewport
-   **Alinhamento**: `items-center justify-center` - Centralização vertical e horizontal

### Content Wrapper

```tsx
<div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
```

-   **Largura máxima**: `max-w-7xl` (1280px)
-   **Padding horizontal responsivo**:
    -   Mobile: `px-4` (16px)
    -   Small: `px-6` (24px)
    -   Large: `px-8` (32px)

### Grid de Cards

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
```

-   **Colunas**:
    -   Mobile/Tablet: `grid-cols-1` - 1 coluna
    -   Large+: `grid-cols-2` - 2 colunas
-   **Gap responsivo**:
    -   Base: `gap-4` (16px)
    -   Small: `gap-6` (24px)
    -   Medium: `gap-8` (32px)

## Sistema de Espaçamentos

### Espaçamentos Externos (Margins/Padding)

#### Section Padding

```tsx
className = 'gap-6 sm:gap-8 md:gap-10 py-8 sm:py-12 md:py-16';
```

-   **Vertical (py)**:

    -   Base: `py-8` (32px)
    -   Small: `py-12` (48px)
    -   Medium: `py-16` (64px)

-   **Gap entre elementos**:
    -   Base: `gap-6` (24px)
    -   Small: `gap-8` (32px)
    -   Medium: `gap-10` (40px)

#### Card Internal Spacing

```tsx
className = 'rounded-lg p-4 sm:p-6 md:p-8';
```

-   **Padding interno**:
    -   Base: `p-4` (16px)
    -   Small: `p-6` (24px)
    -   Medium: `p-8` (32px)

### Espaçamentos Internos dos Cards

#### Header do Card

```tsx
className = 'mb-3 sm:mb-4';
```

-   **Margin bottom**:
    -   Base: `mb-3` (12px)
    -   Small: `mb-4` (16px)

#### Descrição

```tsx
className = 'mb-4 sm:mb-6';
```

-   **Margin bottom**:
    -   Base: `mb-4` (16px)
    -   Small: `mb-6` (24px)

#### Seção de Benefícios

```tsx
className = 'mb-2 sm:mb-3';
```

-   **Margin bottom**:
    -   Base: `mb-2` (8px)
    -   Small: `mb-3` (12px)

#### Lista de Benefícios

```tsx
className = 'space-y-1 sm:space-y-2';
```

-   **Espaçamento vertical**:
    -   Base: `space-y-1` (4px)
    -   Small: `space-y-2` (8px)

## Tokens de Cores

### Cores Primárias

#### Background da Seção

```css
bg-background
```

-   **Referência**: `oklch(95.514% 0.00011 271.152)` - Branco suave
-   **Uso**: Fundo principal da seção

#### Background dos Cards

```css
bg-[#0f143b]
```

-   **Hex**: `#0f143b` - Azul escuro
-   **Uso**: Fundo dos cards de solução

### Cores de Texto

#### Títulos Principais

```css
text-[#0F143B]
```

-   **Hex**: `#0F143B` - Azul escuro
-   **Uso**: Títulos de seção e subseções

#### Texto Secundário

```css
text-[#6C6C6C]
```

-   **Hex**: `#6C6C6C` - Cinza médio
-   **Uso**: Subtítulos e texto descritivo

#### Texto dos Cards

```css
text-white
```

-   **Uso**: Texto principal dentro dos cards

#### Ícones

```css
text-cyan-400
```

-   **Referência**: Cyan 400 do Tailwind
-   **Uso**: Ícones dos cards

### Cores de Borda

#### Divisor do Header

```css
border-[#cfcfcf]/25
```

-   **Base**: `#cfcfcf` (Cinza claro)
-   **Opacidade**: 25%
-   **Uso**: Linhas divisórias nos headers dos cards

## Breakpoints Responsivos

### Definições

-   **Base**: < 640px (Mobile)
-   **sm**: ≥ 640px (Small tablets)
-   **md**: ≥ 768px (Tablets)
-   **lg**: ≥ 1024px (Desktop pequeno)
-   **xl**: ≥ 1280px (Desktop grande)

### Aplicações por Breakpoint

#### Typography Scale

```tsx
// Título principal
text-2xl sm:text-3xl md:text-4xl lg:text-5xl

// Subtítulo
text-base sm:text-lg md:text-xl lg:text-2xl

// Título do card
text-lg sm:text-xl md:text-2xl lg:text-3xl

// Texto do card
text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
```

#### Sizing Scale

```tsx
// Altura mínima dos cards
min-h-[300px] sm:min-h-[350px] md:min-h-[400px]
```

## Variáveis CSS Customizadas

### Definidas no Sistema

```css
--color-background: var(--background);
--color-dark-background: var(--dark-background);
```

### Tokens de Cor Utilizados

-   `bg-background`: Fundo claro da seção
-   `text-[#0F143B]`: Azul escuro para títulos
-   `text-[#6C6C6C]`: Cinza para subtítulos
-   `bg-[#0f143b]`: Azul escuro para cards
-   `text-cyan-400`: Cyan para ícones

## Estrutura de Layout Responsivo

### Mobile (< 640px)

-   Layout em coluna única
-   Padding reduzido
-   Typography menor
-   Espaçamentos compactos

### Tablet (640px - 1023px)

-   Aumento gradual de espaçamentos
-   Typography intermediária
-   Ainda em coluna única

### Desktop (≥ 1024px)

-   Grid de 2 colunas para cards de consultoria
-   Typography em tamanho completo
-   Espaçamentos máximos
-   Layout otimizado para telas grandes
