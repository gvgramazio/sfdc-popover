import { LightningElement, api } from 'lwc';

export default class Popover extends LightningElement {
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
        const baseClasses = ['slds-popover', 'slds-nubbin_left'];
        baseClasses.push([
            this.isOpen ? 'slds-visible' : 'slds-hidden'
        ]);
        return baseClasses.join(' ');
    }
}