//language=hbs
export default `
<div class="page-authorization page-container">
    <div class="popup">
        <div class="popup__header">
            <span class="popup__header-title">Войти в аккаунт</span>
            <span class="popup__header-subtitle">Пожалуйста, войдите в аккаунт</span>
        </div>
        <div class="popup__content">
            {{#each groupsTextField}}
              <div class="popup__row">{{> textField}}</div>
            {{/each}}
        </div>
        <div class="popup__footer">
            <div class="popup__row">{{> button buttonAuth }}</div>
            <span class="popup__link">{{> button buttonRegistration}}</span>
        </div>
    </div>
</div>
`;
