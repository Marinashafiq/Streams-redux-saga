import axios from 'axios';
import { requestHandler, errorHandler, successHandler } from '../interceptor';


const streams = axios.create({
    baseURL: `http://localhost:3001`
});



// Add interceptors
streams.interceptors.request.use(request => requestHandler(request))

streams.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
)

export default streams;