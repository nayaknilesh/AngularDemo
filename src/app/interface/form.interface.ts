export interface IForm {

    formTitle: string,
    FormControls: IformControls[],
    saveBtnTitle?: string,
    resetBtnTitle?: string
}

export interface IformControls {
    name: string
    label: string
    value?: string
    placeholder?: string
    options?:IOptions[]
    radioOptions?: string[]
    class: string
    type: string
    validators: IValidator[]
}
export interface IValidator {
    validatorName?: string
    required?: boolean
    message?: string,
    pattern?:string,
    minLength?: number
    maxLength?: number
    email?:string
}

interface IOptions{
    id?: number
    value?: string
}


