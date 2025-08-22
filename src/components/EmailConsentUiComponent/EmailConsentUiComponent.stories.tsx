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
import { EmailConsentUiComponent as component, EmailConsentUiComponentProps } from '@/emailconsent/components/EmailConsentUiComponent';

/**
 * Use EmailConsentUiComponents to [replace this text with components purpose].
 */
const meta: Meta<EmailConsentUiComponentProps> = {
  title: 'Components/EmailConsentUiComponent',
  component,
  argTypes: {
    checked: {
      description: 'Set checkbox state',
      table: {
        type: { summary: 'boolean' }
      },
    }
  },
};

export default meta;

type Story = StoryObj<EmailConsentUiComponentProps>;

/**
 * <EmailConsentUiComponent>👋 Hello from your new EmailConsentUiComponent story!</EmailConsentUiComponent>
 */
export const EmailConsentUiComponent: Story = {
  args: {
    label: "Checkbox Label",
    name: "checkbox_name",
    checked: false
  },
};
