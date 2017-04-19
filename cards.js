// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

var cardContent = document.getElementById("cardContent");
var button = document.getElementById("create");
var output = document.getElementById("addCards");
var deleteButton = document.getElementsByClassName("delete");
var cardNumber = document.getElementsByClassName("card");
var sectionID = document.getElementsByTagName("section");

function makeNewCards(){
	var cardStructure = `<div class="card">
							<h2>${cardContent.value}</h2>
							<button class="delete">Delete</button>
						</div>`;
	var cardSection = document.createElement("section");
	cardSection.innerHTML = cardStructure;
	output.appendChild(cardSection);
}


button.addEventListener("click", function(event){
	makeNewCards();
	for (var i = 0; i < deleteButton.length; i++){
		deleteButton.item(i).addEventListener("click", function(event){
			var getParent = event.target.parentNode;
			var getGParent = getParent.parentNode;
			console.log("getParent", getParent);
			getGParent.removeChild(getParent);
		})
	};
});

