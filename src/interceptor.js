

const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
        false : true
}


export const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
        console.log("REQUEEST IS ON");
    }
    return request
}

export const errorHandler = (error) => {
    if (isHandlerEnabled(error.config)) {
        alert("EROOOOR");
        console.log("HANDLEDDD");
    }
    return Promise.reject({ ...error })
}

export const successHandler = (response) => {
    if (isHandlerEnabled(response.config)) {
        alert("SUCESSS");
        console.log("HANDLEDDD MARINAA INTERCEPTOR");

    }
    return response
}
