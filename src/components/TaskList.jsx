export const TaskList = () => {
  return (
    <>
      <div className="task-grid">
        {/* task card1 */}
        <div className="task-card" style={{ position: "relative" }}>
          <h3>Complete React Assignment</h3>
          <p>Finish task manager UI and styling</p>

          <div className="task-meta">
            <span>Due:2026-02-10</span>
            <span className="priority-badge priority-high">high</span>
          </div>

          <div className="task-actions">
            <button
              className="btn-icon"
              style={{ background: "#00d2ff" }}
              title="Edit Task"
            >
              🖊
            </button>

            <button
              className="btn-icon"
              style={{ background: "#00b894" }}
              title="MarkComplete"
            >
              ✔
            </button>

            <button
              className="btn-icon"
              style={{ background: "#ff416c" }}
              title="Delete Task"
            >
              🗑
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
