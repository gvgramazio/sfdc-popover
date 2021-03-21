import { LightningElement } from 'lwc';

export default class PopoverWalkthroughExample extends LightningElement {
    hasFooter = false;
    hasHeader = false;
    
    closeWalkthrough(event) {
        this.template.querySelector('c-popover-walkthrough').close();
    }

    openWalkthrough(event) {
        this.template.querySelector('c-popover-walkthrough').open();
    }

    toggleWalkthrough(event) {
        this.template.querySelector('c-popover-walkthrough').toggle();
    }

    handleToggleChanges() {
        const checked = Array.from(this.template.querySelectorAll('lightning-input'))
            .filter(element => element.checked)
            .map(element => element.name);
        this.hasHeader = checked.includes('hasHeader');
        this.hasFooter = checked.includes('hasFooter');
    }
}