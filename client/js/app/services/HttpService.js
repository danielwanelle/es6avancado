class HttpService {
    _handleErrors(res){
        if(!res.ok) throw new Error(res.statusText);
        return res;
    }
    get(rota){
        return fetch(rota)
            .then(res => this._handleErrors(res))
            .then(res => res.json());
    }
}