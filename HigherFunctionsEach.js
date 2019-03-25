	



	// 1) 'negativeAll' create function that accept array as input and check the element 
    //     if it's positive make it negative 
    
  function map (coll,f){

  var acc = [];
  if (!Array.isArray(coll)){
    acc = {};
  }
  each(coll, function(element, key){
    acc [key] = f(element,key);
  });
  return acc;
}
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }


function filter(array,predicate){

  var acc = [];
  each(array,function(element){

    if(predicate(element)){

      acc.push(element)
    }

	function negativeAll(array) {
	  return filter (array,number){
	  	return (number > 0 ) * -1
	  }
	}

	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 

	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */
   
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i);
        }
    }
	function multiplyOfFour(array) {
	    var newArray = [];
	    each(array,element){
	    	if(array[element] % 4 === 0){
	    		return element
	    	}
	    }
	    return newArray ;
	}
