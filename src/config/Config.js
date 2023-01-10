export const BASE_URL = process.env.REACT_APP_BASE_URL

// Authentication
export const signUpUrl = `${BASE_URL}/user/signUp`
export const loginUrl = `${BASE_URL}/user/login`

// User
export const accountUrl = `${BASE_URL}/user/account`
export const updateAccountUrl = `${BASE_URL}/user/updateAccount`
export const updateProfilePicture = `${BASE_URL}/user/updateProfilePicture`

// File Upload
export const fileUploadUrl = `${BASE_URL}/upload`

// Checkout
export const checkout = `${BASE_URL}/payment/checkout`

// Payment Verification
export const paymentVerify = `${BASE_URL}/payment/verify`