# Elifoot Lite

Cria um jogo de gestão de futebol MUITO simples, inspirado na lógica clássica do Elifoot.

O objetivo é criar um pequeno jogo de gestão de futebol, rápido, simples e funcional.

A prioridade absoluta é o núcleo do jogo:

gerir uma equipa → escolher jogadores → jogar campeonato → fazer substituições ao intervalo → contratar/vender jogadores → tentar subir de divisão.

Não adicionar funcionalidades complexas que não estejam especificadas neste documento.

1. PRINCÍPIO FUNDAMENTAL

Quero um jogo de futebol de gestão extremamente simples.

Não quero um Football Manager.

Não quero dezenas de atributos, menus ou sistemas.

O jogo deve ter apenas:

jogadores

4 posições

rating 0–100

nacionalidade

equipas

4 divisões

campeonato

jogos

substituições ao intervalo

transferências

promoções/despromoções

save/load

e, opcionalmente, uma taça

A interface deve ser limpa, rápida e fácil de perceber.

2. ESTRUTURA DE DADOS — MUITO IMPORTANTE

A arquitetura dos dados é uma das partes mais importantes deste projeto.

Separar claramente:

EQUIPAS

JOGADORES

DIVISÕES

PAÍSES

CONFIGURAÇÃO DO JOGO

Não hardcodar nomes de equipas, jogadores ou cores espalhados pelos componentes.

Quero conseguir editar posteriormente os dados sem ter de alterar a lógica do jogo.

Idealmente criar estruturas/ficheiros equivalentes a:

/data/teams
/data/players
/data/countries
/data/gameConfig
/assets/badges


A implementação concreta pode ser diferente, desde que a separação de dados seja clara.

3. EQUIPAS

Cada equipa deve ter uma estrutura semelhante a:

Team {
    id
    name
    abbreviation
    country
    division
    badge
    primaryColor
    secondaryColor
    accentColor
    budget
    playerIds
}


Exemplo:

{
    id: 1,
    name: "Benfica",
    abbreviation: "SLB",
    country: "Portugal",
    division: 1,
    badge: "/assets/badges/benfica.png",
    primaryColor: "#E30613",
    secondaryColor: "#FFFFFF",
    accentColor: "#000000",
    budget: 5000000,
    playerIds: [...]
}


IMPORTANTE

A estrutura das equipas deve ser extremamente fácil de editar.

Posteriormente quero poder:

alterar nome

alterar abreviatura

alterar país

alterar divisão

alterar orçamento

substituir badge

alterar cores

alterar jogadores

sem alterar a lógica do jogo.

4. BADGES / LOGOS DAS EQUIPAS

Cada equipa deve poder ter o seu próprio badge/logo.

Preparar o projeto para utilizar imagens reais.

Preferencialmente:

/assets/badges/


Exemplo:

/assets/badges/benfica.png
/assets/badges/porto.png
/assets/badges/sporting.png


A referência ao badge deve estar nos dados da equipa.

Exemplo:

badge: "/assets/badges/benfica.png"


Não colocar os badges diretamente dentro dos componentes.

Deve ser simples substituir posteriormente uma imagem por outra.

Se for fácil implementar upload de badges, pode existir essa possibilidade, mas não é prioritária.

5. CORES DAS EQUIPAS

Cada equipa deve ter:

cor principal

cor secundária

cor de destaque/acento

Exemplo:

primaryColor: "#E30613"
secondaryColor: "#FFFFFF"
accentColor: "#000000"


Estas cores devem ser utilizadas dinamicamente no UI.

Exemplos:

cabeçalho da equipa

cartões da equipa

página do plantel

página de jogo

classificação

calendário

destaque da equipa do utilizador

outros elementos onde faça sentido

As cores NÃO devem estar hardcoded nos componentes.

O UI deve ler as cores diretamente da equipa.

Se eu alterar:

primaryColor: "#E30613"


para:

primaryColor: "#006633"


a identidade visual dessa equipa deve atualizar-se automaticamente.

