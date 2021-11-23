// small - 38x38
// big - 120x120
//language=hbs
export default `
  <div 
      class="avatar {{ classes }} {{#if isEmptyPhoto}} avatar--empty {{/if}}"
  >
      {{#if isEmptyPhoto}}
        <span class="avatar__text">{{ nameSymbol }}</span>
      {{else}}
        <img src="{{ srcImage }}" alt="">
      {{/if}}
  </div>
`;
