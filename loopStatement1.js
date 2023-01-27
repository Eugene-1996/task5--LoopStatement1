function giveMeFive(obj){
    let b = []

    for (var key in obj){
        
        if (key.length == 5){
            b.push(key)
        }
        if (obj[key].length == 5){
            b.push(obj[key])
        }
        console.log(obj[key])
     }
     return b
    }
     
  


console.log(giveMeFive({Pears:"than",apple:"sweet"}))