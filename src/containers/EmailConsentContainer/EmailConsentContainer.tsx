/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import { HTMLAttributes } from 'preact/compat';
import { Container } from '@adobe-commerce/elsie/lib';
import { checkIfEmailExist, emailConsent } from '../../api/emailConsent';
import { EmailConsentUiComponent } from '@/emailconsent/components';

export interface EmailConsentContainerProps extends HTMLAttributes<HTMLDivElement> {
    checked: boolean;
    enable_sms_consent: boolean;
    enable_email_consent: boolean;
    sms_consent_label: string;
    email_consent_label: string;
    sms_consent_name: string;
    email_consent_name: string;
    sms_disclosure: string;
}
    
export const EmailConsentContainer: Container<EmailConsentContainerProps> = ({
    enable_sms_consent,
    enable_email_consent,
    sms_consent_label,
    email_consent_label,
    sms_consent_name,
    email_consent_name,
    checked,
    sms_disclosure,
    ...props
}) => {
  return (
    <div {...props}>
        {enable_email_consent && (
            <EmailConsentUiComponent label={email_consent_label} name={email_consent_name} checked={checked} />
        )}
        {enable_sms_consent && (
            <div class="sms-consent">
                <EmailConsentUiComponent label={sms_consent_label} name={sms_consent_name} checked={checked} />

                <div class="sms-disclosure">
                    {sms_disclosure}
                </div>
            </div>
        )}
    </div>
  );
};

export const KlaviyoApiCreateUpdate = (
    email: string,
    apiKey: string,
    apiUrl: string,
    apiRevision: string
): string => {
    console.log(emailConsent());
    checkIfEmailExist(email, apiKey, apiUrl, apiRevision);

    return `Hello!`;
};
