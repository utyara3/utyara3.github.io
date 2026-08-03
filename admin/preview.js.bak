// Простой компонент предпросмотра, который подхватывает твои стили
const ContentPreview = createClass({
  render: function() {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']);
    const description = entry.getIn(['data', 'description']);
    const body = this.props.widgetFor('body');

    // Оборачиваем в div с классом, который есть в твоем style.css (или создай .cms-preview в CSS)
    return h('div', { className: 'content-container cms-preview', style: { padding: '20px', maxWidth: '800px', margin: '0 auto' } },
      h('h1', {}, title),
      description ? h('p', { className: 'description' }, description) : null,
      h('div', { className: 'markdown-body' }, body)
    );
  }
});

// Регистрируем предпросмотр для всех трех коллекций
CMS.registerPreviewTemplate('guide', ContentPreview);
CMS.registerPreviewTemplate('stonescript', ContentPreview);
CMS.registerPreviewTemplate('speedrun', ContentPreview);
