/* 
    Display Trading Form, components/PurchaseForm
 */

import React from 'react';
import PurchaseForm from "../components/PurchaseForm";
import UserFormContainer from '../components/UserFormContainer'

export default function Tradepage() {
    return (
        <UserFormContainer>
            <div>
                <PurchaseForm />
            </div>
        </UserFormContainer>
    )
}
