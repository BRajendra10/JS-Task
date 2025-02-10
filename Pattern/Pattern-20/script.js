// -
// | -
// - | -
// | - | -
// - | - | -

for(let i = 1; i <= 5; i++) {
    for(let j = i; j >= 1; j--) {
        if(j%2==0){
            document.write(1 + " ");// |
        }
        else{
            document.write(0 + " "); // -
        }
    }
    document.write('<br>');
}