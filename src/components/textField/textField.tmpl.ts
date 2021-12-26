//language=hbs
export const textFieldsTmpl = `
  <div class="text-field {{ classes }}">
      <label class="text-field__name" for="{{ id }}">{{ buttonName }}</label>
      <input 
          id='{{ id }}'
          class="text-field__input" 
          type="{{#if type}}{{ type }}{{else}} text {{/if}}" 
          placeholder="{{ placeholder }}" 
          name="{{ name }}" 
          value="{{ value }}" 
          {{#if disabled}} disabled {{/if}}
      />
      {{#if errorText}}
        <span class="text-field__error">{{ errorText }}</span>
      {{/if}}
  </div>
`;
