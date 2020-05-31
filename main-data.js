async function getCovidapi() {
    const jsondata = await fetch('https://coronavirus-19-api.herokuapp.com/countries/india');
    const jsdata = await jsondata.json();
    //console.log(jsdata);
    return jsdata;
}
getCovidapi()
.then(data => {
    let output = '';
    output +=(`${data.cases}`)
   // console.log(data);
document.getElementById('myData').innerHTML = output;

let todaycases = '';
todaycases +=(`(+${data.todayCases})`)
document.getElementById('todayCases').innerHTML = todaycases;

let recovered = '';
recovered +=(`${data.recovered}`)
document.getElementById('recovered').innerHTML = recovered;

let deaths = '';
deaths +=(`${data.deaths}`)
document.getElementById('deaths').innerHTML = deaths;

let todayDeaths = '';
todayDeaths +=(`(+${data.todayDeaths})`)
document.getElementById('todayDeaths').innerHTML = todayDeaths;

let activeCases = output-recovered-deaths;
document.getElementById('active').innerHTML = activeCases;
})
.catch(error => {
console.log('Error in the url');
});
