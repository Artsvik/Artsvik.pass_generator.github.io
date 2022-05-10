const password_ele = document.getElementById("pwd_txt");
let numbers = "0123456789"
let symbols = "~!@#$%^&*()_+="
let upperCase = "abcdefghijklmnopqrstuvwxyz"
let lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const special_chars = "~!@#$%^&*()_+=";
const generate = document.getElementById("generate");
let pwd_length = document.getElementById("slider");

generate.addEventListener('click', () => {
    let password = "";
    let checked1 = document.getElementById("checkbox1").checked;
    let checked2 = document.getElementById("checkbox2").checked;
    let checked3 = document.getElementById("checkbox3").checked;
    let checked4 = document.getElementById("checkbox4").checked;
    let final_string = upperCase;
    console.log(checked1);
    if (checked1) {
        final_string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (checked2) {
        final_string += "abcdefghijklmnopqrstuvwxyz"
    }
    if (checked3) {
        final_string += "0123456789"
    }
    if (checked4) {
        final_string += "~!@#$%^&*()_+="
    }
    for (let i = 0; i < pwd_length.value; i++) {
        let pwd = final_string[Math.floor(Math.random() * final_string.length)];
        password += pwd;
    }
    password_ele.innerText = password;
    final_string = string;
})