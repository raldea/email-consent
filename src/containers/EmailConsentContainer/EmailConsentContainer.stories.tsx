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
    children: {
      description: 'Add text to the EmailConsentUiComponent.',
      table: {
        type: { summary: 'string' }
      },
    },
    name: {
      description: 'Add name to the EmailConsentUiComponent checkbox.',
      table: {
        type: { summary: 'string' }
      },
    },
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
    children: 'Email Consent',
    name: 'email_consent',
    checked: false
  },
};
