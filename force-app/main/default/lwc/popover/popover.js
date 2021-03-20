import { LightningElement, api } from 'lwc';

export default class Popover extends LightningElement {
    isOpen = false;
    hasFooter = false;
    hasHeader = false;

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
        const baseClasses = ['slds-popover', 'slds-nubbin_left'];
        if (!this.isOpen) {
            baseClasses.push(['slds-popover_hide']);
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

    get cssHeaderClass() {
        const baseClasses = ['slds-popover__header'];
        if (!this.hasHeader) {
            baseClasses.push(['slds-hide']);
        }
        return baseClasses.join(' ');
    }

    handleFooterSlotChange(event) {
        this.hasFooter = event.target.assignedElements().length !== 0;
    }

    handleHeaderSlotChange(event) {
        this.hasHeader = event.target.assignedElements().length !== 0;
    }
}