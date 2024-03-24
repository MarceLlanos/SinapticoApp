import { DailyReportData } from "@/models";
import { addNewDailyReport } from "@/services/dailyReport.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addDailyReport = createAsyncThunk('dailyReport', async (dailyData: DailyReportData) => {
    try {
        const daily = await addNewDailyReport(dailyData);
    } catch (error) {
        throw error;
    }
})