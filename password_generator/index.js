let generatePswdBtnEl = document.getElementById("generate-passwords-btn")

let passwordHolderBtn1 = document.getElementById("password-el-1-btn")
let passwordHolderBtn2 = document.getElementById("password-el-2-btn")
let passwordHolderBtn3 = document.getElementById("password-el-3-btn")
let passwordHolderBtn4 = document.getElementById("password-el-4-btn")

let passwordHolderTxt1 = document.getElementById("password-el-1-txt")
let passwordHolderTxt2 = document.getElementById("password-el-2-txt")
let passwordHolderTxt3 = document.getElementById("password-el-3-txt")
let passwordHolderTxt4 = document.getElementById("password-el-4-txt")

let lengthSlider = document.getElementById("password-length-slider");
let lengthTxt = document.getElementById("password-length-txt");

let possibleLetters = "abcdefghijklmnopqrstuvwxyz"
let possibleCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let possibleNumbers = "1234567890"
let possibleSymbols = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/" + '"'

let possibleElements = [possibleLetters, possibleCaps, possibleNumbers, possibleSymbols]

let passwords = ["···", "···", "···", "···"]
let passwordsSet = false

let passwordLength = 8

// ---------------------------------------------------------------------------------------
// GENERATE PASSWORDS
// ---------------------------------------------------------------------------------------

generatePswdBtnEl.addEventListener("click", function() {
    for(let password_num = 0; password_num < passwords.length; password_num++) {
        let password = ""
        for (let i = 0; i < passwordLength; i++) {
            let selectedElement = possibleElements[Math.floor(Math.random() * possibleElements.length)]
            password += selectedElement[Math.floor(Math.random() * selectedElement.length)]
        }
        passwords[password_num] = password
    }
    displayPasswords()
})

// ---------------------------------------------------------------------------------------
// DISPLAY PASSWORDS
// ---------------------------------------------------------------------------------------

function displayPasswords() {
    passwordHolderTxt1.value = passwords[0]
    passwordHolderTxt2.value = passwords[1]
    passwordHolderTxt3.value = passwords[2]
    passwordHolderTxt4.value = passwords[3]
    if (!passwordsSet) {
        passwordsSet = true
        passwordHolderTxt1.classList.add("password-txt") 
        passwordHolderTxt2.classList.add("password-txt")
        passwordHolderTxt3.classList.add("password-txt")
        passwordHolderTxt4.classList.add("password-txt")
    }
}

// ---------------------------------------------------------------------------------------
// COPY PASSWORD TO CLIPBOARD ON CLICK
// ---------------------------------------------------------------------------------------

passwordHolderBtn1.addEventListener("click", function() { // TODO
    if (passwordsSet){
        async () => {
            try {
                await navigator.clipboard.writeText(passwords[0]);
                console.log("Copy password 1 ok");
            } catch (err) {
                console.error("Failed to copy pswd 1: ", err);
            }
        }
    }
})

passwordHolderBtn2.addEventListener("click", function() { // TODO
    if (passwordsSet){
        async () => {
            try {
                await navigator.clipboard.writeText(passwords[1]);
                console.log("Copy password 2 ok");
            } catch (err) {
                console.error("Failed to copy pswd 2: ", err);
            }
        }
    }
})

passwordHolderBtn3.addEventListener("click", function() { // TODO
    if (passwordsSet){
        async () => {
            try {
                await navigator.clipboard.writeText(passwords[2]);
                console.log("Copy password 3 ok");
            } catch (err) {
                console.error("Failed to copy pswd 3: ", err);
            }
        }
    }
})

passwordHolderBtn4.addEventListener("click", function() { // TODO
    if (passwordsSet){
        async () => {
            try {
                await navigator.clipboard.writeText(passwords[3]);
                console.log("Copy password 4 ok");
            } catch (err) {
                console.error("Failed to copy pswd 4: ", err);
            }
        }
    }
})

// ---------------------------------------------------------------------------------------
// SLIDER FOR PASSWORD LENGTH
// ---------------------------------------------------------------------------------------

lengthTxt.textContent = passwordLength
lengthSlider.value = passwordLength

// Update the current slider value (each time you drag the slider handle)
lengthSlider.oninput = function() {
    passwordLength = this.value;
    lengthTxt.textContent = passwordLength;
}
