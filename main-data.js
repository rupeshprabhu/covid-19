fetch('https://coronavirus-19-api.herokuapp.com/countries/india')
    .then(response => {
        if(!response.ok) {
            throw Error('ERROR');
        }
        return response.json();
    })
    .then(data => {
        //console.log(data);
        //document.getElementById('myData').innerHTML = data.country;
        /*document.querySelector('#myData')
        .insertAdjacentHTML('afterbegin', html);*/
        
        let output = '';
            output +=(`${data.cases}`)
        
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
    })
    .catch(error => {
        console.log('Error in the url');
    });
