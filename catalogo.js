window.CATALOGO = [
 {
  "id": "estiagem",
  "workspace": "Agro",
  "tipo": "Painel de TV",
  "titulo": "A chuva que decide a safra",
  "resumo": "Soja no RS safra a safra, de 2015 a 2025: produtividade de cada município × safra normal, chuva das estações do INMET e indenizações do seguro rural. Quatro estiagens em seis safras.",
  "paginas": [
   {
    "nome": "Painel",
    "arquivo": "relatorios/estiagem/p1.html"
   }
  ],
  "video": "videos/Estiagem_RS.mp4",
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
  "miniatura": "miniaturas/estiagem.jpg",
  "explica": [
   "Mostra quanto as secas recentes custaram para a soja gaúcha. Cada município é pintado pela produtividade da safra comparada à sua safra normal (a média de 2015 a 2019): vermelho é quebra, verde é colheita acima do normal.",
   "As bolinhas são as estações do INMET, com a chuva de novembro a março (o período que decide a soja). Os cartões trazem a produção do estado, a produtividade, a perda estimada em reais, a chuva em relação ao normal e as indenizações do seguro rural por seca."
  ],
  "uso": [
   "O painel troca de safra sozinho, de 2015 a 2025, como numa TV.",
   "Clique numa safra na linha do tempo para fixar o ano; o botão ❚❚ pausa.",
   "Em \"tempo por safra\" você escolhe de 3 segundos a 1 minuto por tela."
  ],
  "destaque": "Quatro estiagens em seis safras (2020, 2022, 2023 e 2025) custaram cerca de R$ 76 bilhões só na soja. Em 2022 a produção caiu 54%, e em 2024 o problema foi o contrário: chuva demais no sul."
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
  "video": "videos/A_cidade_esta_preparada_para_os_bebes.mp4",
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
  "miniatura": "miniaturas/bebes.jpg",
  "explica": [
   "Cruza a demanda por creche com o que cada município oferece hoje. As crianças de 0 a 3 anos vêm dos nascimentos do SINASC, as matrículas do Censo Escolar e a meta do Plano Nacional de Educação: 50% das crianças nessa idade em creche.",
   "\"Vagas para chegar à meta\" é quanto falta para atingir esses 50% em 2027, com os nascimentos projetados. Não é fila de espera, que não existe em base pública.",
   "A segunda página compara necessidade (natalidade, mães adolescentes, pré-natal e mortalidade infantil) com capacidade (gasto em saúde, educação infantil e cobertura de creche), sempre entre municípios do mesmo porte."
  ],
  "uso": [
   "Escolha a macrorregião de saúde para ver só a sua região; o mapa amplia sozinho.",
   "Clique num município do mapa: cartões, ranking e nascimentos passam a mostrar só ele.",
   "Na página 2, clique num ponto (um município) ou no fundo de um quadrante (todos daquele grupo).",
   "Na página 3, o perfil completo de qualquer município, com link para o relatório dos nascimentos."
  ],
  "destaque": "O RS tem 45,5% das crianças de 0 a 3 anos em creche. Para chegar a 50% em 2027 faltam cerca de 34,9 mil vagas, espalhadas por 201 municípios."
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
  "miniatura": "miniaturas/nascimentos.jpg",
  "explica": [
   "Conta como nascem os bebês gaúchos com os microdados do SINASC de 2023 a 2025: tipo de parto, prematuridade, baixo peso, pré-natal, idade e escolaridade da mãe, sem nenhum dado individual.",
   "A primeira página mostra o estado e cada município (mapa e enxame, em que cada ponto é uma cidade). A segunda olha para a mãe. A terceira é o perfil do município comparado ao RS, com um resumo escrito automaticamente."
  ],
  "uso": [
   "Troque o ano e o indicador (cesárea, prematuridade, baixo peso, pré-natal).",
   "Clique num município no mapa ou no enxame: cartões, waffle e recorte filtram.",
   "Na página 2, clique numa faixa de idade da mãe e o outro gráfico realça a mesma faixa.",
   "Na página 3, escolha qualquer município para ver o perfil."
  ],
  "destaque": "Em 2024, 65,7% dos bebês do RS nasceram de cesárea. Entre mães com 35 anos ou mais, foram 75%; entre as de 15 a 19, 50%."
 },
 {
  "id": "leitos",
  "workspace": "Saúde",
  "tipo": "Painel de TV",
  "titulo": "Quanto dos leitos SUS está ocupado?",
  "resumo": "Os leitos SUS do RS como prédios: cada macrorregião de saúde é um hospital, cada andar um tipo de leito (UTI, clínico, cirúrgico, pediátrico, obstétrico) e cada janela acesa, 20 leitos ocupados, mês a mês.",
  "paginas": [
   {
    "nome": "Painel",
    "arquivo": "relatorios/leitos/p1.html"
   }
  ],
  "video": "videos/Leitos_ocupados_RS.mp4",
  "tecnicas": [
   "HTML Content",
   "JavaScript",
   "DAX que gera JSON",
   "Microdados SIH"
  ],
  "fontes": [
   "DATASUS · CNES (leitos)",
   "DATASUS · SIH (internações)"
  ],
  "data": "out/2026",
  "miniatura": "miniaturas/leitos.jpg",
  "explica": [
   "Mostra quanto dos leitos SUS do Rio Grande do Sul está ocupado, mês a mês. Cada macrorregião de saúde vira um prédio: a altura é o número de leitos, cada andar é um tipo de leito (de baixo para cima: clínico, cirúrgico, pediátrico, obstétrico, outras especialidades e UTI no topo), e cada janela acesa são 20 leitos ocupados.",
   "Os leitos vêm do CNES, mês a mês. Os dias de internação vêm dos microdados do SIH, agregados pela especialidade do leito, com os dias de UTI separados. Nenhum registro individual é gravado.",
   "Ocupação estimada = dias de internação no mês ÷ (leitos SUS × dias do mês). É uma aproximação, porque o SIH registra a internação inteira no mês em que ela é processada. Por isso internações longas (psiquiatria, crônicos) podem passar de 100% no andar \"outras\". Hospital-dia, isolamento e cuidados intermediários ficam de fora."
  ],
  "uso": [
   "O painel passa os meses sozinho: as janelas acendem e apagam conforme a ocupação. O botão ▶/❚❚ liga e desliga, e os botões − e + mudam o tempo por mês, de 3 segundos a 1 minuto.",
   "Passe o mouse num andar para ver a ocupação, os leitos e os dias daquele tipo de leito.",
   "Clique num prédio para os cartões de baixo mostrarem só aquela macrorregião; clique de novo para voltar ao RS.",
   "Clique num cartão de andar para destacar aquele tipo de leito em todos os prédios. Janela só em contorno é leito que não existia naquele mês."
  ],
  "destaque": "A Metropolitana tem 41% dos leitos SUS do estado (8,6 mil de 21,2 mil) e é o prédio mais cheio: 76% em julho de 2026. Na pediatria, a ocupação do RS vai de 30% no verão a 50% no inverno."
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
  "miniatura": "miniaturas/dengue.jpg",
  "explica": [
   "Acompanha o avanço da dengue no RS semana a semana, com os casos prováveis do SINAN por município de residência.",
   "O mapa acende onde há casos naquela semana, o ranking mostra os municípios com mais casos no ano até ali, e a curva epidêmica compara 2024, 2025 e 2026."
  ],
  "uso": [
   "Escolha o ano; o botão ▶ passa as semanas sozinho, como num timelapse.",
   "Clique num município no mapa ou no ranking para abrir o detalhe dele.",
   "Os botões − e + mudam a velocidade do timelapse."
  ],
  "destaque": "O timelapse deixa ver a epidemia se espalhando pelo estado e, em seguida, se concentrando na região metropolitana."
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
  "miniatura": "miniaturas/panorama.jpg",
  "explica": [
   "Visão geral das internações do SUS no RS por motivo (capítulo da CID): quantidade, valor pago, valor médio, permanência e mortalidade hospitalar.",
   "O mapa de calor cruza motivo × mês do ano escolhido. Ao lado, o detalhe do motivo em foco."
  ],
  "uso": [
   "O modo TV percorre todos os meses de um motivo e depois passa para o próximo.",
   "Escolha o ano e clique em qualquer motivo ou mês para fixar.",
   "Os botões − e + definem o tempo por tela, de 3 segundos a 1 minuto."
  ],
  "destaque": "Feito para ficar numa TV: roda sozinho, mas qualquer clique assume o controle."
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
  "miniatura": "miniaturas/odonto.jpg",
  "explica": [
   "Exemplo de painel de TV para uma clínica odontológica, com dados fictícios: agenda do dia, pacientes atendidos, faturamento, atendimentos da semana, convênios do mês e evolução do ano.",
   "Foi o primeiro projeto da série, para testar o formato de painel em tela cheia, com tipografia grande e leitura à distância."
  ],
  "uso": [
   "É um painel para ficar aberto numa tela: não precisa de clique."
  ],
  "destaque": "Dados inventados, para mostrar o layout sem expor nenhuma informação real de paciente."
 }
];
