import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/fighters';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const create = async ({
    firstName,
    lastName,
    age,
    country,
    fightingStyle,
    category,
    imageUrl,
    weight,
    height,
}) => {
    const result = await request.post(baseUrl, {
        firstName,
        lastName,
        age,
        country,
        fightingStyle,
        category,
        imageUrl,
        weight,
        height,
    });

    return result;
};
