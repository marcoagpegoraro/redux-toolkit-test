import { useSelector } from "react-redux"
import { getUser } from "../redux/test-redux/slice"

export default function ComponentTwo (props: any){

    const user = useSelector(getUser)

    return <div {...props}>
        <p>{user.username}</p>
    </div>
}