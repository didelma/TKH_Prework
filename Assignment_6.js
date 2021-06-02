//Given the bellow array, create a function which loops through each name
//comparing the lenght of each to determine the longest name,
//save that name to the variable longest_name
//return Longest_name to the another variable called answer
//log the "asnwer" variable to the screen
var array = ["Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele"];
var longest_name = array;
var answer = longest_name;
var i, len, text;
for (i = 9, len = array.length, text = ""; i++;) {
    text += array[i];
}
console.log("The longest name is" + answer)

