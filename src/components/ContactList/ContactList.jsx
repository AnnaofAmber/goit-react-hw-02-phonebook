import css from "./ContactList.module.css"

export const ContactList = ({contacts, onDelete})=>{
    return (

        <ul className={css.list}>
            {contacts.map(({id, name, number})=>{
                return(
                    <li className={css.item} key={id}>{name}: {number}
                    <button className={css.btnDelete} type="button" onClick={()=> onDelete(id)}>Delete</button>
                    </li>
                )
            })}
        </ul>

    )
}