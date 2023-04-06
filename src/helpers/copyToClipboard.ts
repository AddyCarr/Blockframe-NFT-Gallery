import { toast } from 'react-toastify'

export function copyToClipboard(textToCopy: string) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy);
        toast('Copied to cliboard!')
    }
}