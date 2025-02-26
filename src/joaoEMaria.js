let joao = 1;
let maria = 2;
function deJoaoParaMaria(params) {
    setMaria(getMaria() + getJoao());
    setJoao(0);
}
export {deJoaoParaMaria}

function deMariaParaJoao(params) {
    setJoao(getMaria() + getJoao());
    setMaria(0);
}
export {deMariaParaJoao}

function getMaria(params) {
    return maria;  
}
export {getMaria}

function getJoao(params) {
    return joao;
}
export {getJoao}

function setMaria(params) {
    maria = params;
}
export {setMaria}

function setJoao(params) {
    joao = params;
}
export {setJoao}



