import sendRequest from "./send-request";
const BASE_URL = 'api/notes'

export async function getAllNotes() {
  console.log('notes-api')
  return sendRequest(BASE_URL)
}