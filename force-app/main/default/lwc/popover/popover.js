import { LightningElement, api } from 'lwc';

export default class Popover extends LightningElement {
    isOpen = false;
    @api feedbackState;
    hasFooter = false;
    hasHeader = false;
    @api hasBodySmall = false;
    @api nubbin;
    @api width;

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
        const baseClasses = ['slds-popover'];
        switch (this.nubbin) {
            case 'left':
                baseClasses.push(['slds-nubbin_left']);
                break;
            case 'left-top':
                baseClasses.push(['slds-nubbin_left-top']);
                break;
            case 'left-bottom':
                baseClasses.push(['slds-nubbin_left-bottom']);
                break;
            case 'top':
                baseClasses.push(['slds-nubbin_top']);
                break;
            case 'top-left':
                baseClasses.push(['slds-nubbin_top-left']);
                break;
            case 'top-right':
                baseClasses.push(['slds-nubbin_top-right']);
                break;
            case 'right':
                baseClasses.push(['slds-nubbin_right']);
                break;
            case 'right-top':
                baseClasses.push(['slds-nubbin_right-top']);
                break;
            case 'right-bottom':
                baseClasses.push(['slds-nubbin_right-bottom']);
                break;
            case 'bottom':
                baseClasses.push(['slds-nubbin_bottom']);
                break;
            case 'bottom-left':
                baseClasses.push(['slds-nubbin_bottom-left']);
                break;
            case 'bottom-right':
                baseClasses.push(['slds-nubbin_bottom-right']);
                break;
        }
        switch (this.width) {
            case 'small':
                baseClasses.push(['slds-popover_small']);
                break;
            case 'medium':
                baseClasses.push(['slds-popover_medium']);
                break;
            case 'large':
                baseClasses.push(['slds-popover_large']);
                break;
            case 'full-width':
                baseClasses.push(['slds-popover_full-width']);
                break;
        }
        switch (this.feedbackState) {
            case 'error':
                baseClasses.push(['slds-popover_error']);
                break;
            case 'warning':
                baseClasses.push(['slds-popover_warning']);
                break;
        }
        if (!this.isOpen) {
            baseClasses.push(['slds-popover_hide']);
        }
        return baseClasses.join(' ');
    }

    get cssBodyClass() {
        const baseClasses = ['slds-popover__body'];
        if (this.hasBodySmall) { // Applies max-height and overflow-y
            baseClasses.push(['slds-popover__body_small']);
        }
        return baseClasses.join(' ');
    }

    get cssCloseButtonClass() {
        const baseClasses = [
            'slds-button',
            'slds-button_icon',
            'slds-button_icon-small',
            'slds-float_right',
            'slds-popover__close'
        ];
        if (this.feedbackState == 'error') {
            baseClasses.push(['slds-button_icon-inverse']);
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