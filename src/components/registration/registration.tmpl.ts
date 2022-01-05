//language=hbs
export const registrationTmpl = `
<div class="page-registration page-container">
    <form class="popup" method="post" onsubmit="return false">
        <div class="popup__header">
            <span class="popup__header-title">Регистрация</span>
            <span class="popup__header-subtitle">Для входа в чат, вам необходимо зарегистрироваться</span>
        </div>
        <div class="popup__content">
            <div class="popup__row">{{{ groupsTextField }}}</div>
        </div>
        <div class="popup__footer">
            <div class="popup__row">{{{ buttonRegistration }}}</div>
            <span class="popup__link">{{{ buttonAuth }}}</span>
        </div>
        {{#if error}}<div class="popup__error">{{ error }}</div>{{/if}}
    </form>
</div>
`;
