import { emailRegex } from "./regex"

export const requiredValidation={
    required: "Field is required"
}

export const emailValidation={
    required:"Field is required",
    pattern:{
        value: emailRegex,
        message:"Invalid Email"
    }
}