6. RATING DA EQUIPA

Não criar um rating de equipa editável separadamente.

A força da equipa deve ser calculada automaticamente a partir dos jogadores.

Por exemplo:

Team Rating =
média ponderada dos ratings dos jogadores titulares


Pode existir uma pequena ponderação por posição se for necessário, mas manter extremamente simples.

O importante é:

jogadores melhores → equipa geralmente mais forte.

Não criar um rating de equipa manual que possa entrar em conflito com os ratings dos jogadores.

7. JOGADORES

Os jogadores devem ser extremamente simples.

Cada jogador tem APENAS:

Player {
    id
    name
    position
    rating
    nationality
    transferValue
}


Não criar:

idade

salário

potencial

forma

moral

lesões

personalidade

pé preferido

altura

peso

velocidade

resistência

remate

passe

técnica

defesa

atributos individuais

estatísticas complexas

O único indicador de qualidade é:

RATING 0–100

8. POSIÇÕES

Existem apenas 4 posições:

GR — Guarda-redes
DEF — Defesa
MED — Médio
AV — Avançado


Não criar outras posições.

9. RATING DOS JOGADORES

O rating vai de:

0 a 100

Exemplos:

GR — João — 72
DEF — Pedro — 81
MED — Miguel — 67
AV — Carlos — 84


O rating é o principal fator de qualidade do jogador.

10. NACIONALIDADES

Cada jogador deve ter uma nacionalidade.

Criar uma lista simples de países.

Exemplo:

Portugal
Spain
France
Brazil
Argentina
England
Italy
Germany
Netherlands
Belgium
Morocco
Algeria
Senegal
etc.


A lista deve estar separada dos jogadores para poder ser editada posteriormente.

11. GERAÇÃO DE JOGADORES

Criar jogadores inicialmente através de dados fictícios.

Também pode existir geração aleatória de jogadores.

Os jogadores gerados aleatoriamente devem ter:

nome

posição

rating 0–100

nacionalidade

valor de transferência

O rating deve ser gerado aleatoriamente, mas de forma razoável.

Não é necessário que a distribuição seja perfeitamente uniforme.

12. VALOR DOS JOGADORES

Cada jogador deve ter um valor de transferência.

O valor deve ser calculado principalmente a partir do rating.

Exemplo conceptual:

rating baixo → valor baixo
rating médio → valor médio
rating alto → valor elevado


Não criar sistemas complexos de avaliação de mercado.

13. PLANTEL

Cada equipa deve ter um plantel com titulares e suplentes.

Exemplo:

11 titulares

1 GR
DEF
MED
AV


Não é necessário obrigar a uma formação específica demasiado rígida.

O utilizador deve poder escolher os seus titulares.

Criar banco de suplentes.

14. FORMAÇÃO

Manter a formação simples.

O jogador deve conseguir escolher:

GR

DEF

MED

AV

para os jogadores que entram em campo.

Não criar:

instruções tácticas

pressão

posse

linhas defensivas

estilo de jogo

funções individuais

bolas paradas

mentalidade

etc.

15. SIMULAÇÃO DOS JOGOS

Criar um simulador simples.

O resultado deve depender principalmente da qualidade das equipas.

Uma equipa com rating superior deve, em média, ter melhores resultados.

Mas deve existir aleatoriedade suficiente para permitir:

empates

vitórias inesperadas

derrotas inesperadas

resultados com vários golos

Não tornar o resultado determinístico.

Exemplo:

Benfica 78 rating
Braga 72 rating

Benfica tem vantagem,
mas Braga pode ganhar.


16. RESULTADO DO JOGO

Não é necessário simular cada minuto.

Pode simular:

1.ª parte

Gerar acontecimentos/resultados.

Mostrar:

INTERVALO

BENFICA 1–0 BRAGA


Depois permitir substituições.

2.ª parte

Simular o restante jogo.

Mostrar:

FINAL

BENFICA 2–1 BRAGA


