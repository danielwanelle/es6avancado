class NegociacaoService {
    constructor(){
        this._http = new HttpService();
    }
    obterNegociacoesDaSemana(){
        return this._obterNegociacoes('semana');
    }
    obterNegociacoesDaSemanaAnterior(){
        return this._obterNegociacoes('anterior');
    }
    obterNegociacoesDaSemanaRetrasada(){
        return this._obterNegociacoes('retrasada');
    }
    _obterNegociacoes(rota){
        return new Promise((resolve, reject) => {
            this._http
                .get(`negociacoes/${rota}`)
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro => reject(`Não foi possível recuperar as negociações da ${rota}`));
        });
    }
}