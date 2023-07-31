import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { changeUsername } from "../redux/test-redux/slice";

export default function ComponentOne (props: any){

    const dispatch = useDispatch()

    function handleInputOnChange(event: ChangeEvent<HTMLInputElement>): void {
        dispatch(changeUsername({username: event.target.value}))
    }

    return <div {...props}>
        <label htmlFor="username">Type your username and it will show in the another component</label>
        <input type="text" id="User" name="Name" onChange={handleInputOnChange} />
    </div>
}