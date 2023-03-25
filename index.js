// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const blockNumber = Math.abs(42 - someValue);
    //if (blockNumber<0){ blockNumber = blockNumber * (-1);}
    return blockNumber;
  }

  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    const feet = distanceFromHqInBlocks(someValue) * 264;
    return feet;
  }
  
  console.log(distanceFromHqInFeet(34));

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const distanceTravelledFeet= Math.abs(start - destination)*264;
    return distanceTravelledFeet;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distanceFeet= Math.abs(start - destination)*264;
    if(distanceFeet<=400){
      const fare=0;
      return fare
    }
    else if(distanceFeet>400 && distanceFeet<=2000)
    {
      const fare=(distanceFeet-400)/50;
      return fare
    }
    else if(distanceFeet>2000 && distanceFeet<2500){
      const fare=25;
      return fare

    }
    else return 'cannot travel that far'
  }