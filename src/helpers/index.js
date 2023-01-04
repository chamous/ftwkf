const isArabic = (text) =>{
    return new RegExp('[\u0621-\u064A ]+$').test(text);
}
const isArabicAndNumber = (text) =>{
    return new RegExp('[\u0621-\u064A0-9 ]+$').test(text);
}
const isNumber = (text) =>{
    return new RegExp('[0-9]').test(text);
}

const isEmail = (text) =>{
    console.log(text);
    return new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(text);
}

export {
    isArabic,
    isArabicAndNumber,
    isEmail,
    isNumber
}
