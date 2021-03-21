import { LightningElement } from 'lwc';

const FEEDBACK_STATE_OPTIONS = [
    { label: '-- None --', value: '' },
    { label: 'Error', value: 'error' },
    { label: 'Warning', value: 'warning' },
];

const NUBBIN_OPTIONS = [
    { label: '-- None --', value: '' },
    { label: 'Left', value: 'left' },
    { label: 'Left Top', value: 'left-top' },
    { label: 'Left Bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top Left', value: 'top-left' },
    { label: 'Top Right', value: 'top-right' },
    { label: 'Right', value: 'right' },
    { label: 'Right Top', value: 'right-top' },
    { label: 'Right Bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom Left', value: 'bottom-left' },
    { label: 'Bottom Right', value: 'bottom-right' },
];

const WIDTH_OPTIONS = [
    { label: '-- None --', value: '' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
    { label: 'Full Width', value: 'full-width' },
];

export default class PopoverExample extends LightningElement {
    feedbackState;
    hasHeader = false;
    hasBodySmall = false;
    hasFooter = false;
    nubbin;
    width;

    get feedbackStateOptions() {
        return FEEDBACK_STATE_OPTIONS;
    }

    get nubbinOptions() {
        return NUBBIN_OPTIONS;
    }

    get widthOptions() {
        return WIDTH_OPTIONS;
    }

    closePopover() {
        this.template.querySelector('c-popover').close();
    }

    openPopover() {
        this.template.querySelector('c-popover').open();
    }

    togglePopover() {
        this.template.querySelector('c-popover').toggle();
    }

    handleToggleChanges() {
        const checked = Array.from(this.template.querySelectorAll('lightning-input'))
            .filter(element => element.checked)
            .map(element => element.name);
        this.hasHeader = checked.includes('hasHeader');
        this.hasBodySmall = checked.includes('hasBodySmall');
        this.hasFooter = checked.includes('hasFooter');
    }

    handleFeedbackStateChange(event) {
        this.feedbackState = event.detail.value;
    }

    handleNubbinChange(event) {
        this.nubbin = event.detail.value;
    }

    handleWidthChange(event) {
        this.width = event.detail.value;
    }
}