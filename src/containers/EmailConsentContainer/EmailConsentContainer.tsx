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
import { checkIfEmailExist, subscribeProfile } from '../../api/emailConsent';
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

export const KlaviyoApiCreateUpdate = async (
    checkoutData: object,
    addressData: object,
    emailConsent: boolean,
    emailListCode: string,
    smsConsent: boolean,
    smsListCode: string,
    meshApiPoint: string
): Promise<object|null> => {
    let checkIfEmailExists = false;
    let profile = null;
    let profileId;

    if (!checkIfEmailExists) {
        // TODO
        // let data = restructureCustomerObject(checkoutData, addressData, null, null, null, true);
        // profile = createProfile(data, meshApiPoint);
    } else {
        profile = checkIfEmailExists;
    }

    let subscribeData = [];

    if (profile && Object.keys(profile.data).length > 0) {
        profileId = profile.data.id;
    }

    if (emailConsent) {
        let data = restructureCustomerObject(checkoutData, addressData, 'email', profileId, emailListCode);

        if (Object.keys(data).length > 0) {
            console.log('---!');
            console.log(data);
            subscribeData.push(data);
        }
    }

    if (smsConsent) {
        let data = restructureCustomerObject(checkoutData, addressData, 'sms', profileId, smsListCode);

        if (Object.keys(data).length > 0) {
            console.log('---!');
            console.log(data);
            subscribeData.push(data);
        }
    }

    console.log('---');
    console.log(subscribeData);

    if (subscribeData.length) {
        // TODO
        // for (const subscribe of subscribeData) {
        //     subscribeProfile(subscribe, meshApiPoint);
        // }
    }

    return profile;
};

const restructureCustomerObject = (
    checkoutData: object,
    addressData: object,
    consentIdentifier: null|string,
    profileId: null|string,
    code: null|string,
    create: boolean = false
): object => {
    let subscriptions = {};
    let relationships = {};
    let addressDataAttributes = addressData.data;
    let data = {};

    if (create) {
        data = {
            data: {
                type: "profile",
                attributes: {
                    email: checkoutData.email || null,
                    phone_number: addressDataAttributes.telephone || null,
                    first_name: addressDataAttributes.firstName || null,
                    last_name: addressDataAttributes.lastName || null,
                    organization: addressDataAttributes.company || null,
                    location: {
                        address1: addressDataAttributes.street?.[0] || null,
                        address2: addressDataAttributes.street?.[1] || null,
                        city: addressDataAttributes.city || null,
                        country: addressDataAttributes.countryCode || null,
                        region: addressDataAttributes.region?.regionCode || null,
                        zip: addressDataAttributes.postcode || null
                    }
                }
            }
        };
    }

    if (!create) {
        if (consentIdentifier === "email" && profileId) {
            data = {
                data: {
                    type: "profile",
                    id: profileId,
                    attributes: {
                        email: checkoutData.email || null
                    }
                }
            };

            subscriptions.email = {
                marketing: {
                    consent: "SUBSCRIBED"
                }
            };
        }

        if (consentIdentifier === "sms" && profileId) {
            data = {
                data: {
                    type: "profile",
                    id: profileId,
                    attributes: {
                        phone_number: addressDataAttributes.telephone || null
                    }
                }
            };

            subscriptions.sms = {
                marketing: {
                    consent: "SUBSCRIBED"
                }
            };
        }

        if (profileId && Object.keys(subscriptions).length > 0) {
            data.data.attributes.subscriptions = subscriptions;
        }

        if (code) {
            relationships.list = {
                data: {
                    type: 'list',
                    id: code
                }
            };
        }

        if (profileId && code && Object.keys(relationships.list.data).length > 0) {
            data.data.relationships = relationships;
        }
    }

    return data;
};
