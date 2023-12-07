import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/likes';

export const likeFighter = async (fighterId) =>
    await request.post(baseUrl, { fighterId });

export const getLikesForFighter = async (fighterId) => {
    const result = await request.get(
        `${baseUrl}?where=fighterId%3D%22${fighterId}%22&distinct=_ownerId&count`
    );

    return result;
};

export const canLike = async (fighterId, userId) => {
    const result = await request.get(
        `${baseUrl}?where=fighterId%3D%22${fighterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
    );

    return result;
};
