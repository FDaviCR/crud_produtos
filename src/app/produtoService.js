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
        if(!produtos){
            return [];
        }
        return JSON.parse(produtos)
    }

    obterIndex = (sku) => {
        let index = null;

        this.obterProdutos().forEach((produto, i) => {
            if(produto.sku === sku) {
                index = i;
            }
        })
        return index;
    }

    deletar = (sku) => {
        const index = this.obterIndex(sku);
        if(index !== null) {
            const produtos = this.obterProdutos()
            produtos.slice(index, 1)
            localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
            return produtos;
        }
    }

    salvar = (produto) => {
        this.validar(produto);

        let produtos = localStorage.getItem(PRODUTOS);

        if(!produtos){
            produtos = [];
        }else{
            produtos =  JSON.parse(produtos);
        }

        const index = this.obterIndex(produto.sku);
        if(index === null){
            produtos.push(produto);
        }else{
            produtos[index] = produto;
        }
        
        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }
}