fetch('https://corona.lmao.ninja/v2/countries/brazil')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
    document.querySelector('.data-ativos').innerHTML = data.active;
    document.querySelector('.data-total').innerHTML = data.cases;
    document.querySelector('.data-criticos').innerHTML = data.critical;
    document.querySelector('.data-mortes').innerHTML = data.deaths;
    document.querySelector('.data-recuperados').innerHTML = data.recovered;
    document.querySelector('.data-testados').innerHTML = data.tests;
})