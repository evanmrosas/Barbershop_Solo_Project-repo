import {model, Schema} from 'mongoose';
import bcrypt from 'bcrypt';

function validateCreditCardNumber(value) {
    const cardNumber = value.replace(/\D/g, '');

    if (!cardNumber || cardNumber.length < 13) {
        return false;
    }
    let sum = 0;
    let double = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);
        if (double) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        double = !double;
    }
    return sum % 10 === 0;
}

const AppointmentSchema = new Schema(
    {   
        firstName: {
            type: String, 
            required: [true, "Enter First Name"],
            minlength: [1, "First Name must be at least 1 character long"],
            maxlength: [20, "First Name must be at less than 20 characters long"]
        },
        lastName: {
            type: String,
            required: [true, "Enter Last name"],
            minlength: [2, "Last Name must be at least 2 characters long"],
            maxlength: [20, "Last Name must be less than 20 characters long"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
            }
        },
        barber: {
            type: String,
            required : [true, "Please choose a barber"]
        },
        service: {
            type: String,
            required: [true, "Please choose a service"]
        },
        date: {
            type: String,
            required: [true, "Please choose a date"]
        },
        price: {
            type: Number
        },
        cardNumber: {
            type: String,
            required: [true, "Credit card number is required"],
            validate: {
                validator: validateCreditCardNumber,
                message: "Invalid credit card number"
            }
        },
        expirationDate: {
            type: String,
            required: [true, "Expiration date is required"]
        },
        cvv: {
            type: String,
            required: [true, "CVV is required"]
        }
    }, { timestamps: true });

AppointmentSchema.pre('save', async function (next) {
    try {
        if (this.cardNumber && this.cvv) {
            const hashedCardNumber = await bcrypt.hash(this.cardNumber, 10);
            const hashedCVV = await bcrypt.hash(this.cvv, 10);
            this.cardNumber = hashedCardNumber;
            this.cvv = hashedCVV;
        }
        next();
    } catch (error) {
        next(error);
    }
});

const Appointment = model("Appointment", AppointmentSchema);
export default Appointment;