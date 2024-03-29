//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input){
    let obj={};
    for(let i=0;i<input.length;i++)
    {
      if(obj[input[i]])
      {
        return input[i];
      }
      else if(!obj[input[i]])
      {
        obj[input[i]]=1;
      }
      else
      {
        return undefined;
      }
    }
  }//O(n)

  function firstRecurringCharacter2(input) {
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        if(input[i] === input[j]) {
          return input[i];
        }
      }
    }
    return undefined
  }//O(n^2)
  
  firstRecurringCharacter([1,2,3,4,5,6,7,2]);
  //Bonus... What if we had this:
  // [2,5,5,2,3,5,1,2,4]
  // return 5 because the pairs are before 2,2