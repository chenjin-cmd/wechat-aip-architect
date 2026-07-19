/*
 * Local preview helper. It turns a rendered template into a standalone HTML
 * fragment for the WeChat rich-text editor: no <script>, no <style>, and the
 * visual properties are written as inline styles.
 */
(function () {
  const PROPERTIES = [
    'display', 'width', 'maxWidth', 'minWidth', 'height', 'marginTop',
    'marginRight', 'marginBottom', 'marginLeft', 'paddingTop', 'paddingRight',
    'paddingBottom', 'paddingLeft', 'borderTopWidth', 'borderRightWidth',
    'borderBottomWidth', 'borderLeftWidth', 'borderTopStyle', 'borderRightStyle',
    'borderBottomStyle', 'borderLeftStyle', 'borderTopColor', 'borderRightColor',
    'borderBottomColor', 'borderLeftColor', 'borderRadius', 'backgroundColor',
    'color', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'lineHeight',
    'letterSpacing', 'textAlign', 'textDecorationLine', 'textDecorationColor',
    'whiteSpace', 'wordBreak', 'overflowWrap', 'verticalAlign', 'listStyleType'
  ];

  function inlineStyle(source, target) {
    const computed = window.getComputedStyle(source);
    const declarations = PROPERTIES
      .map((property) => `${property.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}:${computed[property]}`)
      .join(';');
    target.setAttribute('style', declarations);
  }

  function build(root) {
    if (!root) throw new Error('找不到待导出的文章区域。');
    const copy = root.cloneNode(true);
    copy.querySelectorAll('script, style, [data-export-ignore]').forEach((node) => node.remove());
    const sourceNodes = [root, ...root.querySelectorAll('*')];
    const copyNodes = [copy, ...copy.querySelectorAll('*')];
    sourceNodes.forEach((source, index) => inlineStyle(source, copyNodes[index]));
    copy.setAttribute('data-wechat-exported', 'true');
    return copy.outerHTML;
  }

  async function copyWechatReady(root) {
    const html = build(root);
    const plainText = root.innerText;
    if (navigator.clipboard && window.ClipboardItem) {
      await navigator.clipboard.write([new ClipboardItem({
        'text/html': new Blob([html], { type: 'text/html' }),
        'text/plain': new Blob([plainText], { type: 'text/plain' })
      })]);
      return html;
    }
    const holder = document.createElement('div');
    holder.contentEditable = 'true';
    holder.style.cssText = 'position:fixed;left:-9999px;top:0;';
    holder.innerHTML = html;
    document.body.appendChild(holder);
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(holder);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    holder.remove();
    return html;
  }

  function addCopyButton(root) {
    const control = document.createElement('div');
    control.dataset.exportIgnore = 'true';
    control.style.cssText = 'max-width:760px;margin:16px auto;font:14px/1.5 system-ui,sans-serif;text-align:center;';
    control.innerHTML = '<button type="button" style="border:0;border-radius:6px;background:#172321;color:#fff;padding:10px 16px;cursor:pointer;">复制公众号兼容排版</button><p style="margin:8px 0 0;color:#52605d;">复制后到公众号正文粘贴；图片请在公众号后台上传或替换。</p>';
    control.querySelector('button').addEventListener('click', async () => {
      try {
        await copyWechatReady(root);
        control.querySelector('p').textContent = '已复制：可粘贴到公众号正文，再在后台替换或上传图片。';
      } catch (error) {
        control.querySelector('p').textContent = `复制失败：${error.message}`;
      }
    });
    root.before(control);
  }

  window.WechatInlineExporter = { build, copyWechatReady, addCopyButton };
}());
