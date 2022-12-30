// https://docs.cypress.io/api/table-of-contents
// import { slowCypressDown } from 'cypress-slow-down'

// slowCypressDown()

describe('Ao acessar o site (localhost)', () => {
  it('Devo ser redirecionado para a tela de login (/login)', () => {
    cy.visit('/')
    cy.url().should('include', '/login')
  })
  it('Deve ter a imagem de logo da Nextcode (localizada na pasta src/assets)', () => {
    cy.get('img')
  })
  it('Deve conter um textbox para digitar o email e atributo name=email', () => {
    cy.get('input[name=email]')
  })
  it('Deve conter um textbox para digitar a senha e atributo name=senha', () => {
    cy.get('input[name=senha]')
  })
  it('Deve conter um botão escrito "Login" e atributo name=login', () => {
    cy.get('button[name=login]')
  })
})

describe('Validando credenciais', () => {
  describe('Ao digitar e-mail e senha errados', () => {
    it('Deve aparecer uma mensagem de "Usuário ou senha incorretos"', () => {
      cy.log('Você pode utilizar o modificador de eventos "prevent" no botão, ex: @click.prevent')

      cy.get('input[name=email]').type('email@errado.com.br')
      cy.get('input[name=senha]').type('12345')

      cy.get('button[name=login]').click()

      cy.contains(/usuário ou senha incorretos/i)
    })
    it('A mensagem de erro deve ser da cor rgb(236, 153, 34)', () => {
      cy.contains(/usuário ou senha incorretos/i).should('have.css', 'color', 'rgb(236, 153, 34)')
    })
    it('Deve limpar o campo de senha', () => {
      cy.get('input[name=senha]').clear()
    })
  })
  describe('Ao digitar e-mail e senha corretos', () => {
    it('Deve digitar meu usuário admin@nextcode.com.br no campo de e-mail', () => {
      cy.get('input[name=email]').clear()
      cy.get('input[name=email]').type('admin@nextcode.com.br')
    })
    it('Deve digitar a minha senha Next@123 no campo de senha', () => {
      cy.get('input[name=senha]').type('Next@123')
    })
    it('Deve clicar no botão escrito "Login"', () => {
      cy.get('[name=login]').click()
    })
    it('Deve ser redirecionado para a tela de /cadastros', () => {
      cy.url().should('include', '/cadastros')
    })
  })
})

