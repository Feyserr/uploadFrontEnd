
Para rodar o projeto basta clonar os repositorios uploadFrontEnd e uploadBackEnd do git hub
instalar o node_modules com o comando npm install, após a instalaçao
do node_modules entrar na pasta do FrontEnd e executar no cmd o comando yarn start 
e realizar os testes normal, pois o banco feito no PostgreSQL foi hospedado no Heroku e está
funcionando normalmente.

O projeto foi realizado usando nodeJS pra fazer a integração com o banco e o FrontEnd feito 
em ReactJS, no front foi utilizado React Hooks como o useState para pegar valores como os campos
digitados nos inputs e poder alterar a propiedade deles. Foi também utilizada a biblioteca 
React Router para fazer a integração entre as telas a partir de rotas. Foi utilizado o useEffect 
para executar uma função assim que renderizar na tela. Foi utilizado o axios para fazer
as requisições das rotas do node e foi utilizado o Styled Components junto com o css para 
fazer a estilização  das páginas. Os sistemas de pasta ficou organizado entre componentes, 
menu, pages para melhor organização e no backEnd tentei fazer uma organização entre as pastas 
de forma que ficou uma pasta config que possui a conexao com o banco de dados, uma pasta 
controllers para fazer os metodos das requisições, a pasta route que ficou responsavel pelas rotas
feitas a partir da pasta service e a pasta service, que deixa o controller mais limpo e com uma única
responsabilidade, mandando para as rotas os metódos criado no controller.
