function solution(my_string) {
    var answer = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const arr = Array(52).fill(0)
    for(let i=0; i<my_string.length; i++) {
        arr[answer.indexOf(my_string[i])]++
    }

    return arr;
}