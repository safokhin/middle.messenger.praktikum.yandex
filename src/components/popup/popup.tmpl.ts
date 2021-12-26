//language=hbs
export const popupTmpl = `
    <form class="popup-outside {{ classes }}" id="{{ id }}">
        <div class="popup">
            <div class="popup__header">
                <span class="popup__header-title">{{ title }}</span>
                <span class="popup__header--close">{{{ buttonClose }}}</span>
            </div>
            <div class="popup__content">
                {{#if textField}} <div class="popup__row">{{{ textField }}}</div> {{/if}}
                {{#if text}} <div class="popup__row">{{ text }}</div> {{/if}}
            </div>
            <div class="popup__footer">
                <span class="popup__link">{{{ button }}}</span>
            </div>
        </div>
    </form>
`;
