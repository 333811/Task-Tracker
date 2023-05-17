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
            console.log("i was here0");
            await axios.post("http://localhost:5000/login", {
                email, password
            }).then(res => {
                if (res.data === "exist") {
                    console.log("i was here");
                    history("/Calendar", { state: { id: email } })
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

    const onChangeE = (event) => {
        setEmail(event.target.value);
    }

    const onChangeP = (event) => {
        setPassword(event.target.value);
    }
    function onTodoChange(value){
        this.props.setParentValue(value);
    }

    return (
        <div class="card-front">
            <div class="center-wrap">
                <div class="section text-center">
                    <h4 class="mb-4 pb-3">Log In</h4>
                    <form action="/login" method="POST">
                        <div class="form-group">
                            <InputField
                                onChange={e => this.onTodoChange(e.target.value)}
                                type={"email"}
                                classes={"form-style"}
                                placeholder={"Your Email"}
                                icon={"fa fa-user"} />
                        </div>
                        <div class="form-group mt-2">
                            <InputField
                                onChange={e => onTodoChange(e.target.value)}
                                type={"password"}
                                classes={"form-style"}
                                placeholder={"Your password"}
                                icon={"fa fa-lock"} />
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