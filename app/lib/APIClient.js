import axios from 'axios';

/**
 * Intercept responses so we can handle errors
 * @param {Function} response function to execute on a successful call
 * @param {Function} error    function to deal with failed requests
 */
axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const msg = error.response ? error.response.data[0] : 'Unknown API error';
    return Promise.reject(msg);
});

/**
 * This class makes easier to work with the API
 */
class APIClient {
    constructor(root_url) {
        this.root_url = root_url;
    }

    /**
     * Make a DELETE request to the API
     * @param {string} path  api path to send the request
     */
    delete = (path: string) => {
        return axios.delete(this.url(path), this.headers());
    }

    /**
     * Make a POST request to the API
     * @param {string} path  api apth to send the request
     * @param {object} data data object we wish to send
     */
    post = (path: string, data: object) => {
        return axios.post(this.url(path), data, this.headers());
    }

    /**
     * Make a PUT request to the API
     * @param {string} path  api path to send the request
     * @param {object} data data object we wish to send
     */
    put = (path: string, data: object) => {
        return axios.put(this.url(path), data, this.headers());
    }

    /**
     * Make a GET request from the API
     * @param {string} path api path to send the request
     */
    get = (path: string) => {
        return axios.get(this.url(path), this.headers());
    }

    url = (path: string) => {
        return `${this.root_url}${path}`;
    }

    headers = () => {
        return {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'responseType': 'json',
            },
        };
    }
}

export default APIClient;
