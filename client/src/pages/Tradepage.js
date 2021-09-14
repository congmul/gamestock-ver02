/* 
    Display Trading Form, components/Form
 */

import React from 'react';
import Form from "../components/Form";
import UserFormContainer from '../components/UserFormContainer'

export default function Tradepage() {
    return (
        <UserFormContainer>
            <div>
                <Form />
            </div>
        </UserFormContainer>
    )
}
