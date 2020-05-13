// Attempt 1
var encryptThis = function (text) {
    let firstLetter = true
    text = text.split('')
    let secondLetter = 0
    let ls =0
    let secondLetterCheck = 1
    for (let i=0; i<text.length; i++){
        if (firstLetter){
            if(text[i+1] !== ' '){
                secondLetter = i+1
            }
        }text[i] = text[i].charCodeAt()
        firstLetter = false
        secondLetterCheck = i+1
    } else if(text[i+1] === ' '){
        if (secondLetter === secondLetterCheck){
            ls = text[i]
            text[i] = text[secondLetter]

        
        }
    }
}


var encryptThis = function (text) {
    return text.split(' ').reduce((a,v) => {
        let wordArr = [...v]
        if(v.length > 2) {
            [wordArr[1], wordArr[wordArr.length-1]] = [wordArr[wordArr.length-1], wordArr[1]]
        }
        wordArr[0]=wordArr[0].charCodeAt()
        a.push(wordArr.join(''))
        return a;
    }, []).join(' ')
}