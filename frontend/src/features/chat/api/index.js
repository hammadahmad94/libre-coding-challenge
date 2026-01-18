import client from '../../../shared/api/client';

export const sendMessage = async (history) => {
    const response = await client.post('/chat/message', { messages: history });
    return response.data;
};

export const generateRoadmap = async (history) => {
    const response = await client.post('/chat/generate-roadmap', { messages: history });
    return response.data;
};
