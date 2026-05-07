import api from "../../libs/axios";

const recentActivityUrl = (workspaceId:string) => `/workspace/${workspaceId}/recent-activities`;
const pendingInvitationUrl = (workspaceId:string) => `/workspace/${workspaceId}/members/pending-invitations`;
const activeSprintsUrl = (workspaceId:string) => `/workspace/${workspaceId}/sprints`;
const jobQueueStatusUrl = (workspaceId:string) => `/workspace/${workspaceId}/queues`;
const kpisUrl = (workspaceId:string) => `/workspace/${workspaceId}/kpis`;

export const fetchPendingInvitations = async (workspaceId) => {
    try {
        const url = pendingInvitationUrl(workspaceId);
        const response = await api.get(url);
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const fetchActiveSprints = async (workspaceId) => {
    try {
        const url = activeSprintsUrl(workspaceId);
        const response = await api.get(url);
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const fetchJobQueueStatus = async (workspaceId) => {
    try {
        const url = jobQueueStatusUrl(workspaceId);
        const response = await api.get(url);
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const fetchRecentActivities = async (workspaceId) => {
    try {
        const url = recentActivityUrl(workspaceId);
        const response = await api.get(url);
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const fetchKPIs = async (workspaceId) => {
    try {
        const url = kpisUrl(workspaceId);
        const response = await api.get(url);
        console.log('fetchKPIs', response.data, response.data.data);
        
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}