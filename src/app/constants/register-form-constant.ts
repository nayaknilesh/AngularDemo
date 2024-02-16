import { IForm } from "../interface/form.interface";

export const registerFormConfig:IForm = {
    formTitle:'Registration Form',
    saveBtnTitle: ' Register',
    resetBtnTitle: 'Reset',
    FormControls:[
        {
            "name":"firstName",
            "label":"FirstName",
            "value":"",
            "placeholder":"",
            "class": "col-md-6",
            "type": "text",
            "validators":[
                {
                    "validatorName":"required",
                    "required":true,
                    "message":"*Firstname is Required"
                }
            ]
        },
        {
            "name":"lastName",
            "label":"LastName",
            "value":'',
            "placeholder":'',
            "class": "col-md-6",
            "type": "text",
            "validators":[
                {
                    "validatorName":"required",
                    "required":true,
                    "message":"*Lastname is Required"
                },
                {
                    "validatorName":"minlength",
                    "minLength":5,
                    "message":"Minimum char should be 5"
                }
            ]
        },
        {
            "name":"email",
            "label":"Email",
            "value":'',
            "placeholder":'',
            "class": "col-md-4",
            "type": "email",
            "validators":[
                {
                    "validatorName":"required",
                    "required":true,
                    "message":"*Email is Required"
                },
                {
                    "validatorName":"email",
                    "email":"email",
                    "message":"Email is not valid"
                }
            ]
        },
        {
            "name":"mobile",
            "label":"Mobile",
            "value":'',
            "placeholder":'',
            "class": "col-md-4",
            "type": "number",
            "validators":[
                {
                    "validatorName":"required",
                    "required":true,
                    "message":"*Mobile number is Required"
                },
                {
                    "validatorName":"maxlength",
                    "minLength":10,
                    "message":"Minimum 10 Digit is allowed"
                }
            ]
        },
        {
            "name":"weight",
            "label":"Weight",
            "class": "col-md-4",
            "value":'',
            "placeholder":'Should be in Kgs',
            "type": "number",
            "validators":[
                {
                    "validatorName":"required",
                    "required":true,
                    "message":"*Weight is Required"
                },

            ]
        },
        {
            "name":"height",
            "label":"Height",
            "class": "col-md-4",
            "value":'',
            "placeholder":'Should be in Cms',
            "type": "number",
            "validators":[
                {
                    "validatorName":"required",
                    "required":true,
                    "message":"*Height is Required"
                },

            ]
        },
       
        {
            "name":"gender",
            "label":"Gender",
            "class": "col-md-4",
            "placeholder":'',
            "radioOptions":[
                "male",
                "Female"
            ],
            "type":"radio",
            "validators":[
                {
                    "validatorName":"required",
                    "required":true,
                    "message":"*Gender is Required"
                },

            ]
        },
        {
            "name":"trainer",
            "label":"Required Trainer",
            "class": "col-md-4",
            "placeholder":"Should be in Kgs",
            "radioOptions":[
                "yes",
                "no"
            ],
            "type":"radio",
            "validators":[
                {
                    "validatorName":"required",
                    "required":true,
                    "message":"*Selection is Required"
                },

            ]
        },
        {
            "name":"package",
            "label":"Package",
            "class": "col-md-4",
            "placeholder":'',
            "options":[
                {
                    "id":1,
                    "value":"Monthly"
                },
                {
                    "id":2,
                    "value":"Quarterly"
                },
                {
                    "id":3,
                    "value":"yearly"
                }
            ],
            "type":"select",
            "validators":[
                {
                    "validatorName":"required",
                    "required":true,
                    "message":"*Package is Required"
                },

            ]
        },
        {
            "name":"motivation",
            "label":"What is important to you?",
            "class": "col-md-4",
            "placeholder":'Should be in Kgs',
            "options":[
                {
                    "id":1,
                    "value":"Get Fit"
                },
                {
                    "id":2,
                    "value":"Gain more Muscle"
                },
                {
                    "id":3,
                    "value":"Weight Loss"
                }
            ],
            "type":"select",
            "validators":[
                {
                    "validatorName":"required",
                    "required":true,
                    "message":"*Selection  is Required"
                },

            ]
        },
        {
            "name":"enquaryDate",
            "label":"Date of Enquiry",
            "class": "col-md-4",
            "placeholder":'Should be in Kgs',
            "type": "date",
            "validators":[
                {
                    "validatorName":"required",
                    "required":true,
                    "message":"*Enquiry Date is Required"
                },

            ]
        },

    ]
}