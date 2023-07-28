export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input defaultValue="enter name" name="username"></input>
      </label>
      <label>
        Password
        <input defaultValue="enter password" name="password"></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
