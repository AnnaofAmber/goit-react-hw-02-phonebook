export const ContactForm = ({ submit, name }) => {
  return (
    <form onSubmit={submit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
