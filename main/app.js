function distance(first, second){
		try{
		if((first instanceof Array) || (second instanceof Array))
		{
		
		  let array1=[...new Set(first)]
		  let array2=[...new Set(second)]
		
		  let unique1 = array1.filter((o) => array2.indexOf(o) === -1);
		  let unique2 = array2.filter((o) => array1.indexOf(o) === -1);
		
		  const unique = unique1.concat(unique2);
		
		
		  return unique.length
		}
	}
		catch{
		throw 'InvalidType';
		
		}
	}



module.exports.distance = distance