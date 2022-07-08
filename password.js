// Password Validator

let password = "ICanCode456"

function checkUpper(str){                       // Function checks for Upper Case letter in the password.
    return /[A-Z]/.test(str)
}

function checkLower(str) {                      // Function checks for Lower Case letter in the password
    return /[a-z]/.test(str)
}

function checkNumbers(str) {                    // Function checks for Number in the password
    return /[0-9]/.test(str)
}

function checkSymbols(str) {
    return /[!@#$%^&*-_]/.test(str)               // Function checks for ALLOWED symbols in the password. 
}

function checkSpaces(str) {                     // Function checks for Spaces in the password
    return /[ ]/.test(str)
}


if (password.length > 10 && password.length <= 20) {
    if (checkUpper(password) === true) {
        if (checkLower(password) === true) {
            if (checkNumbers(password) === true) {
                if (checkSymbols(password) === true) {
                    if (checkSpaces(password) === false) {
                        console.log(" ____                                     _                       _           _   ____                           __       _ _       _ \n"+
                            "|  _ \\ __ _ ___ _____      _____  _ __ __| |   ___ _ __ ___  __ _| |_ ___  __| | / ___| _   _  ___ ___ ___  ___ / _|_   _| | |_   _| |\n"+
                            "| |_) / _` / __/ __\\ \\ /\\ / / _ \\| '__/ _` |  / __| '__/ _ \\/ _` | __/ _ \\/ _` | \\___ \\| | | |/ __/ __/ _ \\/ __| |_| | | | | | | | | |\n"+
                            "|  __/ (_| \\__ \\__ \\\\ V  V / (_) | | | (_| | | (__| | |  __/ (_| | ||  __/ (_| |  ___) | |_| | (_| (_|  __/\\__ \\  _| |_| | | | |_| |_|\n"+
                            "|_|   \\__,_|___/___/ \\_/\\_/ \\___/|_|  \\__,_|  \\___|_|  \\___|\\__,_|\\__\\___|\\__,_| |____/ \\__,_|\\___\\___\\___||___/_|  \\__,_|_|_|\\__, (_)\n"+
                            "                                                                                                                              |___/   ")
                    } else {
                        console.log("You cannot use spaces in your password.")
                    }
                } else {
                    console.log("You need to include at least one of the following Symbols in your password: ! @ # $ % ^ & * - _")
                }
            } else {
                console.log("You need to include at lease one Number in your password.")
            }
        } else {
            console.log("You need to include at least one Lower Case letter in your password.")
        }
    } else {
        console.log("You need to include at least one Upper Case letter in your password.")
    }
} else {
    console.log("Your password needs to be between 10 and 20 characters long")
}



console.log()







// if (password.length > 10) {
//     if (password.length <= 20){
        
//     }
//     if (function checkLetters(password === true) {
//         if (function checkNumbers === true) {
//             if (function checkSymbols = true) {

//             }
//         }
//     }
//     return /^[A-Za-z0-9]*$/.test(password)
//     }
// }




// console.log(onlyLettersAndNumbers(password))