import { LightningElement } from 'lwc';

const POSITION_OPTIONS = [
    { label: '-- None --', value: '' },
    { label: 'Top', value: 'top' },
    { label: 'Top Left', value: 'top-left' },
    { label: 'Top Right', value: 'top-right' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom Left', value: 'bottom-left' },
    { label: 'Bottom Right', value: 'bottom-right' },
];

export default class PopoverPromptExample extends LightningElement {
    hasFooter = false;
    hasHeader = false;
    bodyIconName;
    headerIconName;
    position;
    positionOptions = POSITION_OPTIONS;

    closePrompt(event) {
        this.template.querySelector('c-popover-prompt').close();
    }

    openPrompt(event) {
        this.template.querySelector('c-popover-prompt').open();
    }

    togglePrompt(event) {
        this.template.querySelector('c-popover-prompt').toggle();
    }

    handleToggleChanges() {
        const checked = Array.from(this.template.querySelectorAll('lightning-input'))
            .filter(element => element.checked)
            .map(element => element.name);
        this.hasHeader = checked.includes('hasHeader');
        this.hasFooter = checked.includes('hasFooter');
    }

    handleBodyIconNameChange(event) {
        this.bodyIconName = event.detail.value;
    }

    handleHeaderIconNameChange(event) {
        this.headerIconName = event.detail.value;
    }

    handlePositionChange(event) {
        this.position = event.detail.value;
    }
}