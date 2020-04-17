class DateHelper {
    constructor(){
        throw new Error('DateHelper não pode ser instanciada!');
    };
    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('As datas devem estar no formado YYYY-mm-dd');
        return new Date(texto.split('-'));
    };
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    };
}