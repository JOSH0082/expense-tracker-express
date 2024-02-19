import Joi from "joi";

const validator = (schema) => (payload) => {
    return schema.validate(payload);
};

const createUser = Joi.object({
    name: Joi.string().min(3).max(747).required(),
    username: Joi.string().min(3).max(15).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(225).regEx("^[a-zA-Z0-9!@#$&()-`.+,/\"]*$").required(),
    repeat_password: Joi.ref("password"),
    born: Joi.date().required(),
    gender: Joi.string()
        .valid("Male", "Female", "Unidentified", "Mayonaise")
        .optional(),
    job: Joi.string().optional(),
    status: Joi.string()
        .valid("Married", "Single", "In a Relationship", "")
        .optional()
});

const valids = {
    validateCreateUser: validator(createUser),
};

export default valids;