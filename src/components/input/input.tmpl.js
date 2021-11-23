//language=hbs
export default `
    <label class="input-label">
        <input
            id="{{ id }}"
            class="input {{ classes }}"
            type="{{#if type }}{{ type }}{{ else }}text{{/if }}"
            value="{{ value }}"
            placeholder="{{ placeholder }}"
            name="{{ name }}"
        />
        {{#if labelText}}<span>{{ labelText }}</span>{{/if}}
    </label>
`;
