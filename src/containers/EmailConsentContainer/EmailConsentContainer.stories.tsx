/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
// https://storybook.js.org/docs/7.0/preact/writing-stories/introduction
import type { Meta, StoryObj } from '@storybook/preact';
import { EmailConsentContainer as component, EmailConsentContainerProps } from '@/emailconsent/containers/EmailConsentContainer';

const meta: Meta<EmailConsentContainerProps> = {
  title: 'Containers/EmailConsentContainer',
  component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // centered | fullscreen
  },
  argTypes: {
    checked: {
      description: 'Set checkbox state',
      table: {
        type: { summary: 'boolean' }
      },
    }
  }
};

export default meta;

type Story = StoryObj<EmailConsentContainerProps>;

/**
 * ```ts
 * import { EmailConsentContainer } from '@/emailconsent/containers/EmailConsentContainer';
 * ```
 */

export const EmailConsentContainer: Story = {
  args: {
    checked: false,
    enable_sms_consent: true,
    enable_email_consent: true,
    sms_consent_label: 'Subscribe for SMS updates *',
    sms_disclosure: '* By checking this box and entering your phone number above, you consent to receive' +
        ' marketing text messages (e.g. [promos], [cart reminders]).',
    email_consent_label: 'Subscribe for email updates',
    sms_consent_name: 'klaviyo_sms_consent',
    email_consent_name: 'klaviyo_email_consent'
  },
};
