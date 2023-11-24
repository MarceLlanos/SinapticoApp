export function dateProjectVerification(date: Date): Boolean {
    const currentDate = new Date();
    if (isNaN(date.getTime())) {
        return false; // La fecha ingresada no es válida
    }
    return (date.getTime() <= currentDate.getTime()) ? false : true;

}