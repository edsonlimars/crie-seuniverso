# Pendências — Crie SeUniverso

## SEO semântico, dados estruturados e descoberta por IA

**Status:** pendente — próxima etapa de SEO técnico e semântico  
**Prioridade sugerida:** alta, depois da validação do pré-render e da correção dos 404  
**Não implementar nesta etapa.**

### Estado da auditoria técnica relacionada

- Conteúdo sem JavaScript: implementado no build e enviado ao GitHub no commit `aa483d3`; falta confirmar a entrega no domínio publicado.
- 404 reais para rotas inexistentes: ainda pendente.
- Dados estruturados e descoberta por IA: pendente e registrado neste documento.

### Hipótese a investigar

O site pode ser compreendido com mais precisão por buscadores e agentes quando a identidade da empresa, os serviços, a pessoa responsável, os canais de contato e as relações entre essas informações são descritos com HTML semântico e JSON-LD baseado em Schema.org.

Isso tende a melhorar a compreensão da entidade e a elegibilidade para recursos de busca. Não é uma garantia de posicionamento, mapas ou respostas de IA.

### O que avaliar

- **Entidade principal:** confirmar se `Organization` é suficiente ou se algum tipo mais específico representa melhor o estúdio, sem inventar endereço ou categoria local.
- **Serviços:** descrever `Mapa de Posicionamento` e `Site Estratégico` como serviços reais, ligados à organização e às páginas correspondentes.
- **Responsável:** relacionar Edson Lima como fundador/condução do estúdio, com informações verdadeiras e consistentes.
- **Canais oficiais:** adicionar `sameAs` apenas para perfis oficiais ativos (LinkedIn, Instagram, YouTube e outros).
- **Contato:** manter WhatsApp e demais dados de contato consistentes em todo o site.
- **Avaliações:** só usar marcação de avaliações ou nota agregada se houver depoimentos autênticos, autorização e elegibilidade conforme as diretrizes do Google. Não criar avaliação estrutural autoatribuída.
- **Localização:** decidir se existe uma localidade pública relevante. Se não existir, não utilizar `LocalBusiness` apenas para tentar aparecer em mapas.
- **Conteúdo visível:** garantir que cada informação marcada no JSON-LD também esteja disponível no conteúdo da página.
- **Descoberta por IA:** avaliar um `llms.txt` ou página de orientação para agentes depois que a arquitetura de conteúdo estiver consolidada. Isso é complementar, não substitui HTML acessível.

### Dependências antes da implementação

1. Lista definitiva de serviços e respectivos entregáveis.
2. Duração ou formato de cada oferta, se decidirmos tornar isso público.
3. URLs oficiais das redes e perfis profissionais.
4. Definição sobre endereço/localidade pública.
5. Depoimentos autorizados e organizados.

### Validação planejada

- Schema Markup Validator.
- Google Rich Results Test, quando houver um tipo elegível.
- Google Search Console após publicação.
- Nova auditoria de descoberta por IA para comparar entendimento antes/depois.
