import { LightningElement, api } from 'lwc';

export default class PopoverPrompt extends LightningElement {
    isOpen = false;

    @api
    close(event) {
        this.isOpen = false;
    }

    @api
    open(event) {
        this.isOpen = true;
    }

    @api
    toggle(event) {
        this.isOpen = !this.isOpen;
    }

    get cssClass() {
        const baseClasses = ['slds-popover', 'slds-popover_prompt'];
        if (!this.isOpen) {
            baseClasses.push(['slds-popover_hide']);
        }
        return baseClasses.join(' ');
    }
}