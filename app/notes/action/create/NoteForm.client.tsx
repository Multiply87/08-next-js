"use client";
import { useRouter } from "next/navigation";
import css from "./CreateNote.module.css";
import CreateNoteForm from "@/components/NoteForm/CreateNoteForm";

export default function NoteForm() {
  const router = useRouter();
  const handleCancel = () => {
    router.push("/notes/filter/all");
  };
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <CreateNoteForm onCancel={handleCancel} />
      </div>
    </main>
  );
}
