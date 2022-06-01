const trim1 = function trim_f() {
    let text = "  Hello, how are you?  "
    console.log(text.trim())
}

const lowerCase = function changeToLowerCase() {
    const sentance = "Are you happy with FunctionUp?"
    console.log(sentance.toLowerCase())
    
}

const upperCase = function changeToUpperCase() {
    const sentance2 = "Yes, I am happy with Function. This is help me to learn new knowledge of coding"
    console.log(sentance2.toUpperCase())
}

module.exports.trim1 = trim1
module.exports.lowerCase = lowerCase
module.exports.upperCase = upperCase