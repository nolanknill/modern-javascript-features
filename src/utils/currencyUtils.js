export const currencyConversions = {
    "USA": 1.00,
    "Canada": 1.36
}

export function convertPrice(price, locale) {
    return price * currencyConversions[locale];
}