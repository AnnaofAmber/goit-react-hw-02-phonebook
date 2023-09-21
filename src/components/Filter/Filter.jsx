export const Filter = ({filter, onChange})=>{
    return (
    <div>
        <label htmlFor="search">Find contacts by name</label>
         <input id="search" name = "filter" value={filter} type="text" onChange={onChange}/>
    </div>
    )
}