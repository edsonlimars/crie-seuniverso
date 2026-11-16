# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Profissionais liberais, especialistas independentes, negócios locais e pequenos escritórios que têm competência real, mas ainda não conseguem comunicar seu valor com a mesma clareza na presença digital.

## Product Purpose

O site institucional-comercial da Crie SeUniverso apresenta e vende o Site Estratégico: um serviço que organiza identidade, diferenciais, direção e modelo de negócio em posicionamento claro e presença digital profissional. O principal sucesso é iniciar conversas qualificadas pelo WhatsApp.

## Positioning

Crie SeUniverso é um estúdio de arquitetura de posicionamento e presença digital. Não vende “site barato” nem se apresenta como agência genérica: começa pela pessoa que conduz o negócio, passa pelo modelo de negócio e pelo posicionamento, e transforma isso em um Site Estratégico.

## Operating Context

O visitante conhece o estúdio pela home e navega por Sites Estratégicos, Como funciona e O estúdio. A ação principal é iniciar uma conversa pelo WhatsApp no número +55 51 98155-5601. O site é hospedado no Cloudflare Pages e publicado a partir do repositório GitHub do projeto.

## Capabilities and Constraints

- Site estático Vite, com páginas reais em `/`, `/sites-estrategicos/`, `/como-funciona/` e `/sobre/`.
- O build pré-renderiza o conteúdo principal dessas rotas no HTML inicial para buscadores e agentes que não executam JavaScript (`prerender.mjs`).
- Preservar a estrutura funcional, o conteúdo estratégico aprovado, a navegação e os CTAs de WhatsApp.
- SEO técnico já inclui URLs indexáveis, metadados por página, sitemap, robots e dados estruturados de organização.
- Respostas 404 reais para caminhos inexistentes ainda são uma pendência técnica.
- Não prometer reprogramação cerebral, resultados clínicos ou desqualificar psicologia.
- Não introduzir símbolos de cérebro, circuitos, galáxias, ícones esotéricos ou imagens genéricas de banco.

## Brand Commitments

- Linguagem clara, humana, firme, profissional e reflexiva.
- Identidade aprovada: paleta em azul profundo, verde e papel; títulos em DM Serif Display; textos funcionais em DM Sans.
- Usar o lockup vertical oficial do logo sem alterar sua tipografia ou composição.
- A estética deve comunicar clareza, contexto, direção e presença — não uma agência tecnológica ou um template genérico.

## Evidence on Hand

- PRD oficial: Google Docs “PRD — Site Crie SeUniverso V1”.
- Código e conteúdo atual: `index.html`, `app.js` e `styles.css`. As regras de refinamento visual foram consolidadas em `styles.css` para evitar duas fontes de estilo concorrentes.
- Imagens autorais aprovadas em `public/images/`; recortes e trocas de imagens permanecem uma etapa futura.
- Casos/projetos públicos ainda não têm autorização ou material final e não devem ser inventados.

## Product Principles

1. Clareza antes de estética.
2. A presença digital deve tornar valor e diferenciais fáceis de encontrar, compreender e escolher.
3. O site conduz para uma conversa simples, não para fricção ou formulários longos.
4. Profundidade estratégica com linguagem compreensível e sem promessas excessivas.
5. Prioridade real para leitura e navegação em mobile.

## Accessibility & Inclusion

Manter contraste legível, foco visível, navegação por teclado, textos alternativos úteis e áreas de toque adequadas em dispositivos móveis.

## Documentation Continuity

Sempre que um documento padrão Google Docs for criado ou atualizado, criar ou atualizar na sequência um espelho Markdown com o mesmo título-base e na mesma pasta. A regra completa está em `00_CENTRAL_IA/BACKUP_CENTRAL_IA/16_REGRA_DE_DOCUMENTACAO_E_ESPELHAMENTO.md`.
