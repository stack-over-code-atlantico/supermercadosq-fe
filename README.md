# supermercadosq-fe
Projeto do bootcamp academy do Instituto Atlântico

Através do https
```
    git clone https://github.com/stack-over-code-atlantico/supermercadosq-fe.git
```

Através do ssh
```
    git clone git@github.com:stack-over-code-atlantico/supermercadosq-fe.git
```

Utilizamos o `npm install` para instalar todas as depedências utilizadas no projeto.

```
    npm install 
```
Para essa próxima etapa é necessário ter o arquivo `.env` configurado

E, por fim, usamos o `npm run dev` para iniciar o servidor em modo de desenvolvimento utilizado no endereço: [http://localhost:3000](http://localhost:3000)
```
    npm run dev
```

## Dependências

<ul>
    <li>
        <a href="https://apexcharts.com/">
            apexcharts/react-apexcharts
        </a>
    </li>
    <li>
        <a href="https://axios-http.com/ptbr/docs/intro">
            axios
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/cpf-cnpj-validator">
            cpf-cnpj-validator
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/date-fns">
            date-fns
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/js-cookie">
            js-cookie
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/jwt-decode">
            jwt-decode
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/nookies">
            nookies
        </a>
    </li>
     <li>
        <a href="https://www.npmjs.com/package/react">
            react
        </a>
    </li>
     <li>
        <a href="https://www.npmjs.com/package/react-dom">
            react-dom
        </a>
    </li>
     <li>
        <a href="https://www.npmjs.com/package/react-hook-form">
            react-hook-form
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/react-icons">
            react-icons
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/react-paginate">
            react-paginate
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/react-router-dom">
            react-router-dom
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/react-select">
            react-select
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/react-type-animation">
            react-type-animation
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/styled-components">
            styled-components
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/typewriter-effect">
            typewriter-effect
        </a>
    </li>
</ul>

## Depedências de desenvolvimento
<ul>
    <li>
        <a href="https://www.npmjs.com/package/@types/react">
            @types/react
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/@types/react-dom">
            @types/react-dom
        </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/package/@vitejs/plugin-react">
            @vitejs/plugin-react
        </a>
    </li>
    <li>
        <a href="https://vitejs.dev/">
            vite
        </a>
    </li>
</ul>

## Pastas

Por padrão, estamos usando a pasta `supermercadosq-fe` para manipularmos git e github e estamos usando `supermercadosq` para colocarmos todo o código assim como suas dependências

## Telas
### Home

A primeira tela é a de início, onde haverá uma breve amostra da identidade visual do site. Lá há as opções de ver o blog (onde ficam as postagens), sobre o nosso projeto, algumas das alergias principais e a opção de registrar-se e logar.

### Blog/Postagens

A tela de postagens é onde há todas as postagens dos usuários. Nessa tela há uma validação do tipo de usuário.
- Caso o usuário não esteja logado, ele poderá, apenas, ver as postagens como registrar-se no site.
- Caso o usuário seja Cliente ou Fornecedor, ele poderá criar postagens, editar suas postagens, comentar, denunciar, etc.
- Caso o usuário seja Administrador, ele terá acesso a tudo isso e a pagina de Dashboard.

Há a paginação de acordo com a quantidade de postagens, um filtro funcionando de acordo com as alergias e postagens e comentários funcionando como modais para melhor experiencia do usuário e rápida visualização.

### Perfil

A tela de perfil de cada usuário poderá ser editada todas as informações, desde de informações pessoais, até sua senha. Também há a possibilidade de ver suas ultimas publicações e comentários, funcionando como um histórico.

### Dashboard

Tela acessada somente pelo Administrador, onde será feita a analise de denuncias feitas em comentários e postagens. Lá é onde é mantido o controle de toda aplicação relacionado às postagens.

### Login

Tela para fazer o login e adentrar ao site. Através dela tela é retornado 2 tokens. Um chamado 'token' onde retorna as informações do usuário e um chamado 'expires' onde o token é expirado depois de um certo tempo (1h).

### Cadastro

Tela para ser criada uma conta para ser utilizada afim de postar e comentar os diversos produtos.

## Arquitetura de pastas

<img src="https://i.ibb.co/VYRYWYr/Screenshot-1.png" fullWidth/>

## Requisições e comunicação com o servidor

Todas as requisições estão sendo feitas através do Axios, utilizadas nas pastas de "services" e "utils" onde é feito a comunicação com a API.
