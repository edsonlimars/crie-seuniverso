# Dossiê de Continuidade e Auditoria Crie SeUniverso

Documento de continuidade estratégica, auditoria e operação

**Atualizado em 16 de novembro de 2026.** Esta versão consolida o histórico estratégico disponível e substitui, como referência vigente, os dossiês de agosto de 2026. Os arquivos anteriores permanecem preservados como histórico.

## 1. Escopo e estado atual

Este documento é a referência de continuidade do projeto Crie SeUniverso. Ele consolida as decisões estratégicas aprovadas no histórico de trabalho, o estado atual do site, o resultado da auditoria de descoberta por IA e as próximas pendências.

O site é um projeto institucional-comercial para um estúdio de arquitetura de posicionamento. A oferta central combina Mapa de Posicionamento e Site Estratégico, com foco em profissionais liberais que têm experiência real, mas ainda não são reconhecidos por uma proposta específica.

A versão atual está publicada a partir do repositório GitHub edsonlimars/crie-seuniverso. O item técnico de pré-renderização do conteúdo foi enviado ao branch main no commit aa483d3. A validação final no domínio publicado e as respostas 404 continuam pendentes.

A organização local foi ajustada: o repositório do site fica em `03_PROJETOS_ATIVOS/12_CRIE_SEUNIVERSO/07_SITE_E_LANDING_PAGES/SITE_CRIE_SEUNIVERSO`. No Google Drive, a pasta `SITE_CRIE_SEUNIVERSO` foi movida para dentro de `12_CRIE_SEUNIVERSO/07_SITE_E_LANDING_PAGES`, preservando o mesmo ID e os mesmos arquivos. O envio das alterações atuais ao GitHub continua pendente.


## 2. Decisões estratégicas vigentes

Categoria: Clareza de posicionamento para profissionais liberais que precisam ser compreendidos.

Promessa: O seu negócio já tem valor. Falta deixar claro por que as pessoas certas deveriam escolher você.

Problema: o profissional pode saber muito sobre sua profissão e ainda não ser reconhecido por uma proposta específica.

Método autoral: o Mapa de Posicionamento organiza o que o negócio faz, para quem faz, por que vale a pena escolher e como isso precisa ser explicado.

Oferta de entrada: o Mapa de Posicionamento pode ser contratado separadamente para organizar foco, nicho, oferta, pacotes, linguagem e materiais.

Materialização: o Site Estratégico é o endereço próprio do negócio na internet. Redes sociais são estradas que conduzem até essa casa, não substitutos dela.

Público: a comunicação fala com profissionais liberais. Terapias integrativas são o público de ataque inicial e uma fonte de profundidade, não um limite de categoria.

Autoridade: mais de 25 anos de experiência em negócios, gestão, vendas, atendimento e equipes, somados a cinco anos de atuação direta em terapias integrativas.

Diferencial operacional: o trabalho pode incluir organização de pacotes, fichas, anamneses, relatórios, propostas e outros materiais de atendimento, com orientação jurídica em parceria especializada quando houver relação com LGPD.

CTA canônico: Conversar sobre meu posicionamento. A primeira conversa observa o que já existe, o que está disperso e se o Mapa de Posicionamento faz sentido para o momento.


## 3. Estrutura pública do método

- A comunicação pública prioriza três movimentos, mais fáceis de compreender do que os seis passos detalhados anteriores:
- Encontrar o foco: pesquisar o nicho, compreender o cliente de melhor ajuste, identificar a dor prioritária e escolher a porta de entrada mais forte.
- Organizar a oferta: transformar habilidades, serviços e técnicas em soluções, pacotes, explicações e formas de entrega coerentes.
- Dar forma à escolha: construir a mensagem e o Site Estratégico para que a pessoa certa encontre, compreenda, confie e avance para uma conversa.
Escutar, reconhecer, destravar, traduzir, construir e sustentar permanecem como bastidores e detalhamento do processo, sem exigir memorização do visitante.


## 4. Histórico de implementação do site

A identidade visual aprovada foi preservada: azul profundo, verde, papel, DM Serif Display nos títulos e DM Sans nos textos funcionais.

A home foi atualizada para a promessa de clareza, escolha, foco e tangibilização. A linguagem de presença digital deixou de ser o centro da promessa.

