// Password Validator Details:
//  Password MUST be 10 to 20 characters long and contain the following:
// At least one Lower Case letter
// At least one Upper Case letter
// At least one Number
// At least one of these special characters: ! @ # $ % ^ & *
// 
// No spaces are allowed in the password.
//
// If any of the checks fail, system will log an alert message describing WHICH of the requirements is missing.


let password = "ICanCode123$%"                    // Password given.


// Functions used to check the given requirements of the password:

function checkUpper(str){                       // Function checks for Upper Case letter in the password.
    return /[A-Z]/.test(str)
}

function checkLower(str) {                      // Function checks for Lower Case letter in the password
    return /[a-z]/.test(str)
}

function checkNumbers(str) {                    // Function checks for Number in the password
    return /[0-9]/.test(str)
}

function checkSymbols(str) {                    // Function checks for ALLOWED symbols in the password.
    return /[!@#$%^&*]/.test(str) 
}

function checkSpaces(str) {                     // Function checks for Spaces in the password
    return /[ ]/.test(str)
}


// Code that will determine weather the password meets requirements or not. 


if (password.length > 10 && password.length <= 20) {            // Checks both Minimum and Maximum allowed character count. (Required)
    
    if (checkUpper(password) === true) {                        // Calls check for at least one Upper Case letter. (Required)

        if (checkLower(password) === true) {                    // Calls check for at least one Lower Case letter. (Required)

            if (checkNumbers(password) === true) {              // Calls check for at least one Number. (Required)

                if (checkSymbols(password) === true) {          // Calls check for at least one of the allowed special characters. (Required)

                    if (checkSpaces(password) === false) {      // Calls check for Spaces in the password

                        console.log(" ____                                     _                       _           _   ____                           __       _ _       _ \n"+
                            "|  _ \\ __ _ ___ _____      _____  _ __ __| |   ___ _ __ ___  __ _| |_ ___  __| | / ___| _   _  ___ ___ ___  ___ / _|_   _| | |_   _| |\n"+
                            "| |_) / _` / __/ __\\ \\ /\\ / / _ \\| '__/ _` |  / __| '__/ _ \\/ _` | __/ _ \\/ _` | \\___ \\| | | |/ __/ __/ _ \\/ __| |_| | | | | | | | | |\n"+
                            "|  __/ (_| \\__ \\__ \\\\ V  V / (_) | | | (_| | | (__| | |  __/ (_| | ||  __/ (_| |  ___) | |_| | (_| (_|  __/\\__ \\  _| |_| | | | |_| |_|\n"+
                            "|_|   \\__,_|___/___/ \\_/\\_/ \\___/|_|  \\__,_|  \\___|_|  \\___|\\__,_|\\__\\___|\\__,_| |____/ \\__,_|\\___\\___\\___||___/_|  \\__,_|_|_|\\__, (_)\n"+
                            "                                                                                                                              |___/   ")

                    } else {

                        console.log("You cannot use spaces in your password.")                          // All "else" statements will be triggered if any of the checks fails, mentioning the specific requirement that was missed.
                    }
                } else {

                    console.log("You need to include at least one of the following Symbols in your password: ! @ # $ % ^ & *")

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
