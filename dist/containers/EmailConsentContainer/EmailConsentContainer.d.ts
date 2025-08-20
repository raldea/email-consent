import { HTMLAttributes } from 'preact/compat';
import { Container } from '@dropins/tools/types/elsie/src/lib';

export interface EmailConsentContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: string;
    name: string;
    checked: boolean;
}
export declare const EmailConsentContainer: Container<EmailConsentContainerProps>;
//# sourceMappingURL=EmailConsentContainer.d.ts.map