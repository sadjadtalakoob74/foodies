'use client'

import React from 'react';
import {useFormStatus} from 'react-dom';
import classes from "@/app/meals/share/page.module.css";

function MealsFormSubmitBtn(props) {
    const {pending} = useFormStatus();
    return (
        <p className={classes.actions}>
            <button type="submit" disabled={pending}>{pending?'submitting...':'Share Meal'}</button>
        </p>
    );
}

export default MealsFormSubmitBtn;