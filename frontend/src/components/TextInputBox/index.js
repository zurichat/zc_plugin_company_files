import Parcel from "single-spa-react/parcel"
import { AddUserModal } from "@zuri/manage-user-modal"



const InputBox = () =>{

    const textBoxConfig = {
    title: "Add People",
    type: "inputbox",
    showModal: true,
    userList: [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
    ],
    addMembersEvent: (users)=>{
        console.log("This is a test",users)
    },
    }
    return(
    <Parcel
    config={AddUserModal}
    wrapWith="div"
    parcelConfig={textBoxConfig}
    />
   )
}
export default InputBox; 