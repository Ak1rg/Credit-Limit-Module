export const validateLimit = (value: number) => {
    if (value < 0) return "Лимит меньше 0";
    if (value > 10_000_000) return "Лимит больше 10 000 000";
    return null;
};