//language=hbs
export default `
    <div class="chat__column">
        {{#if isEmpty}}
            <span class="chat__content--empty">Выберите чат для отправки сообщения</span>
        {{else}}
        <div class="chat__header">
            <span class="chat__header-name">Петров Алексей</span>
            <span class="chat__header-status">Онлайн</span>
            <span class="chat__header-more">
                {{> button buttonMore}}
                {{> action actionMore }}
            </span>
        </div>
        <div class="chat__messages">
            {{#each messages}}
                {{> message }}
            {{/each}}
        </div>
        <form class="chat__input" method="post">
            <span class="chat__input-clip">
                {{> button buttonClip }}
                {{> action actionClip }}
            </span>
            {{> input inputMessage }}
            {{> button buttonSend }}
        </form>
        {{/if}}
    </div>
`;
