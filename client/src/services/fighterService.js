import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/fighters';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getAllByOwner = async (ownerId) => {
    const query = `?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`;

    const result = await request.get(`${baseUrl}${query}`);

    return result;
};

export const getOne = async (fighterId) => {
    const result = await request.get(`${baseUrl}/${fighterId}`);

    return result;
};

export const create = async (fighterData) => {
    const result = await request.post(baseUrl, fighterData);

    return result;
};

export const edit = async (fighterId, fighterData) => {
    const result = await request.put(`${baseUrl}/${fighterId}`, fighterData);

    return result;
};

export const del = async (fighterId) =>
    await request.del(`${baseUrl}/${fighterId}`);
