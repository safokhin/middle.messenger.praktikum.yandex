//language=hbs
export default `
  <div class="text-field {{ classes }}">
      <span class="text-field__name">{{ buttonName }}</span>
      <input 
          class="text-field__field" 
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
