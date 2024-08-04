export const PROD = process.env.NODE_ENV === "production"
export const API_url=(PROD ? "https://aps-api-re0l.onrender.com":"https://localhost:8800")