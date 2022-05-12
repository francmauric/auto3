function agregarHttp(url) {
    return "http://" + url;
}

function procesar(array,agregarHttp){
    let array1 = [];

    for(let i=0; i<=array.length; i++){
        array1.push( agregarHttp (array[i]))
       
    } 
    return array1
    
}