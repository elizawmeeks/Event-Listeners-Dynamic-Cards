// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

var cardContent = document.getElementById("cardContent");
var button = document.getElementById("create");
var output = document.getElementById("addCards");
var deleteButton = document.getElementsByClassName("delete");
var addID = document.getElementsByClassName("addId");
var cardNumber = document.getElementsByClassName("card");

// button.addEventListener("click", function(event){
// 	var cardStructure = `<div class="card">
// 							<h2>${cardContent.value}</h2>
// 							<button class="delete">Delete</button>
// 						</div>`;
// 	var cardDiv = document.createElement("div");
// 	cardDiv.innerHTML = cardStructure;
// 	output.appendChild(cardDiv);
	
// 	console.log("deleteButton", deleteButton);
	
// 	for (var i = 0; i < deleteButton.length; i++){
// 		var specificButton = deleteButton.item(i);
// 		specificButton.addEventListener("click", function(event){
// 			console.log(`You pushed the delete button!`);
// 		});
// 	}
// });



// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

button.addEventListener("click", function(event){
	var cardStructure = `<div class="card">
							<h2>${cardContent.value}</h2>
							<button class="addId">Delete</button>
						</div>`;
	var cardDiv = document.createElement("div");
	cardDiv.innerHTML = cardStructure;
	output.appendChild(cardDiv);
	
	console.log("deleteButton", deleteButton);
	for (var i = 0; i < addID.length; i++){
		addID.item(i).setAttribute("id", `delete${i}`);
		cardNumber.item(i).setAttribute("id", `card${i}`)
	};

	for (var i = 0; i < addID.length; i++){
	var deleteButton = document.getElementById(`delete${i}`);
	deleteButton.addEventListener("click", function(event){
		var top = document.getElementById(`card${i}`);
		var nested = document.getElementById(`delete${i}`);
		top.removeChild(nested);
		});
	}
});

