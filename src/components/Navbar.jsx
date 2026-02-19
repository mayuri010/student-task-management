function Navbar({ title, onLogout, onAddTaskBtnClick, isFormOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{title}</h1>
      </div>
      <div className="navbar-actions">
        <button
          className={isFormOpen ? "btn-primary" : "btn-primary"}
          onClick={onAddTaskBtnClick}
        >
          {isFormOpen ? "Close" : "Add Task"}
        </button>
        <button className="btn-secondary" onClick={onLogout}>
          LogOut
        </button>
      </div>
    </nav>
  );
}
export default Navbar;