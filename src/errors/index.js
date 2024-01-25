/*
    Possible errors, and an error handling function
*/

export const EPISODE_NOT_FOUND = "Episode not found";
export const CHARACTER_NOT_FOUND = "Character not found";
export const PAGE_NOT_FOUND = "Page not found";

export const getErrorMessage = reason =>
{
    return typeof reason === 'object' && 'message' in reason? reason.message : reason;
} 