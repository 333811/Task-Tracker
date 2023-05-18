import React, { useState } from "react";
import InputField from "../../GlobalComponents/InputField";
import CustomButton from '../../GlobalComponents/CustomButton';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CardFront = () => {
    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/login", {
                email, password
            }).then(res => {
                if (res.data === "exist") {
                    history("/Calendar", { state: { id: email} })
                }
                else if (res.data === "notexist") {
                    alert("Account does not exist");
                }
            })
                .catch(e => {
                    alert("Wrong Details")
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e);
            console.log("i was here e");
        }
    }
    const onChangeE = (value) => {
        setEmail(value);
    }

    const onChangeP = (value) => {
        setPassword(value);
    }


    return (
        <div class="card-front">
            <div class="center-wrap">
                <div class="section text-center">
                    <h4 class="mb-4 pb-3">Log In</h4>
                    <form action="/login" method="POST">
                        <div class="form-group">
                            <InputField
                                name={"email"}
                                type={"email"}
                                classes={"form-style"}
                                placeholder={"Your Email"}
                                icon={"fa fa-user"}
                                value={email}
                                onChange={onChangeE} />
                        </div>
                        <div class="form-group mt-2">
                            <InputField
                                name={"password"}
                                type={"password"}
                                classes={"form-style"}
                                placeholder={"Your password"}
                                icon={"fa fa-lock"}
                                value={password}
                                onChange={onChangeP} />
                        </div>
                        <CustomButton title={"Submit⇝"} classes={"flexCenter"} custom={"btn button mt-4"} onClick={submit} />
                        <p class="mb-0 mt-4 text-center"><a href="https://codepen.io/technext/pen/eYvoYgM?editors=1100" class="link">Forgot your password?</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CardFront