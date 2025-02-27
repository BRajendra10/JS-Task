// // count frequncey of all character is string.

let relName = prompt("Enter your name: ");
let checkedChars = []; // to store checked chars

for (let i = 0; i < relName.length; i++) {
    let count = 1;

    // if any character repeate it self then skip the character and move to next character
    if (checkedChars.includes(relName[i])) {
        continue;
    }

    for (let j = i + 1; j < relName.length; j++) {
        if (relName[i] === relName[j]) {
            count++;
        }
    }

    console.log(`${relName[i]} appears ${count} times`);
    checkedChars.push(relName[i]); // push the current character to the end of array
}