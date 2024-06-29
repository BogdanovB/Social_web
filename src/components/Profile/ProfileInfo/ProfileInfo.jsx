import React from "react";
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return <div>

        <div>
            <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="img" />
        </div>

        <div className={s.descriptionBlock}>
            ava + descrip
            https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg
        </div>

    </div>
}

export default ProfileInfo;