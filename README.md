# Quadro de Tarefas - Desafio de Criação de Layout 

Este projeto **Quadro de Tarefas** foi desenvolvido como parte do desafio de **Criação de Layout da 2ª Fase do Processo Seletivo para ingresso na turma 25 (2024/1º Semestre) da Aceleradora Ágil**. 

## Objetivos

O objetivo do projeto foi desenvolver um layout HTML/CSS de Quadro de Tarefas, organizado em duas áreas (um menu lateral e um conteúdo principal). O menu lateral é composto por um imagem, um texto e 4 links, enquanto que o conteúdo principal é uma lista de tarefas contendo uma tabela Dia e Noite lado a lado, contendo uma lista ordenada de tarefas a serem feitas durante uma rotina. 

## Desafios 

* Personalizar o layout, tornando-o mais agradável e intuitivo, melhorando assim, a experiência do usuário. 
* Deixar a lista de tarefas dinâmica com funcionalidades de adição e remoção de tarefas.

## Desenvolvimento 

### Tecnologias utilizadas

<div style="display: inline_block"><br>
  <img align="center" alt="icone-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="icone-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="icone-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
</div>

### Design da solução e decisões tomadas

* Foram utilizadas tags semânticas mais adequadas ao contexto, tais como: 

    - `<aside>` : utiliada para o menu, já que trata-se de um menu lateral.
        - `<figure>` : agrupa as informações do usuário, como sua imagem de perfil, seu nome e sua bio.
        - `<nav>` : tag específica para links de navegação.
    - `<main>` : todo o conteúdo principal (Todo o quadro de tarefas foi encapsulado nesse conteiner).
        - `<section>` : foi usada para estruturar a parte principal, dividindo-a em lista de tarefas e créditos. (Note que não foi usada a tag `<footer>` deliberadamente, já que a intenção é centralizar essa informação em relação a lista de tarefas, e não à página como um todo).
        - `<article>` : foi usado dentro da área de tarefas para dividi-lo em dois campos: Dia e Noite.
        - `<form>` : facilita a validação de dados e permite que o usuário insira novas tarefas ao submetê-los usando a tecla `Enter`.

* Para posicionar e organizar os elementos da interface, foram usados os seguintes recursos do CSS: 

    - `display: flex` : para posicionar e dividir melhor as seções do layout.
        - ` flex-direction: column`: usado em conjunção com o `gap` para espaçar uniformemente os elementos (menu lateral,  nos títulos de cada seção - dia e noite, e entre o conteúdo principal e os créditos).
    - `:hover`: usado este recurso para tornar a navegação mais intuitiva, dando enfoque aos links que o usuário está prestes a utilizar, especialmente usado no menu.
    - `box-shadow`: usado para adicionar um efeito tridimensional, aproximando o conteúdo do usuário. 
    - Paleta de cores: foi escolhida para transmitir criatividade e profissionalismo, mas de uma forma minimalista.
    - Emojis: como forma de facilitar a utilização e experiência do usuário, tornando a navegação mais intuitiva.

* Para tornar a Lista de Tarefas dinâmica, foram utilizados os seguintes recursos do JavaScript:

    - *Event Listener* : para ourir os principais eventos que o usuário realiza com as tarefas: adição e remoção.
    - *Manipulação da DOM* : capturar elementos da DOM, permitir inserção de novos elementos na DOM a medida que o usuário adiciona novas tarefas, 
    - `preventDefault()` : usuado para evitar o comportamento padrão de submissão do formulário e permitir que o usuário utilize a tecla `Enter` para adicionar novas tarefas.
    - `defer`: usado para permitir a interação do usuário com a página apenas após o seu completo carregamento.

### Funcionamento 

Basta o usuário digitar o texto da tarefa no campo desejado (Dia ou Noite) e clicar no botão **+** ou teclar `Enter`. Já para remover, basta o usuário clicar no **x** que está à direita da tarefa que ele desja apagar. Para testar o funcionamento da aplicação, visite o endereço [https://mirraelly.github.io/desafio-quadro-tarefas/](https://mirraelly.github.io/desafio-quadro-tarefas/).

