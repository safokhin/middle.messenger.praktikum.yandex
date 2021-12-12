//language=hbs
export const buttonTmpl = `
    <button type="{{ type }}" class="button {{ classes }}" id="{{ id }}">
        {{#if icon}}
            <img class="button__img" src="{{ icon }}" alt="">
            {{#if iconText}} <span class="button__icon-text">{{ iconText }}</span> {{/if}}
        {{/if}}
        {{#if name}} <span>{{ name }}</span> {{/if}}
    </button>
`;
