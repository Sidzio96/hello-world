function logowanie(){
   var emailElem = document.forms['login']['email'];
   var nickElem = document.forms['login']['name'];
   var passElem = document.forms['login']['Password'];
   var confirmElem = document.forms['login']['Confirm Password'];
   var textElem = document.forms['login']['Choose Your Province'];
   if(emailElem.value <=/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,4})$/i ){
     emailElem.style.backgroundColor = "red";
	 setTimeout( function(){
	 emailElem.style.backgroundColor = "white";
	 }, 500); //500ms = 0.5s
	 return false;
    }
  
   if(nickElem.value.length < 3){
     nickElem.style.backgroundColor = "red";
	 setTimeout( function(){
	 nickElem.style.backgroundColor = "white";
	 }, 500); //500ms = 0.5s
	 return false;
	}
	if(passElem.value.length < 6){
     passElem.style.backgroundColor = "red"; 
	 setTimeout( function(){
	 passElem.style.backgroundColor = "white";
	 }, 500); //500ms = 0.5s
	 return false;
	}
	if(confirmElem.value.length < 6){
     confirmElem.style.backgroundColor = "red";
	 setTimeout( function(){
	 confirmElem.style.backgroundColor = "white";
	 }, 500); //500ms = 0.5s
	 return false;
    }
	if(textElem.value.length < 6){
     textElem.style.backgroundColor = "red"; 
	 setTimeout( function(){
	 textElem.style.backgroundColor = "white";
	 }, 500); //500ms = 0.5s
	 return false;
	}else {
	  var nickElem = document.forms['login']['name'].value;
	  alert("Witamy " + nickElem);
	}
	
	
}

var przycisk = document.getElementById('przycisk');{

przycisk.onclick = function() {
    alert("Witamy");
};

przycisk.onclick = firstEventHandler;
}
 var przycisk2 = document.getElementById('przycisk2');{
 przycisk2.onclick = function() {
    alert("Zegnamy");
 };

 przycisk2.onclick = secondEventHandler;

 }