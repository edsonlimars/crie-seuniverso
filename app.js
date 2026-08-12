const whatsapp = 'https://wa.me/5551981555601?text=' + encodeURIComponent('Olá, quero entender como a Crie SeUniverso pode me ajudar a organizar meu posicionamento e meu site.');
const routePaths = {
  '/': '/',
  '/sites-estrategicos': '/sites-estrategicos/',
  '/como-funciona': '/como-funciona/',
  '/sobre': '/sobre/',
  '/contato': '/contato/'
};
const method = [['01','Escutar','Começamos entendendo o momento do negócio, o trabalho e o que hoje pede clareza.'],['02','Reconhecer','Identificamos aquilo que já tem valor, consistência e pode sustentar a sua autoridade.'],['03','Destravar','Organizamos decisões e padrões que deixam a mensagem, a oferta ou a presença dispersas.'],['04','Traduzir','Transformamos o que foi reconhecido em posicionamento, linguagem e direção.'],['05','Construir','Damos forma à presença digital com estratégia, conteúdo e uma experiência clara.'],['06','Sustentar','Deixamos uma base que acompanha o crescimento e permite evoluir com coerência.']];
const methodIcons = {
  '01':'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 24h5m5-8h4m-4 16h4m7-16c4 3 4 13 0 16m7-22c8 7 8 21 0 28"/><path d="M24 12v24"/></svg>',
  '02':'<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="7"/><path d="M24 7v5m0 24v5M7 24h5m24 0h5M12 12l4 4m16 16 4 4m0-24-4 4M16 32l-4 4"/></svg>',
  '03':'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 16h15m0 0-5-5m5 5-5 5M39 32H24m0 0 5-5m-5 5 5 5"/><path d="M35 10v28"/></svg>',
  '04':'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 14h12v12H10zM26 22h12v12H26z"/><path d="M22 20h7m-3-4 4 4-4 4"/></svg>',
  '05':'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 34h28M14 28h20M18 22h12M22 16h4"/><path d="M10 38h28"/></svg>',
  '06':'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 34h28M14 28h20M18 22h12"/><path d="M24 8v12m-5-5 5 5 5-5"/></svg>'
};
const cta = (label='Solicitar uma prévia estratégica') => `<a class="button" data-wa href="${whatsapp}">${label}<span aria-hidden="true">↗</span></a>`;
const imageMeta = {
  'hero-novo.jpeg': [2048, 2048],
  'site-estrategico-novo.jpeg': [1792, 2400],
  'organizacao-do-caos-a-clareza-v1.png': [1122, 1402],
  'edson-novo.jpeg': [1792, 2400],
  'cta-novo.jpeg': [2752, 1536]
};
const image = (name, alt, className='section-image') => {
  const [width, height] = imageMeta[name];
  const isHero = className === 'hero-image';
  return `<figure class="section-image ${className}"><img src="/images/${name}" alt="${alt}" width="${width}" height="${height}" loading="${isHero ? 'eager' : 'lazy'}" decoding="async"${isHero ? ' fetchpriority="high"' : ''}></figure>`;
};
const intro = (eyebrow,title,text) => `<section class="page-intro"><div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="lead">${text}</p>${cta()}</div><div class="intro-mark" aria-hidden="true"><i></i><i></i><i></i></div></section>`;
const pages = {
  '/': () => `<section class="hero"><div class="hero-copy"><p class="eyebrow">ARQUITETURA DE POSICIONAMENTO E PRESENÇA DIGITAL</p><h1>O seu negócio já tem valor.<br><em>Falta uma presença</em> que faça isso ser percebido.</h1><p class="lead">A Crie SeUniverso organiza aquilo que já existe no seu trabalho — identidade, diferenciais, direção e modelo de negócio — em um posicionamento claro e um Site Estratégico que as pessoas certas conseguem encontrar, compreender e escolher.</p><div class="actions">${cta()}<a class="text-link" href="/como-funciona/">Entender como funciona <span>↓</span></a></div><p class="microcopy">Um primeiro olhar sobre o que o seu negócio já comunica — e sobre o que ainda pode ganhar forma.</p></div><aside class="hero-side">${image('hero-novo.jpeg','Edson Lima em ambiente profissional','hero-image')}<div class="hero-architecture"><p>clareza que se torna <strong>presença.</strong></p><div class="architecture"><b>quem conduz</b><span></span><b>modelo de negócio</b><span></span><b>posicionamento</b><span></span><b>presença digital</b></div></div></aside></section>
  <section class="section problem"><div class="number">01</div><div><p class="eyebrow">O QUE PODE ESTAR ACONTECENDO</p><h2>Quando o seu trabalho é maior do que a forma como ele aparece.</h2><p>Há profissionais competentes que continuam difíceis de encontrar, de compreender ou de escolher. A dependência do Instagram, uma mensagem genérica ou um site sem função estratégica criam distância entre a qualidade real do trabalho e a percepção do mercado.</p></div></section>
  <section class="statement"><p class="eyebrow">UM PONTO DE VISTA</p><h2>Posicionamento não começa na postagem.<br><em>Começa na clareza.</em></h2><p>Antes da estética ou da página, identidade, decisões, oferta e comunicação precisam conversar. É desse encontro que nasce uma presença consistente.</p></section>
  <section class="section method"><div class="number">02</div><div><p class="eyebrow">O MÉTODO</p><h2>Daquilo que está disperso ao que pode ser reconhecido.</h2><div class="method-grid">${method.map(x=>`<article><div class="method-card-top"><small>${x[0]}</small><span class="method-icon">${methodIcons[x[0]]}</span></div><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></div></section>
  <section class="offer"><div><p class="eyebrow">SITE ESTRATÉGICO</p><h2>Um site é a forma visível de uma decisão maior.</h2><p>Antes de desenhar páginas, organizamos o que o seu negócio precisa deixar claro: o que você faz, para quem faz, por que seu trabalho é diferente e qual caminho a pessoa deve seguir para conversar com você.</p>${cta('Conhecer o Site Estratégico')}</div>${image('site-estrategico-novo.jpeg','Edson Lima explicando conceitos e organizando um quadro de trabalho','offer-image')}<ul><li>Autoridade que se torna compreensível</li><li>Mensagem organizada para as pessoas certas</li><li>Caminho claro para iniciar uma conversa</li><li>Presença além do Instagram</li><li>Base preparada para evoluir</li></ul></section>
  <section class="section audience"><div class="number">03</div><div><p class="eyebrow">PARA QUEM É</p><h2>Para quem sabe fazer, mas ainda não conseguiu mostrar com a mesma clareza.</h2><p>Profissionais liberais, especialistas independentes, negócios locais e pequenos escritórios que têm competência real — e desejam uma presença digital à altura dela.</p></div></section>
  ${finalCta()}`,
  '/sites-estrategicos': () => intro('SITE ESTRATÉGICO','Uma presença que torna seu valor mais fácil de reconhecer.','Um site é uma parte visível de uma estrutura maior: clareza sobre quem você é, como trabalha, para quem e por que isso importa.') + `<section class="section organizing-section"><div class="organizing-copy"><p class="eyebrow">O QUE ELE ORGANIZA</p><h2>Mais do que páginas, um caminho de entendimento.</h2><p>O Site Estratégico traduz trajetória, diferenciais e objetivos em uma experiência profissional. Ele organiza sua mensagem, dá contexto à sua autoridade e cria um próximo passo simples para quem chega.</p><ul class="checklist"><li>Diagnóstico e direção estratégica</li><li>Estrutura de mensagens e conteúdo</li><li>Design editorial e responsivo</li><li>SEO técnico de base</li><li>Contato direto por WhatsApp</li></ul></div>${image('organizacao-do-caos-a-clareza-v1.png','Elementos dispersos conectados até uma presença digital organizada','organization-diagram')}</section>${finalCta()}`,
  '/como-funciona': () => intro('COMO FUNCIONA','Um processo para dar forma ao que já existe.','A jornada respeita o momento do negócio e transforma clareza em decisões práticas, linguagem e presença.') + `<section class="method-full">${method.map(x=>`<article><div class="method-card-top"><small>${x[0]}</small><span class="method-icon">${methodIcons[x[0]]}</span></div><h2>${x[1]}</h2><p>${x[2]}</p></article>`).join('')}</section>${finalCta()}`,
  '/sobre': () => intro('SOBRE O ESTÚDIO','Estratégia que começa pela pessoa e chega à presença.','A Crie SeUniverso é um estúdio de arquitetura de posicionamento e presença digital.') + `<section class="section about-section"><div class="about-photo-panel">${image('edson-novo.jpeg','Edson Lima em ambiente de trabalho','portrait-image')}</div><div class="about-copy"><p class="eyebrow">EDSON LIMA</p><h2>Experiência para olhar o negócio com mais contexto.</h2><p>Nosso estúdio reúne a experiência de mais de 20 anos do Edson em negócios, comportamento humano, terapia, marketing e inteligência artificial. Esse repertório não serve para criar uma identidade artificial: serve para reconhecer, organizar e expressar a identidade que já está no trabalho e no negócio.</p><p>Com profundidade, mas sem promessas que ultrapassam o campo da estratégia e da presença digital.</p></div></section>${finalCta()}`,
  '/contato': () => intro('CONTATO','Vamos olhar para o que o seu negócio já tem e ainda não está conseguindo mostrar?','Uma conversa inicial é o lugar para entender seu momento e avaliar se o Site Estratégico faz sentido agora.') + `<section class="contact-action">${cta('Conversar pelo WhatsApp')}<p>Sem formulário longo. Comece com uma mensagem direta.</p></section>`
};
function finalCta(){return `<section class="final-cta">${image('cta-novo.jpeg','Edson Lima em seu estúdio, em frente à mesa de trabalho','cta-image')}<div class="cta-content"><p class="eyebrow">PRÓXIMO PASSO</p><h2>Vamos olhar para o que o seu negócio já tem e ainda não está conseguindo mostrar?</h2>${cta('Conversar pelo WhatsApp')}</div></section>`}
const routeTitles = {
  '/': 'Crie SeUniverso | Posicionamento e Site Estratégico',
  '/sites-estrategicos': 'Site Estratégico | Crie SeUniverso',
  '/como-funciona': 'Como funciona | Crie SeUniverso',
  '/sobre': 'Sobre a Crie SeUniverso | Edson Lima',
  '/contato': 'Contato — Crie SeUniverso'
};
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const homeLink = document.querySelector('.header-brand');

function closeMenu(){
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
  menuToggle.setAttribute('aria-label','Abrir menu de navegação');
}

function render(){
  const legacyRoute = location.hash.slice(1);
  if (legacyRoute && routePaths[legacyRoute]) {
    location.replace(routePaths[legacyRoute]);
    return;
  }
  const requestedRoute = location.pathname.replace(/\/$/, '') || '/';
  const route = pages[requestedRoute] ? requestedRoute : '/';
  if (requestedRoute !== route) history.replaceState(null, '', '/');
  main.innerHTML = pages[route]();
  document.querySelectorAll('[data-wa]').forEach(a=>a.href=whatsapp);
  document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===routePaths[route]));
  document.title = routeTitles[route];
  closeMenu();
  window.scrollTo(0,0);
  requestAnimationFrame(()=>main.focus({preventScroll:true}));
}

menuToggle.addEventListener('click',e=>{
  const expanded = e.currentTarget.getAttribute('aria-expanded') === 'true';
  e.currentTarget.setAttribute('aria-expanded',String(!expanded));
  e.currentTarget.setAttribute('aria-label',expanded ? 'Abrir menu de navegação' : 'Fechar menu de navegação');
  nav.classList.toggle('open',!expanded);
});
homeLink.addEventListener('click',e=>{
  e.preventDefault();
  closeMenu();
  if(location.pathname !== '/') location.assign('/');
  else render();
});
nav.addEventListener('click',closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
render();
