window.CATALOGO = [
 {
  "id": "estiagem",
  "workspace": "Agro",
  "tipo": "Painel de TV",
  "titulo": "A estiagem que custou uma safra",
  "resumo": "Soja no RS safra a safra, de 2015 a 2025: produtividade de cada município × safra normal, chuva das estações do INMET e indenizações do seguro rural. Quatro estiagens em seis safras.",
  "paginas": [
   {
    "nome": "Painel",
    "arquivo": "relatorios/estiagem/p1.html"
   }
  ],
  "video": null,
  "tecnicas": [
   "HTML Content",
   "JavaScript",
   "DAX que gera JSON",
   "Timelapse"
  ],
  "fontes": [
   "IBGE · PAM",
   "INMET",
   "MAPA · Seguro rural (PSR)"
  ],
  "data": "out/2026",
  "miniatura": "miniaturas/estiagem.jpg"
 },
 {
  "id": "bebes",
  "workspace": "Saúde",
  "tipo": "Relatório",
  "titulo": "A cidade está preparada para os bebês?",
  "resumo": "Creche, nascimentos e a meta de 50% do Plano Nacional de Educação nos 497 municípios do RS: vagas para chegar à meta em 2027, necessidade × capacidade e o perfil de cada cidade.",
  "paginas": [
   {
    "nome": "O RS e as creches",
    "arquivo": "relatorios/bebes/p1.html"
   },
   {
    "nome": "Necessidade × capacidade",
    "arquivo": "relatorios/bebes/p2.html"
   },
   {
    "nome": "Perfil do município",
    "arquivo": "relatorios/bebes/p3.html"
   }
  ],
  "video": null,
  "tecnicas": [
   "Deneb (Vega)",
   "Drill-through",
   "Textos em DAX",
   "Filtro cruzado"
  ],
  "fontes": [
   "INEP · Censo Escolar",
   "SINASC e SIM",
   "SICONFI",
   "IBGE"
  ],
  "data": "out/2026",
  "miniatura": "miniaturas/bebes.jpg"
 },
 {
  "id": "nascimentos",
  "workspace": "Saúde",
  "tipo": "Relatório",
  "titulo": "Como nascem os gaúchos",
  "resumo": "Quase 350 mil nascimentos do SINASC (2023 a 2025): cesárea, prematuridade, pré-natal e idade da mãe, com mapa, enxame de municípios e o perfil de cada cidade.",
  "paginas": [
   {
    "nome": "Visão geral",
    "arquivo": "relatorios/nascimentos/p1.html"
   },
   {
    "nome": "A mãe",
    "arquivo": "relatorios/nascimentos/p2.html"
   },
   {
    "nome": "Município",
    "arquivo": "relatorios/nascimentos/p3.html"
   }
  ],
  "video": "videos/Como_nascem_os_gauchos.mp4",
  "tecnicas": [
   "Deneb (Vega e Vega-Lite)",
   "Drill-through",
   "Textos em DAX",
   "Realce cruzado"
  ],
  "fontes": [
   "DATASUS · SINASC",
   "IBGE"
  ],
  "data": "out/2026",
  "miniatura": "miniaturas/nascimentos.jpg"
 },
 {
  "id": "leitos",
  "workspace": "Saúde",
  "tipo": "Painel de TV",
  "titulo": "Leitos SUS × Internações",
  "resumo": "Onde o sistema aperta: leitos SUS (CNES) e dias de internação (SIH) por macrorregião de saúde, mês a mês, com a ocupação estimada.",
  "paginas": [
   {
    "nome": "Painel",
    "arquivo": "relatorios/leitos/p1.html"
   }
  ],
  "video": null,
  "tecnicas": [
   "HTML Content",
   "JavaScript",
   "DAX que gera JSON"
  ],
  "fontes": [
   "DATASUS · CNES",
   "DATASUS · SIH"
  ],
  "data": "out/2026",
  "miniatura": "miniaturas/leitos.jpg"
 },
 {
  "id": "dengue",
  "workspace": "Saúde",
  "tipo": "Painel de TV",
  "titulo": "Dengue no RS",
  "resumo": "O avanço da dengue semana a semana nos municípios gaúchos, com timelapse do mapa, curva epidêmica de 2024 a 2026 e detalhe por município.",
  "paginas": [
   {
    "nome": "Painel",
    "arquivo": "relatorios/dengue/p1.html"
   }
  ],
  "video": "videos/Dengue_RS.mp4",
  "tecnicas": [
   "HTML Content",
   "JavaScript",
   "Timelapse"
  ],
  "fontes": [
   "DATASUS · SINAN",
   "IBGE"
  ],
  "data": "out/2026",
  "miniatura": "miniaturas/dengue.jpg"
 },
 {
  "id": "panorama",
  "workspace": "Saúde",
  "tipo": "Painel de TV",
  "titulo": "Panorama das Internações SUS RS",
  "resumo": "Internações do SUS no RS por capítulo da CID: mapa de calor do ano, modo TV que percorre os motivos e controle de tempo por tela.",
  "paginas": [
   {
    "nome": "Painel",
    "arquivo": "relatorios/panorama/p1.html"
   }
  ],
  "video": "videos/Panorama_Internacoes_SUS.mp4",
  "tecnicas": [
   "HTML Content",
   "JavaScript",
   "Modo TV"
  ],
  "fontes": [
   "DATASUS · SIH"
  ],
  "data": "out/2026",
  "miniatura": "miniaturas/panorama.jpg"
 },
 {
  "id": "odonto",
  "workspace": "Exemplos",
  "tipo": "Painel de TV",
  "titulo": "Clínica odontológica",
  "resumo": "Painel de TV de uma clínica com dados fictícios: atendimentos, convênios e faturamento, pensado para rodar sozinho numa tela.",
  "paginas": [
   {
    "nome": "Painel",
    "arquivo": "relatorios/odonto/p1.html"
   }
  ],
  "video": "videos/Painel_TV_Odonto.mp4",
  "tecnicas": [
   "HTML Content",
   "DAX"
  ],
  "fontes": [
   "Dados fictícios"
  ],
  "data": "out/2026",
  "miniatura": "miniaturas/odonto.jpg"
 }
];
