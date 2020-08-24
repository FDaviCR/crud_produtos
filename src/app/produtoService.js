const PRODUTOS = '_PRODUTOS';

export function ErroValidacao(errors){
    this.errors = errors;
}

export default class ProdutoService {

    validar = (produto) => {
        const errors = [];

        if(!produto.nome){
            errors.push('O campo NOME deve ser preenchido.')
        }
        if(!produto.sku){
            errors.push('O campo SKU deve ser preenchido.')
        }
        if(!produto.preco || produto.preco <= 0){
            errors.push('O campo PREÇO deve ser preenchido e maior que zero!')
        }
        if(!produto.fornecedor){
            errors.push('O campo FORNECEDOR deve ser preenchido.')
        }

        if(errors.length > 0){
            throw new ErroValidacao(errors)
        }
    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS)
        return JSON.parse(produtos)
    }

    salvar = (produto) => {
        this.validar(produto);

        let produtos = localStorage.getItem(PRODUTOS);

        if(!produtos){
            produtos = [];
        }else{
            produtos =  JSON.parse(produtos);
        }

        produtos.push(produto);

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }
}