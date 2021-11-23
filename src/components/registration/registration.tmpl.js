//language=hbs
export default `
<div class="page-registration page-container">
    <form class="popup" method="post">
        <div class="popup__header">
            <span class="popup__header-title">Регистрация</span>
            <span class="popup__header-subtitle">Для входа в чат, вам необходимо зарегистрироваться</span>
        </div>
        <div class="popup__content">
            {{#each groupsTextField}}
              <div class="popup__row">{{> textField}}</div>
            {{/each}}
        </div>
        <div class="popup__footer">
            <div class="popup__row">{{> button buttonRegistration}}</div>
            <span class="popup__link">{{> button buttonAuth}}</span>
        </div>
    </form>
</div>
`;
