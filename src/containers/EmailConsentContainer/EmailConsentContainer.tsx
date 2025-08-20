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
import { EmailConsentUiComponent } from '@/emailconsent/components';

export interface EmailConsentContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: string;
    name: string;
    checked: boolean;
}
    
export const EmailConsentContainer: Container<EmailConsentContainerProps> = ({ children, name, checked, ...props }) => {
  return (
    <div {...props}>
      <EmailConsentUiComponent children={children} name={name} checked={checked} />
    </div>
  );
};
