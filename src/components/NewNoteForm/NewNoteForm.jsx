import { useState } from "react"
import { createNote } from "../../utilities/notes-api"

export default function NewNoteForm({ setNewNote }) {
  const [formData, setFormData] = useState({text: ''})
  function handleChange(evt) {
    setFormData({[evt.target.name]: evt.target.value})
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    setFormData({text: ''})
    const note = await createNote(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Submit a new note
        <input onChange={handleChange} value={formData.text} name="text"/>
      </label>
      <button type="submit">Add Note</button>
    </form>

  )
}