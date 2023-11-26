import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/fighters';

export const getAll = async () => {
    const result = await request.get(baseUrl);

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
