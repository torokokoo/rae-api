const jsdom = require('jsdom');
const fetch = require('node-fetch');
const { JSDOM } = jsdom;
const http = require('http');


module.exports = function (req) {

    return fetch(`https://dle.rae.es${req}`)
    .then(response => {
        return response.text()
    })

    .then(res => {

        const dom = new jsdom.JSDOM(res);

        var resultados = dom.window.document.getElementById('resultados');
        // Palabra
        var word = resultados.getElementsByTagName('header')[0].textContent.replace(/[0-9]/g, '');

        // Definicion
        var def = dom.window.document.getElementsByClassName('j');

        json = {
            word: word,
            def: def[0].textContent
        }

        return(json)
    })

};