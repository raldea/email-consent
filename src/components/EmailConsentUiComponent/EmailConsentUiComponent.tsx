/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import {FunctionComponent} from 'preact';
import { HTMLAttributes } from 'preact/compat';
import { classes } from '@adobe-commerce/elsie/lib';
import { Checkbox } from '@adobe-commerce/elsie/components/Checkbox';
import '@/emailconsent/components/EmailConsentUiComponent/EmailConsentUiComponent.css';

export interface EmailConsentUiComponentProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: string;
  name: string;
}

export const EmailConsentUiComponent: FunctionComponent<EmailConsentUiComponentProps> = ({
  className,
  children,
  name,
  checked,
  ...props
}) => {
  return (
    <div {...props} className={classes(['emailconsent-email-consent-ui-component', className])}>
      <Checkbox name={name} label={children} checked={checked} />
    </div>
  );
};
