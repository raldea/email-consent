import { FunctionComponent } from 'preact';
import { HTMLAttributes } from 'preact/compat';

export interface EmailConsentUiComponentProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    children: string;
    name: string;
}
export declare const EmailConsentUiComponent: FunctionComponent<EmailConsentUiComponentProps>;
//# sourceMappingURL=EmailConsentUiComponent.d.ts.map