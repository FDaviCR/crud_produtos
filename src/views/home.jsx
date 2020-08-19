import React from 'react';

function Home(){
    return (
        <div class="jumbotron">
            <h1 class="display-3">Bem vindo!</h1>
            <p class="lead">
                Esse é o sistema.    
            </p>
            <hr class="my-4"/>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="cadastrar" role="button">Cadastrar</a>
            </p>
        </div>
    )
}

export default Home