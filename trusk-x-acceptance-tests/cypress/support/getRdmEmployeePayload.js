import randomstring from "randomstring";

const rdm2D = () => {
    const rdm = Math.floor(Math.random() * 99)
    return rdm < 10 ? `0${rdm}` : rdm.toString(10)
}

const getRdmEmployeePayload = (employeeName) => {
    const randomLastName = randomstring.generate({
        length: 6,
        charset: 'alphabetic'
    })
    const randomLastNameCapitalized = randomLastName.charAt(0).toUpperCase() + randomLastName.slice(1)
    const employeeCompleteName = `${employeeName} ${randomLastNameCapitalized}`
    const employeeEmail = `${employeeCompleteName.toLowerCase().replace(' ', '.')}@trusk.com`
    const employeePhoneNumber = `06${rdm2D()}${rdm2D()}${rdm2D()}${rdm2D()}`
    return {
        name: employeeCompleteName,
        email: employeeEmail,
        phone: employeePhoneNumber,
        password: 'password'
    }
}

export default getRdmEmployeePayload