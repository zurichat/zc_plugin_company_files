import React from "react";
import icon from "../../../public/Icons/user/active.svg";

import Styles from "./MemberUserInfo.module.css";
const MemberUserInfo = (props) => {
  return (
      props.users.map(user => (
        <div key={user.id} className={Styles["load-user__user"]}>
          <div className={Styles["load-user__user--info"]}>
            <div className={Styles["load-user__user--img"]}>
              <img  className={Styles["user-img"]} src={icon} alt="img.."></img>
            </div>
            <div className={Styles["load-user__user--details"]}>
              <p className={`${Styles["load-user__user--name"]} {${Styles["stack"]}}`}>{user.name}</p>
              <p className={Styles["stack"]}>{user.designation}</p>
            </div>
          </div>
        </div>
      )
    )
  );
};

export default MemberUserInfo; 