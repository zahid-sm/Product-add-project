//form validation 

const setAlert = (msg , type= 'danger') => {
    return ` <p class="alert alert-${type} d-flex justify-content-between"> ${msg} <button  data-bs-dismiss="alert"  class="btn-close"></button></p> `
}

/**
 * Age Number Check
 */

const ageCheck = (num) => {
    
    let agepertten = /^[0-9]{1,3}$/;

    return agepertten.test(num)
}


/**
 * Set LS Value
 */

const createLSData = (key, value) => {

    let data = [];
    if(localStorage.getItem(key)) {
        data = JSON.parse(localStorage.getItem(key));
    }

    data.push(value);
    localStorage.setItem(key, JSON.stringify(data));
}


/**
 * Get All LS Data
 */

const readLSData = (key) => {

    if (localStorage.getItem(key)) {

        return JSON.parse(localStorage.getItem(key))
    }else{
        return false;
    }

   
}