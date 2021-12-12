//language=hbs
export const popupTmpl = `
    <div class="popup-outside {{ classPopup }}">
        <div class="popup">
            <div class="popup__header">
                <span class="popup__header-title">{{ title }}</span>
            </div>
            <div class="popup__content">
                {{#if textField}} <div class="popup__row">{{{ textField }}}</div> {{/if}}
                {{#if text}} <div class="popup__row">{{ text }}</div> {{/if}}
            </div>
            <div class="popup__footer">
                <span class="popup__link">{{{ button }}}</span>
            </div>
        </div>
    </div>
`;
