---
layout: post
title: Sobre 100% de cobertura de código 
date: 2021-05-29 01:06:05.000000000 -03:00
image: /images/posts/2021-05-29-on-100-percent-code-coverage/cover.png
table_of_contents: 2021-05-29-on-100-percent-code-coverage/pt-br/table-of-contents.md
featured_image: /images/posts/2021-05-29-on-100-percent-code-coverage/featured.jpg
featured_reference: https://wallpapersafari.com/w/HYUtdS
type: article
published: true
status: published
lang: pt-br
categories:
- thoughts
tags:
- código,
- cobertura,
- testes,
- desenvolvimento guiado por testes,
- TDD,
- Farley,
- Codificação,
- Suíte de teste,
- Verificações de segurança,
- Orçamento de desempenho,
- desenvolvimento,
- 100 de cobertura,
- cobertura de código,
- teste de software
---

A mentalidade de teste para desenvolvedores mudou ao longo dos anos, à medida que o software
a indústria está evoluindo. Mesmo assim, a prática de teste não é amplamente utilizada, ela é integrada na
ciclo de desenvolvimento da aplicação. Como tal, a cobertura de código se tornou um assunto popular
entre os desenvolvedores e as discussões aumentaram a fim de chegar a um consenso de
Cobertura de código.

Esta postagem tem como objetivo dar um impulso a essa discussão e compartilhar o que penso sobre a cobertura de código
o que vejo as equipes fazendo e o que entendo que é eficaz ou não.

## Desenvolvimento guiado por testes

O desenvolvimento dirigido por teste foi (TDD) adotado para desenvolvedores a fim de alcançar
software de alta qualidade, bem como para mantê-lo evoluindo ao longo do tempo e evitar
o medo da mudança. Portanto, {% cite tdd_by_example_kent_beck --file 2021-05-29-on-100-percent-code-coverage %}
e {% cite martin_fowler_tdd --file 2021-05-29-on-100-percent-code-coverage %}
descreve como TDD sendo um fluxo de três estágios (vermelho-verde-azul), não é o que eu
identificar nos projetos em que trabalhei.

A maioria desses projetos estava usando uma combinação de ITL (último teste interativo) ou não fazia nenhum teste,
o teste foi aplicado a um profissional de controle de qualidade (garantia de qualidade). Neste cenário, a equipe não era
obter qualquer valor no momento para manter os testes atualizados ou mesmo para
escreva-os. Essa é uma discussão inteira que não vou abordar aqui, no entanto,
é o que possivelmente leva a perder as principais métricas. Como sempre, gerenciamento
tente forçar os desenvolvedores a alcançar 100% de cobertura apenas por causa disso, ou porque
eles viram que poderiam usar isso para forçar algum tipo de comportamento nos desenvolvedores.
O catálogo de James Carr chamou esse antipadrão de "The Liar", que Dave Farley
usa como base para discutir o assunto em seu vídeo
{% cite dave_farley_the_liar_pattern --file 2021-05-29-on-100-percent-code-coverage %}
({% cite dave_farley_bdd_explained --file 2021-05-29-on-100-percent-code-coverage %})
também mencionam que a meta de cobertura é uma compreensão equivocada em seu vídeo
sobre Desenvolvimento Orientado a Comportamento).

TDD é uma rede segura para os desenvolvedores continuarem melhorando o código, comunicar a intenção
e também uma cultura a seguir. Como Dave Farley diz em seu vídeo: pratique TDD e
evite a armadilha do mentiroso.

## Portões de qualidade

Portas de qualidade são usadas para fazer cumprir algumas regras mínimas durante o desenvolvimento de software
ciclo da vida. Entre as diferentes regras, podemos listar:

- Codificação
- Suíte de teste
- Verificações de segurança
- Orçamento de desempenho

Muitos argumentariam que a cobertura de código teria seu lugar, o que **eu concordo**. Poderíamos
usar a cobertura de código como uma porta para não permitir a produção de código, se a base de código
tem menos de X porcentagem que falha no processo de lançamento. Portanto, além de ser
uma porta de qualidade, deve ser uma indicação da integridade do conjunto de testes.

A equipe deve confiar no conjunto de testes e **a cobertura deve refletir a saúde da suíte**.
O que, em muitos casos, **não é o que acontece**. A abordagem comum
é ter como alvo X por cento de cobertura, não importa o quê.

## Evite métricas erroneas

Minha experiência diz que, para muitos desenvolvedores, os testes são necessários,
de obrigação. Eles escrevem os testes não porque querem se orgulhar do
trabalho que eles fazem, ou porque querem dar ao próximo desenvolvedor (que irá
manter isso no futuro) uma dica sobre o que o código foi construído para oferecer suporte ou
não.

Como tais gerentes, tentem impor a ideia de que forçar os desenvolvedores a
alcançar X porcentagem de cobertura aumentará a qualidade da base do código.
{% cite emily_bache_refactoring_kata --file 2021-05-29-on-100-percent-code-coverage %}
gravou um vídeo de 3 séries passando pelo famoso kata Gilded Rosa, que
o objetivo é refatorar o código fornecido. Por volta do minuto 15:59 do primeiro
vídeo que ela mostra um problema nos testes que ela fez. Embora ela
mudou uma parte crítica do código de produção, os testes estavam passando. O
o código tinha cobertura de um centavo de pecent. Não estava dando o feedback desejado.

Claro que era um kata e ela descreve esse problema lindamente enquanto prossegue
através do código.

Ainda assim, vejo os desenvolvedores se orgulhando de si mesmos porque têm X
porcentagem de cobertura.

Esta série de vídeos por si só aponta como a matriz de cobertura percentual X é inútil.

A cobertura do código deve ser um efeito colateral da qualidade do conjunto de testes
{% cite dave_farley_bdd_explained --file 2021-05-29-on-100-percent-code-coverage %},
em que os desenvolvedores de software podem confiar e entender que os testes são uma rede segura
para a melhoria contínua do código.

## Referencias

{% bibliography --cited_in_order --file 2021-05-29-on-100-percent-code-coverage %}