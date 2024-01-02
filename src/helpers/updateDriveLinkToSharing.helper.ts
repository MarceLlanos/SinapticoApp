export function updateDriveLinkToSharing(link: string): string {
    if (link.includes('drive_link')) {
        return link.replace(/drive_link/g, 'sharing');
    } else {
        return link;
    }
}