17. SUBSTITUIÇÕES AO INTERVALO

Esta funcionalidade é OBRIGATÓRIA.

O fluxo deve ser:

Iniciar jogo
↓
Simular primeira parte
↓
INTERVALO
↓
Mostrar resultado
↓
Permitir substituições
↓
Continuar segunda parte
↓
Resultado final


No intervalo, o utilizador pode:

retirar jogador

colocar suplente

Exemplo:

INTERVALO

BENFICA 1–0 BRAGA

Substituições:

DEF João → DEF Pedro
AV Miguel → AV Carlos

[CONTINUAR 2.ª PARTE]


As substituições devem atualizar os jogadores em campo.

Não criar sistema complexo de substituições.

18. QUATRO DIVISÕES

O jogo deve ter exatamente 4 divisões:

DIVISÃO 1
DIVISÃO 2
DIVISÃO 3
DIVISÃO 4


Inicialmente utilizar, por exemplo:

10 equipas por divisão.

Mas o número de equipas NÃO deve estar hardcoded na lógica.

Deve ser uma configuração editável.

Exemplo:

teamsPerDivision: 10


Assim posso posteriormente alterar para 18, 20, etc.

19. CAMPEONATO

Cada divisão deve ter o seu próprio campeonato.

As equipas jogam entre si.

Criar:

calendário

jornadas

resultados

classificação

20. CLASSIFICAÇÃO

Mostrar:

PosEquipaJVEDGMGSDGPts

Sistema:

Vitória = 3 pontos
Empate = 1 ponto
Derrota = 0 pontos


Critérios de desempate simples:

pontos

diferença de golos

golos marcados

21. PROMOÇÕES E DESPROMOÇÕES

No final da época:

2 primeiros sobem

2 últimos descem

Exemplo:

DIVISÃO 2

1.º → sobe
2.º → sobe
...
9.º → desce
10.º → desce


Na Divisão 1:

não existe promoção

Na Divisão 4:

não existe despromoção

Depois das promoções/despromoções:

atualizar a divisão das equipas

gerar nova época

manter plantéis

manter jogadores

manter orçamentos, salvo alterações resultantes das transferências

22. ÉPOCAS

Criar sistema de épocas.

Fluxo:

ÉPOCA 1
↓
Jornadas
↓
Fim da época
↓
Classificação final
↓
Promoções/despromoções
↓
Nova época


Mostrar:

Época 2026/27
Jornada 7 de 18


A época seguinte deve começar automaticamente depois do final da anterior.

23. TRANSFERÊNCIAS

O mercado de transferências é uma funcionalidade OBRIGATÓRIA.

Criar um mercado simples.

O utilizador deve poder:

ver jogadores

filtrar por posição

ver rating

ver nacionalidade

ver valor

comprar

vender

Tabela:

JogadorPosRatingNacionalidadeValor

Botão:

COMPRAR


24. COMPRA DE JOGADORES

Quando o jogador compra um jogador:

verificar se tem dinheiro suficiente;

retirar o valor do orçamento;

retirar o jogador da equipa anterior;

adicionar o jogador à nova equipa;

atualizar os plantéis.

Não criar contratos ou salários.

25. VENDA DE JOGADORES

O utilizador deve poder vender jogadores.

Quando vende:

jogador sai do plantel

valor é acrescentado ao orçamento

Pode existir um mercado simples em que o jogador fica disponível para outras equipas.

Não criar negociações complexas.

26. ORÇAMENTO

Cada equipa tem:

budget


O orçamento serve apenas para:

comprar jogadores

receber dinheiro das vendas

Não criar:

salários

receitas de bilheteira

patrocinadores

prémios financeiros complexos

despesas de estádio

finanças detalhadas

27. TAÇA

Se for simples de implementar, adicionar uma Taça.

A Taça deve incluir equipas das 4 divisões.

Formato:

1.ª eliminatória
↓
Quartos de final
↓
Meias-finais
↓
Final


Eliminação direta.

