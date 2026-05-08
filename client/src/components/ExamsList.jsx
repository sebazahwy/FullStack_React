import ExamCard from "./ExamCard";

function ExamsList() {
  const exams = [
    { id: 1, title: "React Basics Exam", students: 24, average: 86 },
    { id: 2, title: "JavaScript Exam", students: 30, average: 78 },
    { id: 3, title: "HTML & CSS Exam", students: 18, average: 91 },
  ];

  return (
    <div>
      <h2 className="mb-4">Exams List</h2>

      {exams.map((exam) => (
        <ExamCard key={exam.id} exam={exam} />
      ))}
    </div>
  );
}

export default ExamsList;