'use client';
import { setNoteData } from '@/lib/store/noteSlice';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


export default function page() {
    const router = useRouter(); 
    // const { } = useSelector((state: any) => state.note);
    const dispatch = useDispatch()
  const [subject] = useState("Maths");
  const [topic] = useState("Trio");
  const [pages, setPages] = useState([
    { id: "1", name: "Page 1", preview: null },
    { id: "2", name: "Page 2", preview: "https://placehold.co/400" },
    { id: "3", name: "Page 3", preview: "https://placehold.co/400" },
    { id: "4", name: "Page 4", preview: "https://placehold.co/400" },
    { id: "5", name: "Page 5", preview: "https://placehold.co/400" },
  ]);

  // Create a new note
  const createNewNote = () => {
    console.log("Creating a new note...");
  };

  // Delete a page
  const deletePage = (pageId: number) => {
    setPages(pages.filter((page: any) => page.id !== pageId));
    console.log("Deleted page", pageId);
  };

  // Navigate to a specific page
  const gotoPage = (page: any) => {
    console.log("Navigating to page:", page.id);
    dispatch(setNoteData({topic: topic, pageNumber: page.id}))
    // navigate(`/notebook/notes?topic=${topic}&subject=${subject}&page=${page.id}`);
    router.push('/student/notebook/note')
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-lg font-semibold text-gray-800 mb-6">
        {subject} - {topic}
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-5 gap-4">
        {pages.map((item: any) => (
          <div key={item.id} className="flex flex-col items-center">
            <button
              onClick={() => gotoPage(item)}
              className="size-40 bg-gray-300 flex items-center justify-center rounded-md shadow-md"
            >
              {item.preview ? (
                <img src={item.preview} alt="Preview" className="w-full h-full object-cover rounded-md" />
              ) : (
                <span className="text-gray-700">{item.name}</span>
              )}
            </button>
            <button
              onClick={() => deletePage(item.id)}
              className="mt-2 text-xs text-white bg-red-500 px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}

        {/* Add Button */}
        <button
          onClick={createNewNote}
          className="size-40 bg-blue-500 text-white text-xl flex items-center justify-center rounded-md shadow-md"
        >
          +
        </button>
      </div>

      {/* Bottom Add Button */}
    </div>
  )
}
