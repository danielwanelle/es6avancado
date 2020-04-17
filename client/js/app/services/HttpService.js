class HttpService {
    get(rota){
        return new Promise((resolve, reject) =>{
            let xhr = new XMLHttpRequest();
            xhr.open('GET', rota);
            /**
             * Estados requisisões AJAX;
             * 0: requisição não iniciada;
             * 1: conexão estabelecida com o servidor;
             * 2: requisição recebida;
             * 3: processando requisição;
             * 4: requisição concluida e a resposta está pronta.
             */
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject(xhr.responseText());
                    }
                }
            };
            xhr.send();
        })
    }
}