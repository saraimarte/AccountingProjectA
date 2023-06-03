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
function generateChoices(max) {
  var orderedSelections = []
  for (var counter = 1; counter <= max; counter++) {
    orderedSelections.push(counter)
  }
  return orderedSelections;
}

function shuffleSelections(array) {
  for (var counter = 1; counter < array.length; counter++) {
    var randomSelection = Math.floor(Math.random() * (counter + 1));
    [array[counter], array[randomSelection]] = [array[randomSelection], array[counter]]
  }
}
var max = amountOFActivities
var orderedSelections = generateChoices(max);
shuffleSelections(orderedSelections);
console.log(orderedSelections);

for (var counter = 0; counter < max; counter++) {
  activityDisplays[counter].textContent = activities[orderedSelections[counter]]
  activityDisplays[counter].classList.add(answers[orderedSelections[counter]]);

}



//STEP 2 MAKE ACTIVITIES DRAGGABLE  

var dragItem = null;
for (var activity of activityDisplays) {
  activity.addEventListener("dragstart", dragStart);
  activity.addEventListener("dragend", dragEnd);
}

function dragStart() {
  dragItem = this;
  setTimeout(() => this.style.display = "none", 0);
  this.style.border = "3px solid black"
}

function dragEnd() {
  setTimeout(() => this.style.display = "block", 0);
  dragItem = null;

}

//STEP 3 MAKING THE  ACTIVITIES DROPPABLE
var dropBoxes = document.querySelectorAll(".dropBoxes");



for (var dropBox of dropBoxes) {
  dropBox.addEventListener("dragover", dragOver);
  dropBox.addEventListener("dragenter", dragEnter);
  dropBox.addEventListener("dragleave", dragLeave);
  dropBox.addEventListener("drop", Drop);
}



function dragOver(e) {
  e.preventDefault();
  //this.style.border = "10px dotted cyan";

}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  //this.style.border = "5px solid black";

}

function Drop() {
  this.append(dragItem);


}

//LOGIC 06/01/23
var gradeBtn = document.getElementById("gradeButton");
var countDisplay = document.getElementById("count");
var rightCountDisplay = document.getElementById("rightCount");
var wrongCountDisplay = document.getElementById("wrongCount");

var column1 = document.getElementById("column1").length;

if (column1 > 2) {

  gradeBtn.addEventListener("click", function() {
    var rightCount = 0;
    var wrongCount = 0;
    var box1 = document.getElementById("box1");
    var yesArray = box1.getElementsByClassName("Yes");
    var noArray = box1.getElementsByClassName("No");
    for (var counter = 0; counter < yesArray.length; counter++) {
      yesArray[counter].style.border = "3px solid green";
    }
    for (var counter = 0; counter < noArray.length; counter++) {
      noArray[counter].style.border = "3px solid red";
    }
    yesCount = yesArray.length;
    noCount = noArray.length;
    console.log(box1.childNodes);
    //console.log("Yes count:", yesCount); 
    // console.log("No count:", noCount); 
    rightCount += yesCount;
    wrongCount += noCount;
    console.log("Right Answers:", rightCount);
    console.log("Wrong Answers:", wrongCount);
    //Box 2
    var box2 = document.getElementById("box2");
    var yesArray = box2.getElementsByClassName("Yes");
    var noArray = box2.getElementsByClassName("No");
    for (var counter = 0; counter < yesArray.length; counter++) {
      yesArray[counter].style.border = "3px solid red";
    }
    for (var counter = 0; counter < noArray.length; counter++) {
      noArray[counter].style.border = "3px solid green";
    }
    yesCount = yesArray.length;
    noCount = noArray.length;
    console.log(box2.childNodes);
    //console.log("Yes count:", yesCount); 
    //console.log("No count:", noCount); 
    rightCount += noCount;
    wrongCount += yesCount;
    console.log("Right Answers:", rightCount);
    console.log("Wrong Answers:", wrongCount);

    rightCountDisplay.textContent = rightCount;
    wrongCountDisplay.textContent = wrongCount;
    countDisplay.style.display = "block";


    if (wrongCount === 0) {
      gradeBtn.textContent = "Great, Play Again!";
      gradeBtn.addEventListener("click", function() {
        window.location.reload();

      })

    } else {
      gradeBtn.textContent = "Grade Again!"
    }

  });







}









