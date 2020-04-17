class Bind {
    constructor(model, view, ...props){ // <- Rest operator, pega tudo que vier non final como um array
        let proxy = ProxyFactory.create(model, props, model => view.update(model));
        view.update(model);
        return proxy;
    }
}