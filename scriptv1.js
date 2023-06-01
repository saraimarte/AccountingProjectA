var activities = [
  "Purchasing equipment",
  "Paying dividends",
  "Selling products",
  "Buying inventory",
  "Hiring new employees",
  "Paying salaries",
  "Hosting a Marketing campaign",
  "Hosting a conference",
  "Purchasing supplies",
  "Interviewing job applicants",
  "Investing in stocks",
  "Attending an industry conference",
]
var answers = ['Yes', 'Yes', 'Yes', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'Yes', 'No']



//STEP 1 DISPLAYING RANDOM ACTIVITIES (THAT DONT REPEAT)
var activityDisplays = document.querySelectorAll(".activity");
var amountOFActivities = activityDisplays.length
function generateChoices(max){
  var orderedSelections = []
  for(var counter = 1; counter <= max; counter ++){
    orderedSelections.push(counter)
  }
  return orderedSelections;
}

function shuffleSelections(array){
  for(var counter = 1; counter < array.length; counter ++){
     var randomSelection = Math.floor(Math.random() * (counter + 1));
    [array[counter],array[randomSelection]] = [array[randomSelection], array[counter]]
  }
}
var max = amountOFActivities
var orderedSelections = generateChoices(max);
shuffleSelections(orderedSelections);
console.log(orderedSelections);

for(var counter = 0; counter < max; counter ++){
  activityDisplays[counter].textContent = activities[orderedSelections[counter]]
  activityDisplays[counter].classList.add(answers[orderedSelections[counter]]);

}
