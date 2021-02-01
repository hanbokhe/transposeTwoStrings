//You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

//e.g. transposeTwoStrings(['Hello','World']);

//should return:
//H W  
//e o  
//l r  
//l l  
//o d

function transposeTwoStrings(arrayOfStrings){
    //assign new alias to the string
    var string1 = arrayOfStrings[0];
    var string2 = arrayOfStrings[1];
    var longerString;
    var transposedString = '';
    //compare what the longer string is
    if (string1.length > string2.length){
        longerString = string1;
    }else{
        longerString = string2;
    }
    //iterate over both strings
    for (var i = 0 ; i< longerString.length; i++)
    {
        var firstChar = string1[i] || ' ';
        var secondChar = string2[i] || ' ';
        transposedString += firstChar + ' ' + secondChar + '\n';
    }
    //transpose them by interpolating
    
    //return tranposed string
    return transposedString;
}

console.log(transposeTwoStrings(['Hello','World']));
console.log(transposeTwoStrings(['some','things']));
console.log(transposeTwoStrings(['things','some']));
