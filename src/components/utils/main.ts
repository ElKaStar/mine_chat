import type {formControlsType, validationType} from "./Types";

export const validControl = (value: string, validation: validationType) =>  {
    if (!validation) {
        return true
    }
    let isValid: boolean = true
    if (validation.email) {
        const re : RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        isValid = re.test(String(value).toLowerCase())
    }
    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }
    if (validation.minLength) {
        isValid = (value.length >= validation.minLength && isValid)
    }
    return isValid
}

export const isValidChecker = (formControls: formControlsType) => {
    let result: boolean = true;
    Object.keys(formControls).forEach(element => {
        if (!formControls[element].touched || !formControls[element].valid) {
            result = false
        }
    })
    return result
}