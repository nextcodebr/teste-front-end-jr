# Teste para desenvolvedores front-end jr - Nextcode

## MVP de cadastro de tópicos para discussão entre a equipe

O objetivo deste teste de desenvolvedor front-end é ter todos os `testes automatizados` com o [Cypress](https://www.cypress.io/) passando com sucesso.

Com ele pretendemos avaliar algumas implementações básicas com programação javascript utilizando o framework `Vue.js 2`, além de conhecimentos em `CSS` e `HTML`.

Você pode usar a documentação do [Vue.js](https://v2.vuejs.org/v2/guide/) como referência. Procure entender e `utilizar` as diretivas `v-if`, `v-for`, modificadores de eventos como `@click.prevent`, as `computeds` e os `methods`. E se tiver qualquer dúvida ainda, tem muita coisa no Google/Stack Overflow já resolvida.

Aqui nesse projeto utilizamos o `SASS` por questões de preferência, mas tudo o que é pedido durante os testes poderá ser resolvido somente com CSS.

Disponibilizamos alguns componentes prontos para a utilização na pasta `src/componentes` que são: o `Button`, `Textbox`, `Card` e o `Loading`. Porém poderão ser modificados caso seja pedido no teste. É só importar onde deseja utilizá-los.

Deixamos na pasta `prototype` um protótipo básico que pode ajudar a ter uma visão do geral.

Dentro da pasta `src/views` tem a estrutura básica das duas telas iniciais do protótipo que você utilizará: `LoginView.vue` e `CadastrosView.vue`. Implemente tudo o que é pedido nos testes nelas.

### Diferenciais

- A estilização do projeto fica por conta da sua `criatividade`. Focamos na implementação das funcionalidades e algumas cores da Nextcode, mas seria interessante ver um teste bem estilizado.
- Você pode guardar/persistir os "tópicos para discussão" no `localstorage` do navegador ou até mesmo utilizar uma API fake junto com requisições em `axios` (precisará instalar a dependência) para simular uma integração entre front-end e back-end. Tem muitos exemplos de implementações com `axios` na internet e para criar uma API fake você pode utilizar o [MockAPI](https://mockapi.io)

## Instruções iniciais...

Faça `fork`e depois o `clone` deste repositório para o seu computador

### Instale as dependências:

`npm install` ou `yarn`

Para executar o projeto e verificar as suas implementações em tempo real com o `hot-reload` execute:
`npm run serve` ou `yarn serve`

### Rodar os testes automatizados (o mais importante):

Estes testes precisam passar todos com sucesso. Porém, se não conseguir, pode entregar o máximo que deu para implementar para avaliarmos também.

Para executar:

`yarn test:e2e`
ou
`npm run test:e2e`

- Abrirá a janela do Cypress;
- Escolha o navegador de teste e
- Execute os testes, conforme é mostrado no `item 1` e `item 2` da imagem `/readme/1.png`
  ![Janela Cypress](/readme/1.png "Janela Cypress")

Na pasta `prototype` estão os exemplos para guiá-lo.

### Ao finalizar...

- Faça upload de sua `branch` utilizando o `git` e depois crie uma `pull request` para este repositório.

## Boa sorte!
