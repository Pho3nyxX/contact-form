import { body, validationResult } from 'express-validator';

const contactSchema = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("reason").notEmpty().withMessage("Reason is required"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        
        next();
    }
]
export default contactSchema;