describe('Ao acessar tela de cadastro', () => {
  describe('A navegação', () => {
    it('Deve ser o elemento <nav>', () => {
      cy.get('nav')
    })
    it('Deve ocupar 100px de altura', () => {
      cy.get('nav').should('have.css', 'height', '100px')
    })
    it('Deve ter a background-color rgb(51, 51, 51)', () => {
      cy.get('nav').should('have.css', 'background-color', 'rgb(51, 51, 51)')
    })
    it('Deve ter a logo da Nextcode da pasta src/assets', () => {
      cy.get('nav').within(() => {
        cy.get('img')
      })
    })
    it('Deve ter um link escrito "Sair" com href="#/login"', () => {
      cy.get('nav').within(() => {
        cy.get('a').contains(/sair/i).should('have.attr', 'href', '#/login')
      })
    })
    it('Deve ter um link escrito "Sair" com a color rgb(243, 243, 245)', () => {
      cy.get('nav').within(() => {
        cy.get('a').contains(/sair/i).should('have.css', 'color', 'rgb(243, 243, 245)')
      })
    })
  })
  describe('No conteúdo da página', () => {
    it('Deve conter um <h2> escrito "Cadastro de tópicos para discussão"', () => {
      cy.contains('h2', 'Cadastro de tópicos para discussão')
    })
    it('Deve conter um textbox para digitar o título obrigatório', () => {
      cy.get('input[name=titulo]').should('have.attr', 'required')
    })
    it('Deve conter um textbox para digitar a URL da imagem obrigatório', () => {
      cy.get('input[name=imagem]').should('have.attr', 'required')
    })
    it('Deve conter um textarea para digitar um resumo com até 300 caracteres', () => {
      cy.get('textarea[name=resumo]').should('have.attr', 'maxlength', '300')
    })
    it('Deve conter um botão escrito "Salvar"', () => {
      cy.get('button').contains(/salvar/i)
    })
    it('Deve conter um radio button com o valor = rascunho', () => {
      cy.get('[type=radio]').filter('[value=rascunho]')
    })
    it('Deve conter um radio button com o valor = publicar', () => {
      cy.get('[type=radio]').filter('[value=publicar]')
    })
    it('Deve ter somente esses 2 radio buttons', () => {
      cy.get('input[type=radio]').should('have.length', 2)
    })
    it('Deve ter um subtitulo com <h3> escrito "Tópicos cadastrados"', () => {
      cy.contains('h3', /tópicos cadastrados/i)
    })
    it('Deve iniciar escrito "Nenhum item cadastrado', () => {
      cy.contains('body', /nenhum item cadastrado/i)
    })
  })
  describe('Inserindo o primeiro tópico', () => {
    it('Deve clicar em Salvar', () => {
      cy.get('button').contains(/salvar/i).click()
    })
    it('Deve exibir "Preencha todos os campos" se campos vazios', () => {
      cy.contains(/preencha todos os campos/i)
    })
    it('A mensagem de erro deve ter a color rgb(236, 153, 34)', () => {
      cy.contains(/preencha todos os campos/i).should('have.css', 'color', 'rgb(236, 153, 34)')
    })
    it('Deve preencher o título com "tópico 1"', () => {
      cy.get('input[name=titulo]').type('tópico 1')
    })
    it('Deve preencher a imagem', () => {
      cy.get('input[name=imagem]').type('https://loremflickr.com/320/240')
    })
    it('Deve preencher o resumo com "Este é um resumo de teste 1"', () => {
      cy.get('textarea[name=resumo]').type('Este é um resumo de teste 1')
    })
    it('Deve selecionar a opção rascunho', () => {
      cy.get('[value=rascunho]').click()
    })
    it('Deve clicar no botão Salvar', () => {
      cy.get('button').contains(/salvar/i).click()
    })
    it('Deve ocultar a mensagem "Preencha todos os campos"', () => {
      cy.get(/preencha todos os campos/i).should('not.be.visible')
    })
    it('Deve ter um card renderizado na tela', () => {
      cy.get('.card').should('have.length', 1)
    })
    it('Deve limpar os campos do formulário', () => {
      cy.get('input[name=titulo]').should('have.value', '')
      cy.get('textarea[name=resumo]').should('have.value', '')
    })
    it('Deve ter a background-color rgb(231, 148, 224) no card de rascunho', () => {
      cy.get('.card')
        .filter('[tipo=rascunho]')
        .should('have.css', 'background-color', 'rgb(231, 148, 224)')
    })
  })
  describe('Inserindo o segundo tópico', () => {
    it('Deve preencher o título com "tópico 2"', () => {
      cy.get('input[name=titulo]').type('tópico 2')
    })
    it('Deve preencher a imagem', () => {
      cy.get('input[name=imagem]').type('https://loremflickr.com/320/240')
    })
    it('Deve preencher o resumo com "Este é um resumo de teste 2"', () => {
      cy.get('textarea[name=resumo]').type('Este é um resumo de teste 2')
    })
    it('Deve selecionar a opção publicar', () => {
      cy.get('[value=publicar]').click()
    })
    it('Deve clicar no botão Salvar', () => {
      cy.get('button').contains(/salvar/i).click()
    })
    it('Deve ter 2 cards renderizado na tela', () => {
      cy.get('.card').should('have.length', 2)
    })
    it('Deve ter a background-color rgb(186, 243, 255) no card de publicar', () => {
      cy.get('.card')
        .filter('[tipo=publicar]')
        .should('have.css', 'background-color', 'rgb(186, 243, 255)')
    })
  })
  describe('Inserindo o terceiro tópico', () => {
    it('Deve preencher o título com "tópico 3"', () => {
      cy.get('input[name=titulo]').type('tópico 3')
    })
    it('Deve preencher a imagem', () => {
      cy.get('input[name=imagem]').type('https://loremflickr.com/320/240')
    })
    it('Deve preencher o resumo com "Este é um resumo de teste 3"', () => {
      cy.get('textarea[name=resumo]').type('Este é um resumo de teste 3')
    })
    it('Deve selecionar a opção rascunho', () => {
      cy.get('[value=rascunho]').click()
    })
    it('Deve clicar no botão Salvar', () => {
      cy.get('button').contains(/salvar/i).click()
    })
    it('Deve ter 3 cards renderizado na tela', () => {
      cy.get('.card').should('have.length', 3)
    })
  })
  describe('Excluíndo um tópico', () => {
    it('Deve clicar no botão de excluir do card', () => {
      cy.get('.cards').within(() => {
        cy.get('button:first').click()
      })
    })
    it('Deve ter 2 cards renderizado na tela', () => {
      cy.get('.card').should('have.length', 2)
    })
  })
})
describe('Deslogar do sistema', () => {
  it('Deve clicar no botão de Sair na barra de navegação', () => {
    cy.get('nav').within(() => {
      cy.get('a').click()
    })
  })
  it('Deve ser redirecionado para a tela de /login', () => {
    cy.url().should('include', '/login')
  })
})
