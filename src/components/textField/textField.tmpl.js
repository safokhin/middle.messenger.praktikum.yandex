//language=hbs
export default `
  <div class="text-field {{ classes }}">
      <label class="text-field__name" for="{{ id }}">{{ buttonName }}</label>
      <input 
          id='{{ id }}'
          class="text-field__input" 
          type="text" 
          placeholder="{{ placeholder }}" 
          name="{{ name }}" 
          value="{{ value }}" 
          {{#if disabled}} disabled {{/if}}
      />
      {{#if error}}
        <span class="text-field__error">{{ errorText }}</span>
      {{/if}}
  </div>
`;
