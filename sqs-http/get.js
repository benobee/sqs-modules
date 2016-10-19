
class Fetch {
	constructor(){
		this.get = this.get;
	}
	get(url, options){
        return fetch(url + '?format=json').then(function(response) {
            // Convert to JSON
            return response.json();
        }).then(function(data) {
          
            return data;
        });
	}
};

const HTTP = new Fetch();

export default HTTP;