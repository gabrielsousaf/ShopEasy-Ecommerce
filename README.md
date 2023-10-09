<h1 align="center" width:100%>

![Form React Login - Google Chrome 2023-07-20 11-20-46](https://github.com/gabrielsousaf/Login-Form-React/assets/121953504/6bd08c8a-75f4-4ed6-94d0-946175152cf3)
![Design_sem_nome__1_-removebg-preview](https://github.com/gabrielsousaf/Login-Form-React/assets/121953504/aa015fcf-5f4e-4966-9b50-a20882e1ba75)


# 📱 ShopEasy Ecommerce React.
O projeto é um E-Commerce chamado ShopEasy que simula um site de vendas a qual possui roupas masculinas, femininas, joalherias e eletrônicos. Nele foi consumido uma  API com Axios, a qual possui alguns produtos de cada categoria acima para representar uma loja verídica.

A &nbsp;[API](https://fakestoreapi.com/docs) utilizada é a Fake Store API que é facilmente encontrada no Google através de uma pesquisa ou no&nbsp;[GitHub](https://github.com/keikaavousi/fake-store-api) do criador que está devidamente explicado. Ela possui algumas opções:

- Produtos: São 20 produtos disponíveis. Ela dá a disponibilidade de visualizar todos os produtos, visualizar um produto em específico, limitar resultado dos produtos, classificar os resultados conforme o que escolher, adicionar novos produtos, atualizar valores dos produtos e deletar algum produto.

- Categorias: Sâo 4 categorias no total, sendo elas: men's clothing, women's clothing, electronics e jewelery. Ela dá a disponibilidade de filtrar uma categoria em específico ou visualizar todas.

<br/>
  

## ⚙ Descrição do projeto.

Consumo da [API](https://fakestoreapi.com/docs) chamada Fake Store, onde as os produtos e suas informações são chamados

Ao clicar em um dos produtos a pessoa terá a opção de selecionar quantos produtos serão adicionados e um botão para adicionar o(s) produto(s) no carrinho.

Ao enviar um produto no carrinho (Fica na parte superior direita do Header) onde ele ficara salvo por meio do LocalStorage, você pode diminuir a quantidade dos produtos, aumentar a quantidade e excluir.

Registro/Login: O visitante tem como criar uma conta no site a qual será armazenada no Firebase e terá a opção de logar depois. A conta é criada com o nome, email, senha e confirmação de senha que possui um sistema de validação dos campos, ou seja, necessita colocar um email válido, colocar um nome que não possua números, senha de no mínimo 6 dígitos e a confirmação de senha deve ser igual em ambos campos.

Componente de busca para procurar um produto especifico, listando os produtos relacionados a busca.

Utilização de UseContext para usuario e adicionar os produtos ao carrinho.

Pagina de Error404 que acontece ao acessar uma rota inexistente.

Responsividade em todos os componentes.
<br/>


 

## ☕ Tecnologias Usadas

[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![REACT](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
[![FIREBASE](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)](#)

https://shopeasy-ecommerce.vercel.app/



## 📎 Como Executar o projeto.

No diretório do projeto, você pode executar:

## `npm i`:
> Instalar as dependências listadas no arquivo package.json do projeto.

## `npm run dev`: 
> Executa o aplicativo em modo de desenvolvimento.
> Abra http://localhost para visualizá-lo no navegador.
> A página será recarregada quando você fizer alterações.
> Você também pode ver quaisquer erros de lint no console.

### `npm test`
> Inicia o executor de teste no modo de observação interativo.
> Consulte a seção sobre executando testes para obter mais informações.

### `npm run build`
> Compila o aplicativo para produção na pasta build.
> Ele agrupa corretamente o React no modo de produção e otimiza a construção para obter o melhor desempenho.
   
## 📝 Licença

> Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes.


