import React from 'react'
import InputField from "../../GlobalComponents/InputField";
import CustomButton from '../../GlobalComponents/CustomButton';


const CardBack = () => {
    return (
        <div class="card-back">
            <div class="center-wrap">
                <div class="section text-center">
                    <h4 class="mb-4 pb-3">Sign Up</h4>
                    <div class="form-group">
                        <InputField
                            type={"text"}
                            classes={"form-style"}
                            placeholder={"Your Full Name"}
                            icon={"fa fa-user"} />
                    </div>
                    <div class="form-group mt-2">
                        <InputField
                            type={"email"}
                            classes={"form-style"}
                            placeholder={"Your Email"}
                            icon={"fa fa-envelope"} />
                    </div>
                    <div class="form-group mt-2">
                        <InputField
                            type={"password"}
                            classes={"form-style"}
                            placeholder={"Your password"}
                            icon={"fa fa-lock"} />

                    </div>
                    <CustomButton title={"Submit⇝"} classes={"flexCenter"} custom={"btn button mt-4"} />
                </div>
            </div>
        </div>
    )
}

export default CardBack