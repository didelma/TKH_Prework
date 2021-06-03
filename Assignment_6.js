//Given the bellow array, create a function which loops through each name
//comparing the lenght of each to determine the longest name,
//save that name to the variable longest_name
//return Longest_name to the another variable called answer
//log the "asnwer" variable to the screen
var str = 'Retta, Vern, Marica, Cyrus, Linette, Curt, Nichole, Jesica, Wynell, Michaele';
var longest_name = (str) => {
    const strArray = str.split(' ');
    const sortedStrArray = strArray.sort(
        (strA, strB) => {
            return strB.lenght -
            strA.lenght;
        }
    );
    return sortedStrArray[9]
}

var answer = longest_name

console.log("The longest name is" + (' ') + answer(str));

