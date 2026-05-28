// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6f3ijkszT4bDLAgaBFF1lvFZbdVSK4JhOLrctHgDIepIUB6fCArAY/fc/MPoJBa1faDyOPkCNRc8eHxCyx0u5hZgl3G6fffpOB7dCWDC1jh5TJpzYxI2OYYz8SJOUh8ToOlGyEvTdPLolIq3U7tMLR1yDj5iybhAK72TIDfj9DdK+8H7DEpJ+iwBo/hEoDOHDd7RqJbDdOCHfF44+WlB/h0A4xJjkEygOLybch6dUtZpw/6IkF0Th0jBTccfKIRE6TkYq5DSBOyeNXz+I2C1Dxkt1tXFy7UnkpasI7zivqw0000FZ5CfF20DXXEtJP7CdIq3mafKF7US7df6HSGn5Gi04zYE4gHDj9VYQAdIZbmZ8VIxjqOftppjcAUCSCdWX6hoOLsq5MxCt84AmtswaxxujsJ2QJGMVO0Kr05cnv0+F2XP3y9ju0ZQs9sBecHi9e1SUyuaAsDyol0nbE7WRyc7HbVbGkUT/78YJPmbipEpn1ph5PvzdPW/erH7Mce0GX/hAXglW7DVa48LBX1JtxXGG3WjH0/1w0XWas+tI62qB1x3KbasnV+ym5InCeUPk6syu+BG+Tl+Wmwb0L+KbNyv2XepCtz67yncwzLDNuW5v7iRXvNGgD+AXOglcVjwOfbjE3MlEgrrCl9NkD7ih4ufXKx+7s5GAFUagsX1tcP+4HFzAAS1KZDeSuxZaUSH8dQsvLln+82udh5V14XpcZqSRrQXgkPXt2I34t/MIeHuQvywgUnzsZ9fkXtjb92dAxnlWwzqtW2tyu6ymQtPpogaQjB5JzwWxG7CJc1Ipr8MR7IoJ+oiwa7IQ+RCCoAfv3NEJmRkzQ/rgxmSkEM10OZ62EUYVaC3GDKE/hFldG3ro36trVWxJSiFM7TeVViL9MObmL7aLMCRGRDigXirHBIuKHGpaAvZybdKzvY3rDGV+IBtC0NnzrJaX0hXCxHm9C+0F/WAZnrpaulQ4dC2XYad4LFb/wV8qvgIiEzdgH40j57LkI+zj7fqXg10U+9/ZAXYiIXDGBnJfZJN1nX2WvKjD8WChlA6ib/cU9VSAjCeJ3na2oxJ+GsKs7A6tO/ReiddxWczIh6pCcFUMFV0rvuQzc4eITb0Z7L7V7k21quXSBESnxT1jWIbqJq159o5Xfzo5tpnjCuNCjsipKRLzrS59swspGH4yzi+6KbTU8fd+2IrgIvJpu/9Au6JpqqSB8GV9OdvGOjcH5KMj/AELirHguLsH7R/d5MxqJG/gEJp6+MR6aUVNhF5sPc18/FUBmP/0K2Af50SIhUgKs+JxSF6o8vpZ86x142AL6C84PZJzWRFI+N9NZ2ha8KpC+jWBeTs6Bar6cB2EA0sJ6EVvmIPSdTonD43h4VqwAs5EZ95fSBvTD4+2Q=';const _IH='be31b17caa67523f90b023baf72b7d79199195b5e23cd8f3b6f08e4c98244774';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
