import { MemberInput, UserTeam, UserTeamInput } from "@/models";
import {
    DeleteTeamMember,
    addMemberWithCodeProject,
    getATeamMember,
    getTeamMembers,
    updateTeamMember
} from "@/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const joinTeam = createAsyncThunk('team/joinTeam', async (userInput: UserTeamInput) => {
    try {
        const { isSuccess, message, id_project } = await addMemberWithCodeProject(userInput);

        return {
            isSuccess,
            message,
            id_project
        }
    } catch (error) {
        throw error;
    }
});

export const updateMememberTeam = createAsyncThunk('team/updateMemberTeam', async (userInput: UserTeam) => {
    try {
        const { isSuccess, message } = await updateTeamMember(userInput);

        return {
            isSuccess,
            message,
        }
    } catch (error) {
        throw error;
    }
});

export const deleteMemberTeam = createAsyncThunk('team/deleteMemberTeam', async (userInput: MemberInput) => {
    try {
        const { isSuccess, message } = await DeleteTeamMember(userInput);

        return {
            isSuccess,
            message,
        }
    } catch (error) {
        throw error;
    }
});

export const getMembersTeam = createAsyncThunk('getTeamMembers/getMembersTeam', async (id_project: string) => {
    try {
        const teamMembers = await getTeamMembers(id_project);

        return teamMembers;
    } catch (error) {
        throw error;
    }
});

export const getMemberTeam = createAsyncThunk('getAMemberteam/getMemberTeam', async (userInput: MemberInput) => {
    try {
        const member = await getATeamMember(userInput);

        return member
    } catch (error) {
        throw error;
    }
});
