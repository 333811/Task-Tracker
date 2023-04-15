import React from 'react'
import InputField from "../../GlobalComponents/InputField";
import CustomButton from '../../GlobalComponents/CustomButton';

const CardFront = () => {
    return (
        <div class="card-front">
            <div class="center-wrap">
                <div class="section text-center">
                    <h4 class="mb-4 pb-3">Log In</h4>
                    <div class="form-group">
                        <InputField
                            type={"email"}
                            classes={"form-style"}
                            placeholder={"Your Email"}
                            icon={"fa fa-user"} />
                    </div>
                    <div class="form-group mt-2">
                        <InputField
                            type={"password"}
                            classes={"form-style"}
                            placeholder={"Your password"}
                            icon={"fa fa-lock"} />
                    </div>
                    <CustomButton title={"Submit⇝"} classes={"flexCenter"} custom={"btn button mt-4"} />
                    <p class="mb-0 mt-4 text-center"><a href="https://codepen.io/technext/pen/eYvoYgM?editors=1100" class="link">Forgot your password?</a></p>
                </div>
            </div>
        </div>
    )
}

export default CardFront