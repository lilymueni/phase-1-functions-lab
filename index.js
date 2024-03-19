function distanceFromHqInBlocks(someNumber){
    if(someNumber > 42){
    return someNumber - 42;
}else{
    return 42 - someNumber;
}
}

function distanceFromHqInFeet(someNumber){
    let blocks = distanceFromHqInBlocks(someNumber);
    return blocks * 264;
}
 function distanceTravelledInFeet(start, destination){
    if(destination > start){
    return (destination - start) * 264;
 }else{
    return (start - destination)* 264;
 }
}
function calculatesFarePrice(start, destination) {
    let distance= Math.abs(destination - start)*264;
    let price;
    if(distance <= 400){
        return price = 0;
    }else if(distance >= 400 && distance < 2000){
        return price = (distance - 400) * 0.02;
    }else if(distance > 2000 && distance <= 2500){
        return price = 25;
    }else{
        return 'cannot travel that far';
    }
  }
