import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/fighters';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (fighterId) => {
    const result = await request.get(`${baseUrl}/${fighterId}`);

    return result;
};

export const create = async ({
    fighterName,
    age,
    country,
    fightingStyle,
    category,
    imageUrl,
    description,
}) => {
    const result = await request.post(baseUrl, {
        fighterName,
        age,
        country,
        fightingStyle,
        category,
        imageUrl,
        description,
    });

    return result;
};

export const edit = async (
    fighterId,
    {
        fighterName,
        age,
        country,
        fightingStyle,
        category,
        imageUrl,
        description,
    }
) => {
    const result = await request.put(`${baseUrl}/${fighterId}`, {
        fighterName,
        age,
        country,
        fightingStyle,
        category,
        imageUrl,
        description,
    });

    return result;
};

export const del = async (fighterId) =>
    await request.del(`${baseUrl}/${fighterId}`);
