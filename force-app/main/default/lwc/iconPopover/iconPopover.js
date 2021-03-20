import { LightningElement, api } from 'lwc';

export default class IconPopover extends LightningElement {
    @api feedbackState;
    @api hasBodySmall = false;
    hasFooter = false;
    hasHeader = false;
    @api nubbin;
    @api width;

    get cssPopoverContainerClass() {
        const baseClasses = ['slds-is-absolute icon-popover__popover-container'];
        switch (this.nubbin) {
            case 'left':
                baseClasses.push(['icon-popover__nubbin_left']);
                break;
            case 'left-top':
                baseClasses.push(['icon-popover__nubbin_left-top']);
                break;
            case 'left-bottom':
                baseClasses.push(['icon-popover__nubbin_left-bottom']);
                break;
            case 'top':
                baseClasses.push(['icon-popover__nubbin_top']);
                break;
            case 'top-left':
                baseClasses.push(['icon-popover__nubbin_top-left']);
                break;
            case 'top-right':
                baseClasses.push(['icon-popover__nubbin_top-right']);
                break;
            case 'right':
                baseClasses.push(['icon-popover__nubbin_right']);
                break;
            case 'right-top':
                baseClasses.push(['icon-popover__nubbin_right-top']);
                break;
            case 'right-bottom':
                baseClasses.push(['icon-popover__nubbin_right-bottom']);
                break;
            case 'bottom':
                baseClasses.push(['icon-popover__nubbin_bottom']);
                break;
            case 'bottom-left':
                baseClasses.push(['icon-popover__nubbin_bottom-left']);
                break;
            case 'bottom-right':
                baseClasses.push(['icon-popover__nubbin_bottom-right']);
                break;
        }
        return baseClasses.join(' ');
    }

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