Os jogos são simulados usando o mesmo motor dos jogos do campeonato.

Se houver empate, decidir o vencedor de forma simples, por exemplo através de prolongamento/penáltis simulados.

A Taça é secundária.

Se começar a complicar a implementação, NÃO sacrificar as funcionalidades principais para a adicionar.

28. INTERFACE PRINCIPAL

Criar um menu simples.

Exemplo:

MINHA EQUIPA

PLANTEL
JOGAR
CLASSIFICAÇÃO
CALENDÁRIO
TRANSFERÊNCIAS
TAÇA
ÉPOCA


Não criar dezenas de menus.

29. PÁGINA DA EQUIPA

Mostrar:

badge

nome

divisão

posição atual

pontos

rating da equipa

orçamento

próximo jogo

A identidade visual deve utilizar:

cor principal

cor secundária

cor de destaque

30. PÁGINA DO PLANTEL

Mostrar badge e identidade da equipa.

Organizar jogadores por:

GR
DEF
MED
AV


Tabela:

JogadorPosiçãoRatingNacionalidade

Permitir escolher titulares.

Mostrar suplentes separadamente.

31. PÁGINA DO JOGO

Mostrar:

badge da equipa da casa

nome

badge da equipa visitante

nome

cores das duas equipas

resultado

Exemplo:

[ BADGE ] BENFICA

      1 – 0

[ BADGE ] BRAGA


Depois do intervalo:

INTERVALO


e mostrar o painel de substituições.

32. CLASSIFICAÇÃO

Mostrar o badge de cada equipa junto ao nome.

Exemplo:

1  [badge] Benfica       18 pts
2  [badge] Porto         16 pts
3  [badge] Sporting      15 pts


Destacar visualmente:

equipa do utilizador

lugares de promoção

lugares de despromoção

Utilizar as cores das próprias equipas de forma subtil, sem tornar a tabela confusa.

33. CALENDÁRIO

Mostrar:

jornada atual

próximas jornadas

adversário

casa/fora

resultado, quando já jogado

Exemplo:

JORNADA 7

BENFICA      2–1 BRAGA
PORTO        1–1 SPORTING
BOAVISTA     vs  VITÓRIA


Mostrar badges sempre que fizer sentido.

34. IDENTIDADE VISUAL GLOBAL

A interface geral deve ser inspirada em jogos de gestão de futebol clássicos, mas com uma apresentação moderna e limpa.

Não criar uma interface excessivamente sofisticada.

Prioridade:

legibilidade

rapidez

informação clara

sensação de jogo de gestão

As cores da equipa do utilizador devem aparecer de forma dinâmica.

35. SISTEMA DE BADGES

Os badges devem aparecer consistentemente no jogo.

Utilizar o badge:

página da equipa

plantel

classificação

calendário

jogos

resultados

taça

eventualmente transferências

Criar um componente reutilizável equivalente a:

<TeamBadge team={team} />


Assim todos os locais utilizam o mesmo sistema.

36. COMPONENTE DE IDENTIDADE DA EQUIPA

Criar também um componente reutilizável equivalente a:

<TeamIdentity team={team} />


que possa mostrar:

[ BADGE ] Nome da equipa


e utilizar automaticamente as cores da equipa.

Isto deve evitar duplicação de código.

37. SAVE / LOAD

Adicionar save/load usando localStorage ou equivalente.

Guardar:

época

jornada

equipa do jogador

plantéis

jogadores

classificações

resultados

calendário

transferências

orçamentos

estado da Taça

divisões

Adicionar:

GUARDAR JOGO
CARREGAR JOGO
NOVO JOGO


38. ESCOLHA DA EQUIPA

No início de um novo jogo, permitir escolher a equipa que o jogador vai gerir.

Mostrar:

badge

nome

divisão

cores

rating da equipa

orçamento

Exemplo:

[ BADGE ]

BENFICA
Divisão 1
Rating: 76
Orçamento: €5.000.000

