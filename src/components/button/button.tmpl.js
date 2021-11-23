//language=hbs
export default `
    <button
        type="{{ type }}"    
        class="button {{ classes }}" 
        id="{{ id }}" 
        {{#if page}} onclick="changePage('{{ page }}')" {{/if}}
    >
        {{#if icon}}
            <img class="button__img" src="{{ icon }}" alt="">
            {{#if iconText}} <span class="button__icon-text">{{ iconText }}</span> {{/if}}
        {{/if}}
        {{#if name}} <span>{{ name }}</span> {{/if}}
    </button>
`;
