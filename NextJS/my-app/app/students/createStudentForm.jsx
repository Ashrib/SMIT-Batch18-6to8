"use client";
import { useActionState } from "react";
import { createStudent } from "./actions.js";

export default function CreateStudentForm() {
    

const initialState = {
  message: '',
}


const [state, formAction, pending] = useActionState(createStudent, initialState)



    return (
        <form action={formAction} method="POST">
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required />
            </div>
            <button type="submit" disabled={pending}
            style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}   
            
            >{pending ? "Creating..." : "Create Student"}</button>
        </form>
    );
}
