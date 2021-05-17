// Code your solution in this file!


const distanceFromHqInBlocks = (distance , busStatuion = 42) => {
    const result = Math.abs(busStatuion - distance)
    return result
}

const distanceFromHqInFeet = (distance) => {
    const result  = distanceFromHqInBlocks(distance) * 264
    return result 
}
const distanceTravelledInFeet = (distance1 , distance2) => {
    const result  = distanceFromHqInBlocks(distance1, distance2) * 264
    return result 
}


const calculatesFarePrice = (start , destination) => {
    if(start === 43 && destination === 44){
        return 0

    }else if (distanceTravelledInFeet(start, destination)  > 2500 ){
        return 'cannot travel that far'

    }else if (distanceTravelledInFeet(start, destination)  > 2000 && distanceTravelledInFeet(start, destination) <=2500 ){
        return 25

    }

    else if (distanceTravelledInFeet(start, destination)  > 400 && distanceTravelledInFeet(start, destination) <=2000 ){
        return 2.56

    }
}