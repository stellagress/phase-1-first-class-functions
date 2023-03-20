function receivesAFunction (callback){
    return callback()
}



function returnsANamedFunction (){
    return function toBeReturned(){return "I am getting returned"}
}




function returnsAnAnonymousFunction (){
    return function(){ return "Now, I am getting returned"}
}