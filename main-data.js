async function getCovidapi() {
    //API intializattion
    try {
        const jsondata = await fetch('https://coronavirus-19-api.herokuapp.com/countries/india');
        const jsdata = jsondata.json();
        //console.log(jsdata);
        return jsdata;
    } catch (error) {
        console.log('error in url');
    }
}
getCovidapi()
    .then(data => {
        //confirmed cases
        let output = '';
        output += (`${data.cases}`)
            // console.log(data);
        document.getElementById('myData').innerHTML = thou(output);

        //todays cases
        let todaycases = '';
        todaycases += (`(+${data.todayCases})`)
        document.getElementById('todayCases').innerHTML = thou(todaycases);

        //recovered cases
        let recovered = '';
        recovered += (`${data.recovered}`)
        document.getElementById('recovered').innerHTML = thou(recovered);

        //deaths
        let deaths = '';
        deaths += (`${data.deaths}`)
        document.getElementById('deaths').innerHTML = thou(deaths);

        //todays death
        let todayDeaths = '';
        todayDeaths += (`(+${data.todayDeaths})`)
        document.getElementById('todayDeaths').innerHTML = thou(todayDeaths);

        //active case
        let activeCases = output - recovered - deaths;
        document.getElementById('active').innerHTML = thou(activeCases);

        //percantage of recovered cases
        let perrec = recovered / output * 100;
        document.getElementById('perrec').innerHTML = (perrec.toFixed(2) + '%');
        //console.log(perrec.toFixed(2));

        //percantage of active cases
        let peract = activeCases / output * 100;
        document.getElementById('peract').innerHTML = (peract.toFixed(2) + '%');
        //console.log(peract.toFixed(2));

        //percantage of death cases
        let perdea = deaths / output * 100;
        document.getElementById('perdea').innerHTML = ('The percentage of the people died due to Covid-19 is ' + perdea.toFixed(2) + '%');

        //thousands seperator
        function thou(num) {
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        }

    })
    /*.catch(error => {
         console.log('Error in the url');
    }); 
    */