import sendRequest from "./send-request";
const BASE_URL = 'api/notes'

export async function getAllNotes() {
  console.log('get')
  return sendRequest(BASE_URL)
}

export async function createNote(textData) {
  console.log('post')
  return sendRequest(BASE_URL, 'POST', textData)
}