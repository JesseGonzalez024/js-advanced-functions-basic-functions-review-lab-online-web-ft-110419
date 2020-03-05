// Your code here
function saturdayFun(activity = "roller-skate") {
     return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flare = "*") {
    return function (params = "special") {
        return `You are ${flare}${params}${flare}!`
    }
}
