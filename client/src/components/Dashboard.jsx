import ExamsList from "./ExamsList";

function Dashboard() {
  return (
    <div className="container mt-4">
      <h1 className="mb-3">Teacher Dashboard</h1>
      <p className="text-muted">
        Manage exams, view students, and check exam results.
      </p>

      <ExamsList />
    </div>
  );
}

export default Dashboard;