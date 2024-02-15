import { User } from "../User/User"

export const UserMain = ({users})=>{
    return(
        <>
           <li>
            {users.map(({id, ...otherProps})=>{
                return <User key={id} {...otherProps} />
            })}
           </li>
        </>
    )
}