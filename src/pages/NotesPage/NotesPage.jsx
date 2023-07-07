import { useState, useEffect } from "react"
import * as notesAPI from '../../utilities/notes-api'
import NoteCard from '../../components/NoteCard/NoteCard'
export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  useEffect(function() {
    async function getNotes() {
      const notes = await notesAPI.getAllNotes();
      setNotes(notes)
      
    }
    getNotes();
  }, [])
  const NoteCards = notes.map((n) => <NoteCard note={n} />)
  return ( 
    <ul>{NoteCards}</ul>
  )
}