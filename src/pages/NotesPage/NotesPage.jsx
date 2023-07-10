import { useState, useEffect } from "react"
import * as notesAPI from '../../utilities/notes-api'
import NoteCard from '../../components/NoteCard/NoteCard'
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  useEffect(function() {
    async function getNotes() {
      const allNotes = await notesAPI.getAllNotes();
      setNotes(allNotes)
    }
    getNotes();
    console.log('useEffect')
  }, [])
  const NoteCards = notes.map((n) => <NoteCard note={n} key={n._id}/>)
  return (
    <>
      <ul>{NoteCards}</ul>
      <NewNoteForm />
    </>
  )
}