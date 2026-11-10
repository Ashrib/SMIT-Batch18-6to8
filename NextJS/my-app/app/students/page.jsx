import { students } from "../lib/students";
import CreateStudentForm from "./createStudentForm";

export default async function Students() {


  console.log(students)

  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '3px solid black', margin: '10px', padding: '10px'   }}>
        <CreateStudentForm />
      </div>



      {
        students?.map((student) => {
          return (
            <div
              style={{ border: '1px solid black', margin: '10px', padding: '10px' }}
              key={student.id}>
              <h1>{student.name}</h1>
              <p>Age: {student.age}</p>
            </div>
          )
        }
        )
      }


    </div>
  );
}
