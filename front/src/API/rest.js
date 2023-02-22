const apiUrl = 'https://yvandev.fr/analyz';

const rest = {
    getAllRepartition () {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        return fetch(apiUrl + '/repartition/all', requestOptions);
    },

    getRepartitionByCity (city) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        return fetch(apiUrl + '/repartition/city/' + city, requestOptions);
    },

    getRepartitionByAge (age) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        return fetch(apiUrl + '/repartition/age/' + age, requestOptions);
    },

    getRepartitionBySexe (sexe) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        return fetch(apiUrl + '/repartition/sexe/' + sexe, requestOptions);
    },

    getRepartitionByAgeAndSexe (age, sexe) {
        let myHeaders = new Headers();
        console.log(apiUrl + '/repartition/age/' + age + '/sexe/' + sexe);
        myHeaders.append('Content-Type', 'application/json');
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        return fetch(apiUrl + '/repartition/age/' + age + '/sexe/' + sexe, requestOptions);
    },

    getRepartitionByCityAndSexe (city, sexe) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        return fetch(apiUrl + '/repartition/city/' + city + '/sexe/' + sexe, requestOptions);
    },

    getRepartitionByCityAndAge (city, age) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        return fetch(apiUrl + '/repartition/city/' + city + '/age/' + age, requestOptions);
    },

    getRepartitionByCityAndAgeAndSexe (city, age, sexe) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        return fetch(apiUrl + '/repartition/city/' + city + '/age/' + age + '/sexe/' + sexe, requestOptions);
    },
};

export default rest;