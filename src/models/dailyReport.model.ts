export interface DailyReportInput {
    id_project: string;
    user_id: string;
    whatIDid: string;
    problemsIHave: string;
    whatWillIDo: string;
}
export interface DailyReportData extends DailyReportInput {
    userName: string;
    dateCreated?: Date;
    likes: number;
}

export type LikeInput = {
    id_report: string;
    like: number;
}

export interface DailyReport extends DailyReportData {
    id: string;
}

export type DailyReports = DailyReport[];

export interface CommentToDailyReport {
    id_daily: string;
    user_id: string;
    userName: string;
    comment: string;
    date: Date;
}

export type ReportComments = CommentToDailyReport[];