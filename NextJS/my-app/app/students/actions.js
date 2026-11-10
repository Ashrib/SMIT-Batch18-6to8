// import { revalidatePath } from "next/cache";
import { students } from "../lib/students";

export async function createStudent(prevState, studentData) {
    console.log("Creating student:", studentData);

    let name = studentData.get("name");
    let age = studentData.get("age");

    console.log("Name:", name);
    console.log("Age:", age);

    //// validation with zod schema

    //// hit POST api route to save student data in db

    // Add the new student to the students array
    students.push({
        id: students.length + 1,
        name: name,
        age: parseInt(age),
    });


    /// revalidate the students page to reflect the new student
    // revalidatePath("/students");

    console.log("Updated students array:", students);

}



