import {Schema} from 'mongoose'

const EmployeeSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, index: {unique: true}},
    phone: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true}
})

export default EmployeeSchema