[ESCOLHER EQUIPA]


Depois de escolhida, essa passa a ser a equipa do jogador.

39. DADOS INICIAIS

Criar inicialmente equipas e jogadores fictícios suficientes para testar todo o jogo.

Por exemplo:

4 divisões
10 equipas por divisão
40 equipas


Cada equipa deve ter um plantel suficientemente grande para:

11 titulares

suplentes

substituições

Usar nomes e badges fictícios/placeholders inicialmente.

A estrutura deve estar preparada para eu substituir posteriormente tudo por equipas reais.

40. CONFIGURAÇÃO EDITÁVEL

Criar uma configuração central semelhante a:

GAME_CONFIG

numberOfDivisions: 4
teamsPerDivision: 10
promotionSpots: 2
relegationSpots: 2
playersPerTeam: ...
minPlayerRating: 0
maxPlayerRating: 100


Não espalhar estes valores pelo código.

41. ARQUITETURA

A arquitetura deve separar:

DATA

Equipas, jogadores, países e configurações.

GAME ENGINE

simulação de jogos

classificação

calendário

transferências

promoções/despromoções

épocas

UI

páginas

componentes

menus

tabelas

cartões

badges

identidade visual

A lógica do jogo não deve depender diretamente da apresentação visual.

42. PRINCÍPIO DE EDITABILIDADE

Quero poder, no futuro, fazer algo deste género:

TEAM

id: 15
name: "Real Madrid"
abbreviation: "RMA"
country: "Spain"
division: 1
badge: "/assets/badges/real-madrid.png"
primaryColor: "#FFFFFF"
secondaryColor: "#00529F"
accentColor: "#FEBE10"
budget: 10000000


e isso deve automaticamente refletir-se no jogo inteiro.

O mesmo para jogadores.

Exemplo:

PLAYER

id: 245
name: "João Silva"
position: "MED"
rating: 82
nationality: "Portugal"
transferValue: 2500000


Não quero ter de alterar código da interface para alterar estes dados.

43. O QUE NÃO FAZER

NÃO adicionar:

idade

salários

contratos

potencial

moral

lesões

treinos

staff

scouting complexo

tácticas avançadas

atributos individuais

estádio

adeptos

patrocinadores

imprensa

conferências de imprensa

notícias

redes sociais

sistema financeiro complexo

animações de jogo

simulação minuto a minuto

sistema de cartas

achievements

multiplayer

Tudo isso está fora do âmbito deste projeto.

44. PRIORIDADE DE IMPLEMENTAÇÃO

Implementar pela seguinte ordem:

PRIORIDADE 1

Estrutura de dados:

equipas

jogadores

divisões

badges

cores

PRIORIDADE 2

Sistema de campeonato:

calendário

jornadas

classificação

resultados

PRIORIDADE 3

Simulação dos jogos.

PRIORIDADE 4

Interface da equipa e plantel.

PRIORIDADE 5

Substituições ao intervalo.

PRIORIDADE 6

Mercado de transferências.

PRIORIDADE 7

Promoções/despromoções e novas épocas.

PRIORIDADE 8

Save/load.

PRIORIDADE 9

Taça.

45. RESULTADO FINAL PRETENDIDO

O jogo deve transmitir a sensação de um:

"Elifoot minimalista"

com apenas as decisões essenciais:

Escolher equipa
↓
Gerir plantel
↓
Escolher titulares
↓
Jogar
↓
Fazer substituições ao intervalo
↓
Ver resultado
↓
Comprar/vender jogadores
↓
Avançar jornada
↓
Subir/descer de divisão
↓
Começar nova época


A experiência deve ser simples o suficiente para que um utilizador perceba o jogo em poucos minutos.

A prioridade é FUNCIONALIDADE e EDITABILIDADE dos dados, não quantidade de funcionalidades.

Antes de implementar funcionalidades extra, garantir que este núcleo funciona de ponta a ponta.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1b802c5d-0456-4f43-8108-4d9556cd1a56).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
