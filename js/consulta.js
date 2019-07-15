function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}
const card = document.getElementById('cards_item');
const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

fetch(url)
.then((response) => response.json())
.then(cards => {
cards.forEach(listaItem => {
    let div = createNode('div'),
    br = createNode('br'),
    img = createNode('img'),
    span = createNode('span'),
    h3 = createNode('h3'),
    p = createNode('p'),
    tipo = document.createTextNode(listaItem["property_type"]),
    nome = document.createTextNode(listaItem["name"]),
    preco = document.createTextNode(" Preço: $" + listaItem["price"] + " por noite");
    img.src = listaItem["photo"];
    append(div, img);
    append(div, p);
    append(div, br);
    append(div, span);
    append(div, br);
    append(div, h3);
    append(p, tipo);
    append(div, br);
    append(span, nome);
    append(div, br);
    append(h3, preco);
    append(cards_item, div);
    })
})

.catch(function(error){
	console.log(JSON.stringify(error));
})