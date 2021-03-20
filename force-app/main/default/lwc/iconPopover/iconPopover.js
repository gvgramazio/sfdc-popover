import { LightningElement, api } from 'lwc';

export default class IconPopover extends LightningElement {
    @api feedbackState;
    @api hasBodySmall = false;
    hasFooter = false;
    hasHeader = false;
    @api nubbin;
    @api width;

    handleFooterSlotChange(event) {
        this.hasFooter = event.target.assignedElements().length !== 0;
    }

    handleHeaderSlotChange(event) {
        this.hasHeader = event.target.assignedElements().length !== 0;
    }

    togglePopover(event) {
        event.preventDefault();
        event.stopPropagation();
        this.template.querySelector('c-popover').toggle();
    }
}