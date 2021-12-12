//language=hbs
export const authorizationTmpl = `
<div class="page-authorization page-container">
    <form class="popup" method="post">
        <div class="popup__header">
            <span class="popup__header-title">Войти в аккаунт</span>
            <span class="popup__header-subtitle">Пожалуйста, войдите в аккаунт</span>
        </div>
        <div class="popup__content">
            {{{ groupsTextField }}}
        </div>
        <div class="popup__footer">
            <div class="popup__row">{{{ buttonAuth }}}</div>
            <span class="popup__link">{{{ buttonRegistration }}}</span>
        </div>
        {{#if error}}<div class="popup__error">{{ error }}</div>{{/if}}
    </form>
</div>
`;
