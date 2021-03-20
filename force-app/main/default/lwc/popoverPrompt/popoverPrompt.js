import { LightningElement, api } from 'lwc';

export default class PopoverPrompt extends LightningElement {
    hasFooter = false;
    isOpen = false;
    @api position;

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
        switch (this.position) {
            case 'top':
                baseClasses.push(['slds-popover_prompt_top']);
                break;
            case 'top-left':
                baseClasses.push(['slds-popover_prompt_top-left']);
                break;
            case 'top-right':
                baseClasses.push(['slds-popover_prompt_top-right']);
                break;
            case 'bottom':
                baseClasses.push(['slds-popover_prompt_bottom-center']);
                break;
            case 'bottom-left':
                baseClasses.push(['slds-popover_prompt_bottom']);
                break;
            case 'bottom-right':
                baseClasses.push(['slds-popover_prompt_bottom-right']);
                break;
        }
        return baseClasses.join(' ');
    }

    get cssFooterClass() {
        const baseClasses = ['slds-popover__footer'];
        if (!this.hasFooter) {
            baseClasses.push(['slds-hide']);
        }
        return baseClasses.join(' ');
    }

    handleFooterSlotChange(event) {
        this.hasFooter = event.target.assignedElements().length !== 0;
    }
}