var randomNumber = [];

function setup(){
	for(var i = 0; i<100; i++){
		randomNumber[i]= int(random(10,200));
		print(">> I placed the random numbers "+randomNumber[i]+" into position no."+i)
	}
}