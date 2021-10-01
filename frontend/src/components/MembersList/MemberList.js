import React, {useState} from "react";
import MemberUserInfo from  "./MemberUserInfo";
import Styles from "./MemberUserInfo.module.css";


const dummyData = [
  {
  id : 1,
  name: "Tracemycode",
  designation: "frontEnd Developer",
  },
  {
    id : 2,
  name: "Reveal",
  designation: "FrontEnd developer",
  },
  {
  id : 3,
  name: "Damilola",
  designation: "UI/UX || Creative Design", 
  },
  {
  id : 4,
  name: "Omzi",
  designation: "BackEnd developer",
  }
];

const MemberList = () => {

  const [usersDetails, setUsersDetails] = useState([...dummyData]);
  const [tempUsersDetails, setTempUsersDetails] = useState([...dummyData]);
  const [noUser, setNoUser] = useState(false);


  const handleInput = (e) => {
    let obj = usersDetails;

    obj = tempUsersDetails.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()));
      if (obj.length === 0) {
        setNoUser(true);
      } else {
        setNoUser(false);
      }
        setUsersDetails(obj);
      };

  return (
      <div className={Styles["load-user__backdrop"]}>
        <div className={Styles["load-user__modal"]}>

          <div className={Styles["room_header_div"]}>
            <h3 className={Styles["room_header"]}># Files</h3>

            <button className={Styles["room_header_close"]}>X</button>
          </div>

          <div className={Styles["room_notification"]}>
            <h4 className={Styles["room_notify"]}>Get Notifcation for @ Mentions</h4>
            <h4 className={Styles["room_notify"]}>Start a Call</h4>
          </div>

          <p className={Styles["room_para"]}>Members</p>

          <form className={Styles["load-user__form"]}>
            <input className={Styles["searchbar"]} type="text" autoComplete="off" name="text" onChange={handleInput} placeholder="Search members"/>
          </form>

          <div className={Styles["load-user__users"]}>
            {!noUser && <MemberUserInfo users={usersDetails}/>}
            {noUser && <p className={Styles["load-user__no-user"]}>No Member found..</p>}
          </div>
        </div>
      </div>

    );
};

export default MemberList;        