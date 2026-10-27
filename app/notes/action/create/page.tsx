import { Metadata } from "next";
import NoteForm from "./NoteForm.client";

export const metadata: Metadata = {
  title: "Create Note",
  description: "Page for create new note",
  openGraph: {
    title: "Create Note",
    description: "Page for create new note",
    url: "https://08-next-js.vercel.app/notes/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub app",
      },
    ],
  },
};

export default function CreateNote() {
  return <NoteForm />;
}
