1º Commit:

1. Limpar estrutura do projeto
2. Ajustes nos códigos
3. index.html em public
4. App.js em src
5. index.js em src
6. JSX e como usar o fragment no App.js
7. JSX(Sempre que tiver mais de um elemento em um jsx tenho que colocar um elemento pai)
8. Fragment

2º Commit:

1. O que são Componentes e motivação de criar deles
2. Criação do primeiro componente Cabeçalho = Header
3. Criar componente Header
4. Criar arquivos index.js e Header.module.css
5. CSS Module(Criei um padrão de css no root para manter a paleta de cores e tamanho de texto durante o código)
6. index.js (Header) Criar o componente funcional Header
7. O que é JSX
8. npm start
9. Formatação CSS do Header
10. Uso do className para CSS Module usando styles(Pois a palavra class é reservado no node)
11. Fazer import do css
12. Continuar a Formatação CSS do Header
13. Como usar o Componente Header na nossa aplicação
14. Colocar Header em App.js
15. Importar o componente Header
16. Continuar as formatações CSS
17. Revisão da estrutura do componente Header
18. Criar componente Footer

3º Commit:

1. Layout básico no Figma
2. Revisão do que já fizemos até o momento
3. Ajustes no CSS do projeto, Footer
4. Ajustes no CSS do projeto, Header
5. Criar novos componentes
6. Criar componente Banner
7. Copiar imagens de banners para a pasta images dentro de public
8. Criar pastas e arquivos do componente
9. index.js do Banner
10. CSS do Banner, as imagens tem por padrão 1920x347
11. Criar componente Container
12. Criar pastas e arquivos do componente
13. Colocar conteúdos nos componentes, usando props.children
14. Em App.js usar o componente Container e passar o children (h1 e p)
15. CSS do Container
16. Dinamizar a troca de imagens do Banner com props
17. Injetar style inline na tag de abertura
18. Retirar a propriedade background-image do CSS
19. Dinamizar a informação sobre a imagem do Banner, usando props
20. Passar a props image no componente Banner

4ª Commit:

1. Ajustes para retirar informações do App.js
2. Criar componente Card
3. Usar o Card na nossa aplicação
4. CSS de Card
5. Ajuste do CSS do Container
6. Organizar os Cards com seus títulos
7. Criar section para organizar título e Card
8. CSS (global) index.css para criar uma formatação do .card que está em App
9. CSS de Card (ajuste)
10. Motivação para mapear o JSON
11. Ajustes no componente Card para usarmos o dados do JSON
12. Passar as props id para os Cards
13. Dinamizar os Cards pegando os IDs do JSON
14. Criar a pasta json dentro de src
15. Import dos videos do arquivo db.json
16. Map sem o uso do key, corrigir
17. Props key
18. Criar outras categorias com para listas de Cards

5º Commit:

1. Novo arquivo JSON, videos.json
2. Atualizar o import de mapeamento dos vídeos
3. Criar componente Category
4. Usar o componente Category
5. CSS de Category
6. Preparação para filtrar vídeos por categoria
7. Criar a const cateogories
8. Filtrar vídeos por categoria
9. Criar função filterCategory
10. Usar a função filterCategory
11. Copie a estrutura de Category para fazer as outras categorias

6º Commit:

1. Começar a refatorar o código
2. Resolução do 'Problema' de escopo da const categories e function filterCategory
3. Solução dos 'erros' no arquivo index.js de Category
4. Solução do erro da const categories
5. Ajuste do import para receber a const e da function
6. Solução do erro da function filterCategory
7. Ajuste do import para receber a const e da function
8. 'Erro' do import de vídeos em App.js

7º Commit:

1. Instalar a lib react-router-dom
2. Começo da criação de páginas
3. Organização do projeto em páginas
4. Criação de pastas e arquivos das pages
5. Page Home
6. Refatorar arquivo App.js
7. 'Problema' de imports no arquivo index.js de Home
8. Solução dos problemas de imports em Home
9. Page Watch
10. Testar page Watch
11. Rotas
12. Criar arquivo routes.js
13. Usar AppRoutes de router.js
14. Refatorar componente Header
15. Finalizar a page Watch
16. CSS de Watch
17. Incorporar um vídeo do YouTube em Watch
18. Ajuste no CSS do Container
19. Aumentar o tamanho do vídeo incorporado
20. Refatoração da página home do projeto em php para transformar tudo em componentes e modularizar
21. Transformei meu App em App Spa com páginas dinâmicas, com routes, utilizando react-router-dom.

8º Commit:

1. Consertar o Layout
2. Criar nova página Erro 404
3. Criar nova rota para PageNotFound
4. Estrutura de página completa para PageNotFound
5. Ajustes no CSS
6. Ajuste no CSS de Footer
7. Ajuste no index.css
8. CSS de Category
9. CSS de Container
10. CSS do container de PageNotFound

9º Commit:

1. Criar rota dinâmica passando parâmetros
2. Ajuste no routes.js
3. Ajuste no componente Watch para pegar o id dos parâmetros da rota(The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.)
4. Buscar o vídeo por id na nossa lista de videos.json
5. Exibir o iframe com base no id do card que foi clicado
6. Ajuste no componente Card para usar o Link e ir para rota /watch/id passando o id do video

10º Commit:

1. O que são React Hooks?
2. Situação prática de criação do useState()
3. Criação do search
4. Estudo do conceito de imutabilidade do react dentro do input(Se não tiver nada que avise o react que faça renderização desse componente ou que mude o componente ele não mudará)
5. Utilizei um hook usestate para modificar o layout do h2 em search, após eu capturar o conteúdo do input com um event.target.value, criando assim uma função setter.

11º Commit:

1. Criar nova página Search
2. Criar nova rota para /search
3. Criar novo componente VideoList que lista todos os vídeos
   Este componente será usado para exibir a lista de vídeos
4. Criar um componente de input que eu possa manipular e criar um filtro para aba de pesquisa lendo meu json(Também transformei tudo em letras minusculas nessa função, para evitar conflitos de busca em videos com titulos em caixa alta ou baixa)

12º Commit:

1. Usar lib React Slick para criar Carousel dos cards
2. Instalar o react-slick
3. Importar o CSS do react-slick
4. Criar componente Carousel personalizado usando o React Slick
5. Usar o Carousel na page Biblioteca
5. Ajustes no CSS dos componentes: Container, Category, Card e Carousel(carousel.css)
6. formatei a barra de rolagem da página também

13º Commit:
