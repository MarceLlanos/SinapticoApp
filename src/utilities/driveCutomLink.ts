
export function getIdFromDriveUrl(driveUrl: string): string {
    const expresionRegular = /folders\/([^/?]+)/;
    const urlMatches = driveUrl.match(expresionRegular);
    return urlMatches ? urlMatches[1] : '';
}

export function driveLinkCustomized(idDrive: string): string {
    return `https://drive.google.com/embeddedfolderview?id=${idDrive}#list`
}