A home e as páginas internas foram estruturadas em torno de problema, reenquadramento, Mapa de Posicionamento, entregáveis, maturidade, Site Estratégico e conversa inicial.

Foi corrigida a arquitetura visual da home, incluindo o painel lateral de repertório à escolha e ajustes de imagem e CTA que já estavam aprovados no histórico.

O item 1 da auditoria de IA foi implementado: o build agora pré-renderiza o conteúdo principal de /, /sites-estrategicos/, /como-funciona/ e /sobre/ no HTML inicial, antes da execução do JavaScript.

O item 1 foi enviado ao GitHub no commit aa483d3. O build utiliza npm run build e gera a saída em dist.


## 5. Auditoria de descoberta por IA

A auditoria encontrou 100% de descoberta local, 100% de confiabilidade e 75% de continuidade de links. O agente alcançou a home e as três páginas principais.

O principal problema era o conteúdo carregado dinamicamente: títulos e metadados eram encontrados, mas parte do conteúdo real não aparecia no HTML bruto para agentes que não executam JavaScript.

A auditoria também apontou ausência de informações comerciais estruturadas, como entregáveis, duração, processo e investimento. Preços podem continuar sendo tratados em conversa, mas entregas e critérios de contratação precisam ser mais descobríveis.

Foi observada baixa autoridade externa do nome da marca: buscas pelo domínio retornaram resultados não relacionados. Isso exige consistência de marca, perfis oficiais, links externos e dados estruturados, sem alterar o nome Crie SeUniverso.

As recomendações de conteúdo sem JavaScript e 404 reais são técnicas prioritárias. Negociação de Markdown e instruções para agentes são complementares e devem vir depois do conteúdo estrutural.


## 6. Pendências atuais

Validar no domínio publicado se o HTML pré-renderizado está sendo entregue sem dependência de JavaScript.

Implementar e validar respostas 404 reais para caminhos inexistentes, sem quebrar as rotas válidas.

Estruturar melhor serviços, entregáveis, duração e forma de contratação, sem inventar preços ou promessas.

Revisar e ampliar JSON-LD e Schema.org para Organização, Serviços, Pessoa responsável, contato e perfis oficiais.

Decidir se existe uma localidade pública relevante antes de considerar tipos como LocalBusiness.

Adicionar avaliações estruturadas somente depois de organizar depoimentos autênticos, autorizações e elegibilidade.

Avaliar um llms.txt ou página de orientação para agentes apenas depois da consolidação da arquitetura de conteúdo.

Organizar três depoimentos em vídeo 9:16, com legendas, identificação autorizada e relatos específicos.

Os arquivos desktop.ini repetidos foram removidos do projeto e passaram a ser ignorados pelo Git. A camada visual também foi consolidada em styles.css, preservando a ordem de aplicação das regras e a identidade visual aprovada.


## 7. Regra permanente de documentação

Sempre que um documento padrão Google Docs for criado ou atualizado, deve ser criado ou atualizado, na sequência, um espelho Markdown com o mesmo título-base e na mesma pasta do documento original.

O espelho deve preservar títulos, seções, decisões, listas, tabelas e links relevantes. Ele serve como backup pesquisável e não substitui o documento padrão.

Documentos antigos devem permanecer como histórico quando representarem uma versão aprovada anterior. A versão vigente deve ser identificada em um documento de continuidade ou índice documental.

Antes de editar um documento existente, deve-se verificar seu conteúdo completo, identificar a versão vigente e atualizar o espelho correspondente na mesma rodada.


## 8. Instrução para continuidade

Considerar este dossiê e a regra de espelhamento como contexto vigente para o Crie SeUniverso.

Não recolocar presença digital como promessa principal. Usar reconhecimento, escolha, entendimento, foco, oferta, materiais, maturidade e canal próprio.

Não restringir a marca a terapeutas. Usar terapias integrativas como prova de profundidade e experiência direta.

Não prometer faturamento, resultados clínicos, conformidade automática com LGPD ou transformação inevitável.

Ao alterar o site, preservar a identidade visual, o conteúdo aprovado, o CTA de baixo atrito e a prioridade real para leitura em mobile.
