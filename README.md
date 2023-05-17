# Boas-vindas ao repositório do projeto Trymovies!
<details>
  <summary><strong>:tecnólogo: O que será desenvolvido</strong></summary><br />
  Neste projeto você irá criar o Trybemovies, uma aplicação capaz de exibir filmes, criar uma lista de filmes favoritos e fazer Login . Essa aplicação será capaz de:
  - Fazer login;
  - Pesquisar por um filme;
  - Visualizar os detalhes de um filme selecionado;
  - Favoritar e desfavoritar os filmes;
  - Ver a lista de filmes favoritas;
</details>
<details>
  <summary><strong>:anotações: Habilidades</strong></summary><br />
Neste projeto, verificamos se você é capaz de:
- Fazer requisições e consumir dados vindos de uma `API`;
- Utilizar os ciclos de vida de um componente React;
- Utilizar a função `setState` de forma a garantir que um determinado código só é executado após o estado ser atualizado
- Utilizar o componente `BrowserRouter` corretamente;
- Criar rotas, mapeando o caminho da URL com o componente correspondente, via `Route`;
- Utilizar o `Switch` do `React Router`
- Criar links de navegação na aplicação com o componente `Link`;
</details>
<details>
  <summary><strong>:computador: Protótipo do projeto no Figma</strong></summary><br />
  Você pode estar se perguntando: *"Como deixo meu projeto com um layout mais atrativo?"* :pensativo:
  Para isso, disponibilizamos esse [protótipo do Figma](colocar o link do figma) para lhe ajudar !
</details>
# Requisitos
## 1. Crie as rotas necessárias para a aplicação
Para poder fazer uso de React Router, é preciso que se instale em uma aplicação React o pacote react-router-dom:
```bash
    npm install react-router-dom@v5
  ```
Você deve utilizar o `BrowserRouter` pra criar as rotas da sua aplicação e cada rota deverá renderizar um componente específico. Crie cada componente dentro da pasta `src/pages`, conforme o indicado abaixo:
<details><summary>  :atenção: DICA</summary>
"Route exact path="/about" component={ About } "
</details>
<details><summary> Rota <code>/</code></summary>
- A rota `/` deve renderizar um componente chamado `Login`.
</details>
<details><summary> Rota <code>/home</code></summary>
- A rota `/home` deve renderizar um componente chamado `Home`;
</details>
<details><summary> Rota <code>/movies/:id</code></summary>
- A rota `/movies/:id` deve renderizar um componente chamado ` MovieDetail `.
</details>
<details><summary> Rota <code>/favorites</code></summary>
- A rota `/favorites` deve renderizar um componente chamado `Favorites`.
</details>
## 2. Crie um formulário para identificação
<details><summary>Dentro da page <code>Login</code>, que é renderizado na rota <code>/</code>, crie um formulário para que a pessoa usuária se identifique com um nome:</summary>
- Você deve criar um campo para que a pessoa usuária insira seu nome.
- Crie um botão com o texto `Entrar`.
- O botão para entrar só deve estar habilitado caso o nome digitado tenha 3 ou mais caracteres.
- Ao clicar no botão `Entrar`, deve salvar o nome digitado no localStorage com o nome da chave 'user'.
- Após a informação ter sido salva, faça um redirect para a rota `/home`.
</details>
## 3. Crie um componente de cabeçalho
<details><summary>Crie um componente chamado <code>Header</code>, dentro da pasta <code>src/components</code>:</summary>
- Crie esse componente com a tag `header` envolvendo todo seu conteúdo.
- Recupere o nome da pessoa logada e exiba essa informação na tela.
- Renderize o componente de cabeçalho na página da rota `/home`;
</details>
## 4. Faça a requisição para pesquisar os filmes
<details><summary>Dentro da page <code>Home</code>, que é renderizado na rota <code>/home</code>, crie uma função para que
faça uma requisição de todos os filmes utilizando a função getTrandingMovies do arquivo <code>MoviesApi.js</code>:</summary>
<details><summary>Crie um componente chamado <code>MovieCard</code>, dentro da pasta <code>src/components</code>:</summary>
- Crie esse componente com a tag `p` que deve conter o titulo do filme.
- Crie esse componente com a tag `img` que deve conter o poster do filme.
</details>
 - Renderize o componente MovieCard na página da rota `/home` passando como props o title e poster_path de cada filme;
 - Exiba na tela o titulo do filme e a imagem.
 - Ao clicar em um filme da rota Home,faça um redirect para a rota `/movie/:id` desse filme selecionado.
 -* Enquanto aguarda exiba a mensagem `Carregando...` na tela.
</details>
## 5. Crie a página de detalhes do filme selecionado
<details><summary>Dentro da page <code>MovieDetail</code>, que é renderizado na rota <code>/movie/:id</code>,exiba o detalhes somente do filme selecionado</summary>
- Faça uma requisição apenas do filme selecionado utilizando a função getMovieById do arquivo <code>MoviesApi.js</code>
* :lâmpada: Lembre-se que essa função espera receber o id do filme.
* Enquanto aguarda a resposta da API exiba a mensagem `Carregando...` na tela.
- Deve exibir a imagem de fundo(backdrop_path), titulo e a descrição do filme selecionado
</details>
## 6. Crie o formulário para pesquisar os filmes
Este formulário deve conter um input e um botão para que seja possível pesquisar os filmes.
<details><summary>Crie um componente chamado <code>Search</code>, dentro da pasta <code>src/components</code>:</summary>
- Crie um campo para pessoa digitar o nome do filme a ser pesquisada.
- Crie um botão com o texto `Procurar`.
- Renderize o componente de pesquisa no componente `Home`.
</details>
## 7. Faça a requisição para pesquisar os filmes
<details><summary>Dentro da page <code>Home</code>, que é renderizado na rota <code>/home</code>, crie uma função para que
faça uma requisição utilizando a função getMoviesBySearch do arquivo <code>MoviesApi.js</code>:</summary>
* :lâmpada: Lembre-se que essa função espera receber uma string com o nome do filme.
* Enquanto aguarda a resposta da API, esconda o input e o botão de pesquisa e exiba a mensagem `Carregando...` na tela.
* Após receber a resposta da requisição, deve renderizar no componente MovieCard somente o filme pesquisado.
</details>
## 8. Crie o mecanismo para adicionar e remover os filmes na lista de filmes favoritas
<details><summary>Dentro do componente <code>MovieCard</code>, crie um botão para pessoa usuária favoritar seus filmes favoritos</summary>
- Ao clicar no botão, deve salvar no localStorage o title, poster_path e o id do filme
</details>
## 9. Crie a lista de filmes favoritas
<details><summary> Crie a lista dentro do componente <code>Favorites</code>, que é renderizado na rota <code>/favorites</code>.</summary>