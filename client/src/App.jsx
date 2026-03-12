import { useState, useEffect } from 'react'

export default function App() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAddNote = () => {
    if (title && content) {
      setNotes([...notes, { id: Date.now(), title, content }])
      setTitle('')
      setContent('')
    }
  }

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">📝 Notes App v2</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">New Note</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg h-32 mb-3"
            />
            <button
              onClick={handleAddNote}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Add Note
            </button>
          </div>
          
          <div className="lg:col-span-2">
            {notes.length === 0 ? (
              <p className="text-gray-500">No notes yet. Create one!</p>
            ) : (
              <div className="space-y-4">
                {notes.map(note => (
                  <div key={note.id} className="bg-white rounded-lg shadow p-4">
                    <h3 className="font-bold text-lg">{note.title}</h3>
                    <p className="text-gray-600">{note.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
