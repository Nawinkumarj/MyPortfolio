export const getImageUrl = (path) => {
    return new URL(`./assets/icons/${path}`, import.meta.url).href;
};