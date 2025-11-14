// ======================
// Daily Goals Tracker - JavaScript Skeleton
// ======================

// 1. SELECT IMPORTANT ELEMENTS FROM THE DOM
// ----------------------------------------
// TODO: Use document.getElementById to select:
// - goalInput (text input)
// - prioritySelect (select box)
// - addGoalBtn (button)
// - goalList (ul where we will add <li>)
// - totalGoalsSpan (span showing total goals)
// - completedGoalsSpan (span showing completed goals)

const goalInput = document.getElementById("goal-input");            // TODO: replace null
const prioritySelect = document.getElementById("priority-select");       // TODO: replace null
const addGoalBtn = document.getElementById("add-goal-btn");           // TODO: replace null
const goalList = document.getElementById("goal-list");             // TODO: replace null
const totalGoalsSpan = document.getElementById("total-goals");       // TODO: replace null
const completedGoalsSpan = document.getElementById("completed-goals");   // TODO: replace null


// 2. ATTACH EVENT LISTENER TO THE "ADD GOAL" BUTTON
// -------------------------------------------------
// TODO: Add a "click" event listener on addGoalBtn.
// When the button is clicked, we will call handleAddGoal function.

addGoalBtn.addEventListener("click", handleAddGoal);



// 3. HANDLE ADD GOAL
// ------------------
// This function will:
//  - Read the text and priority from the inputs
//  - Validate the input
//  - Create a new <li> element
//  - Add "Done" and "Delete" buttons
//  - Append the <li> to the list
//  - Clear the input
//  - Update stats

function handleAddGoal() {
    // 3.1 READ VALUES FROM INPUTS
    // TODO: Get value of goalInput (goal text)
    // TODO: Get value of prioritySelect (priority: low/medium/high)

    const goalText = goalInput.value;      // TODO: replace empty string with real value
    const priority = prioritySelect.value;      // TODO: replace empty string with real value

    // 3.2 BASIC VALIDATION
    // If goalText is empty (""), we don't want to add an empty goal.
    // TODO: If goalText is empty, show alert and return.
    if (goalText === "") {
        alert("Please enter a goal");
        return;
    }


    // 3.3 CREATE <li> ELEMENT FOR THE NEW GOAL
    // TODO: Use document.createElement to create a "li"
    const li = document.createElement("li"); // TODO: replace null with created li

    // Add a class name for styling (goal-item)
    // TODO: Add class "goal-item"
    li.classList.add("goal-item");



    // 3.4 CREATE INNER STRUCTURE (TITLE + PRIORITY + BUTTONS)
    // We will create:
    // <div class="goal-main"> ... </div>
    // <div class="goal-actions"> ... </div>

    // TODO: Create a div for "goal-main"
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("goal-main"); // TODO

    // TODO: Create a span for goal title (class "goal-title")
    const titleSpan = document.createElement("span"); 
    titleSpan.classList.add("goal-title"); // TODO
    // TODO: Set textContent of titleSpan to goalText
    titleSpan.textContent = goalText;


    // TODO: Create a span for priority badge (class "goal-tag" + specific class)
    const tagSpan = document.createElement("span"); 
    tagSpan.classList.add("goal-tag"); // TODO
    // TODO: Set textContent to priority (e.g. "High", "Medium", "Low")
    tagSpan.textContent = priority;


    // 3.5 SET PRIORITY COLOR CLASS
    // For priority, we will use:
    //  - "goal-tag--low"
    //  - "goal-tag--medium"
    //  - "goal-tag--high"
    // TODO: Use if/else to add the correct class based on "priority" value.
    if (priority === "low") {
        tagSpan.classList.add("goal-tag--low");
    } else if (priority === "medium") {
        tagSpan.classList.add("goal-tag--medium");
    } else if (priority === "high") {
        tagSpan.classList.add("goal-tag--high");
    }

    // TODO: Append titleSpan and tagSpan inside mainDiv
    mainDiv.appendChild(titleSpan);
    mainDiv.appendChild(tagSpan);
   


    // 3.6 CREATE BUTTONS ("Done" and "Delete")
    // TODO: Create a div for "goal-actions"
    const actionsDiv = document.createElement("div"); // TODO

    // TODO: Create "Done" button, add class "goal-btn" and "done-btn"
    const doneBtn = document.createElement("button"); // TODO
    doneBtn.classList.add("goal-btn", "done-btn");
    // TODO: Set button text to "Done"
    doneBtn.textContent = "Done";



    // TODO: Create "Delete" button, add class "goal-btn" and "delete-btn"
    const deleteBtn = document.createElement("button"); // TODO
    deleteBtn.classList.add("goal-btn", "delete-btn");
    // TODO: Set button text to "Delete"
    deleteBtn.textContent = "Delete";


    // 3.7 ATTACH EVENT LISTENERS TO THE BUTTONS
    // When "Done" is clicked:
    //  - Toggle the "completed" class on <li>
    //  - Then call updateStats()
    // TODO: Add click listener for doneBtn
    doneBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateStats();
    })

    // When "Delete" is clicked:
    //  - Remove the <li> from the DOM
    //  - Then call updateStats()
    // TODO: Add click listener for deleteBtn
    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateStats();
    })


    // 3.8 Put buttons inside actionsDiv
    // TODO: append doneBtn and deleteBtn into actionsDiv
    actionsDiv.appendChild(doneBtn);
    actionsDiv.appendChild(deleteBtn);


    // 3.9 Put mainDiv and actionsDiv inside li
    // TODO: append mainDiv and actionsDiv into li
    li.appendChild(mainDiv);
    li.appendChild(actionsDiv);


    // 3.10 ADD li TO THE UL (goalList)
    // TODO: Append li to goalList
    goalList.appendChild(li);


    // 3.11 CLEAR THE INPUT AFTER ADDING
    // TODO: Set goalInput.value to empty string ""
    goalInput.value = "";


    // 3.12 UPDATE STATS
    // TODO: Call updateStats() here
    updateStats();
}


// 4. UPDATE STATS (Total and Completed counts)
// --------------------------------------------
// This function will:
//  - Count total goals (all li elements)
//  - Count completed goals (li elements with class "completed")
//  - Update the spans in the stats section

function updateStats() {
    // 4.1 GET ALL GOAL ITEMS
    // TODO: Get all goal items
    const allItems = document.querySelectorAll(".goal-item"); // TODO: replace [] with real NodeList

    // 4.2 COUNT TOTAL GOALS
    const total = allItems.length; // total count of goals

    // 4.3 COUNT COMPLETED GOALS
    // Hint: you can use a simple loop

    let completedCount = 0; // TODO: fill this using a loop
    allItems.forEach((item) => {
        if (item.classList.contains("completed")) {
            completedCount++;
        }   
    })
    

    // 4.4 UPDATE THE DOM
    totalGoalsSpan.textContent = total;
    completedGoalsSpan.textContent = completedCount;    

}
