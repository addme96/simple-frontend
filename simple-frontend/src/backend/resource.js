class ResourceRepo {
    constructor() {
        this.URL = process.env.REACT_APP_BACKEND_DNS_NAME + "/resources"
    }

    post (){

    }

    get (id) {
        return fetch(this.URL + "/" + id)
            .then(response => response.json())
    }

    list () {
        return fetch(this.URL)
            .then(response => response.json())
    }

    put () {

    }

    delete () {

    }
}

export default ResourceRepo