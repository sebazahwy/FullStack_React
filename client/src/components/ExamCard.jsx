function ExamCard({ exam }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{exam.title}</h5>
        <p className="card-text">Students: {exam.students}</p>
        <p className="card-text">Average: {exam.average}</p>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
}

export default ExamCard;