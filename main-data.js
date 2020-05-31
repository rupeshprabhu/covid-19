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
document.getElementById('myData').innerHTML = thou(output);

let todaycases = '';
todaycases +=(`(+${data.todayCases})`)
document.getElementById('todayCases').innerHTML = thou(todaycases);

let recovered = '';
recovered +=(`${data.recovered}`)
document.getElementById('recovered').innerHTML = thou(recovered);

let deaths = '';
deaths +=(`${data.deaths}`)
document.getElementById('deaths').innerHTML = thou(deaths);

let todayDeaths = '';
todayDeaths +=(`(+${data.todayDeaths})`)
document.getElementById('todayDeaths').innerHTML = thou(todayDeaths);

let activeCases = output-recovered-deaths;
document.getElementById('active').innerHTML = thou(activeCases);

let perrec = recovered/(output-deaths)*100;
document.getElementById('perrec').innerHTML = (perrec.toFixed(2)+'%');
//console.log(perrec.toFixed(2));

let peract = activeCases/(output-deaths)*100;
document.getElementById('peract').innerHTML = (peract.toFixed(2)+'%');
//console.log(peract.toFixed(2));
function thou(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

})
.catch(error => {
console.log('Error in the url');
});
