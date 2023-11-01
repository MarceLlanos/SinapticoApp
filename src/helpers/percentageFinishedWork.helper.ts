function countDecimals(number: Number) {
    const numberString = number.toString();
    const decimalPoint = numberString.indexOf(".");

    if (decimalPoint !== -1) {
        return numberString.length - decimalPoint - 1;
    } else {
        return 0;
    }
}
export function percentageFinishedWork(totalTask: any, totalDoneTask: any) {
    if (totalTask && totalDoneTask < 0) {
        return 0;
    }
    const percentageFinishedWork = (totalDoneTask / totalTask) * 100;

    return countDecimals(percentageFinishedWork) === 0
        ? percentageFinishedWork
        : percentageFinishedWork.toFixed(1);
}
