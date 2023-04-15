import React from 'react'
import '../css Files/forms.css';
import CardBack from './FormComponents/CardBack';
import CardFront from './FormComponents/CardFront';

const Forms = () => {
    return (
        <div class="forms">
            <div class="section flexCenter">
            <div class="logo formsLogo">Task Tracker</div>
                <div class="container">
                    <div class="row full-height justify-content-center">
                        <div class="col-12 text-center align-self-center py-5">
                            <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <CardFront />
                                        <CardBack />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>

    )
}

export default Forms