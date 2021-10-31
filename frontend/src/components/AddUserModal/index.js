import Parcel from "single-spa-react/parcel";
import { AddUserModal } from "@zuri/manage-user-modal";

const AddUserModal = ({ showModal, org_id, room_id }) => {
  const [show, setShow] = useState(showModal);

  const modalConfig = {
    title: "Add users",
    type: "addmodal",
    userList: [{ value: "chocolate", label: "Chocolate" }],
    addMembersEvent: (users) => {
      const member_id = userList.value;
      const data = {
        room_id: room_id,
        member_id: member_id
      };
    },
    show: true,
    handleClose: function () {
      this.show = false;
    }
  };

  return (
    <Parcel config={AddUserModal} wrapWith="div" parcelConfig={modalConfig} />
  );
};
export default AddUserModal;
