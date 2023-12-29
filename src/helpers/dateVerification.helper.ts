export function dateVerification(dateToVerify: string): boolean {
    const currentDate = new Date();
    const dateOnVerify = new Date(dateToVerify);

    if (isNaN(dateOnVerify.getTime())) {
        return false;
    }

    const millisecondsDifference = dateOnVerify.getTime() - currentDate.getTime();
    const daysBetween = millisecondsDifference / (1000 * 60 * 60 * 24);

    return daysBetween >= 2;
}