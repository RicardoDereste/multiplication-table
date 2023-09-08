function multiTable() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var ans = document.getElementById('answer');
    ans.innerHTML = `The Multiplication Table of ${num1} is: <br>`

    for (let i = 0; i <= num2; i++) {
        ans.innerHTML += `${num1} x ${i} = ${num1 * i} <br>`
    }
}