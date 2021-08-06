const Modal = () => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <form action="">
          <label htmlFor="username">Username</label>
          <input name="username" id="username" type="text" />

          <label htmlFor="email">E-mail</label>
          <input name="email" id="email" type="email" />

          <label htmlFor="password">Password</label>
          <input name="password" id="password" type="password" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
