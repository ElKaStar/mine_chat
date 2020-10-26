export const validControl = (value: any, validation: any) => {
    if (!validation) {
        return true
    }
    let isValid = true
    if (validation.email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        isValid = re.test(String(value).toLowerCase()) && isValid
    }
    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }
    if (validation.minLength) {
        isValid = (value.length >= validation.minLength && isValid)
    }
    return isValid

}

export const isValidChecker = (formControls: any) => {
    console.log(formControls)
    const isTouched =  Object.keys(formControls).filter(element => formControls[element].touched === false)
    const isValidArr = Object.keys(formControls).filter(element => formControls[element].valid === false)
    console.log('isTouched',isTouched, 'isValidArr', isValidArr)
    if (isValidArr.length === 0 && isTouched.length === 0) {
        return true
    } else {
        return false
    }
}