import { CommentToDailyReport, DailyReport, DailyReportData, LikeInput } from "@/models";
import { addDocument, getDocumentById } from "./collection.service";
import { getUserAssigned } from "@/utilities";


export const addNewDailyReport = async (dailyData: DailyReportData) => {
    const { user_id, whatIDid, problemsIHave, whatWillIDo, id_project } = dailyData;
    try {
        const user = await getUserAssigned(user_id);
        const dailyReportData = {
            whatIDid,
            problemsIHave,
            whatWillIDo,
            user_id,
            userName: user.userName,
            id_project,
            dateCreated: new Date(),
            likes: 0,
        }
        const createDaily = await addDocument('dailyReport', dailyReportData);
        console.log(createDaily);

    } catch (error) {
        throw error;
    }
}

export const createComment = async (commentInput: CommentToDailyReport) => {
    try {
        const comment = await addDocument('commentsReport', commentInput);
    } catch (error) {
        throw error;
    }
}

export const getReport = async (id_report: string): Promise<DailyReport> => {
    try {
        const daily = await getDocumentById('commentsReport', id_report);
        console.log(daily)
        const dailyData: DailyReport = {
            whatIDid: daily?.whatIDid,
            problemsIHave: daily?.problemsIHave,
            whatWillIDo: daily?.whatWillIDo,
            user_id: daily?.user_id,
            userName: daily?.userName,
            id_project: daily?.id_project,
            dateCreated: daily?.dateCreated,
            likes: daily?.likes,
            id: id_report,
        }

        return dailyData;
    } catch (error) {
        throw error;
    }
}

export const addLikeToComment = async ({ id_report, like }: LikeInput) => {
    try {
        const { likes } = await getReport(id_report);

    } catch (error) {

    }
}

export const getReportsFromAProject = async () => {

}

export const getCommentsFromADaily = async (idDaily: string) => {

}
