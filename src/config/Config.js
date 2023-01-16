export const BASE_URL = process.env.REACT_APP_BASE_URL

// Authentication
export const signUpUrl = `${BASE_URL}/user/signUp`
export const loginUrl = `${BASE_URL}/user/login`

// Search
export const userSearch = `${BASE_URL}/library/search`

// User
export const accountUrl = `${BASE_URL}/user/account`
export const updateAccountUrl = `${BASE_URL}/user/updateAccount`
export const updateProfilePicture = `${BASE_URL}/user/updateProfilePicture`
export const addressListUrl = `${BASE_URL}/user/addressesList`
export const addToCartUrl = `${BASE_URL}/user/addToCart`
export const deleteFromCartUrl = `${BASE_URL}/user/deleteFromCart`
export const deleteAllFromCartUrl = `${BASE_URL}/user/deleteAllFromCart`

// Book
export const bookDetailUrl = `${BASE_URL}/library/details`

// File Upload
export const fileUploadUrl = `${BASE_URL}/upload`

// Checkout
export const checkout = `${BASE_URL}/payment/checkout`

// Payment Verification
export const paymentVerify = `${BASE_URL}/payment/verify`

// Rent History
export const completeOrderUrl = `${BASE_URL}/rent/add`