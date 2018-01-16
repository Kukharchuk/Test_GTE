window.onload = function(){

	let buttonSize = document.getElementsByTagName("button");

	for(let i = 0; i < buttonSize.length; i++){

			buttonSize[i].addEventListener("click", function(){
				let size = this.getAttribute("id");
				
				var GameField = new createGameField(+size[0], +size[2]);
				var arr = GameField.createRandom();
				GameField.createTable(arr);
				startGame(arr);

			})
	}


	function createGameField(A, B){
		this.A = A;
		this.B = B;
		this.createTable = function(arr){

			var myTableDiv = document.getElementById("game-field");
	     
		    let table = document.createElement('TABLE');
		    table.border='1';
		   
		    let tableBody = document.createElement('TBODY');
		    table.appendChild(tableBody);
		     
		    for (var i = 0; i < A; i++){
		       var tr = document.createElement('TR');
		       tableBody.appendChild(tr);
		      
		       for (var j = 0; j < B; j++){
		           var td = document.createElement('TD');
		           td.width='35';
		           tr.appendChild(td);
		       }
		    }
		    myTableDiv.appendChild(table);

		    var tds = document.getElementsByTagName("td");
		    for(let i = 0; i < A*B; i++){
		    	tds[i].setAttribute("id", arr[i] + "field");
		    	tds[i].innerText = arr[i];
		    	tds[i].addEventListener("click", function(){
		    		this.style.backgroundColor = "blue";
		    	})
			}

		}
		this.createRandom = function(){
			let arr = [];
			for(let i = 0; i < A*B; i++){
				arr[i] = i + 1; 
			}
			arr[arr.indexOf(9)] = "";
			return arr.sort(compareRandom);

		}	


	}


	function compareRandom(a,b){
		return Math.random() - 0.5;
	}


	function startGame(arr){
		var activeField = document.getElementById("field");
		var fields = document.getElementsByTagName("td");
		for(let i = 0; i < fields.length; i++){
			fields[i].addEventListener("click", function(){
				if(this.previousSibling.getAttribute("id") == "field" || this.nextSibling.getAttribute("id") == "field"){
					this.setAttribute("id", "field");
					//to be continued
				}
			})
		}
	}


}