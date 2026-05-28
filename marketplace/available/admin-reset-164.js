// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1DS6uU0l1sp0dtHlY0HslmML9vvNcCClSe9MJdI/MjTuz+T5IqlM0Dj8N9Y07f2uOFnvU0DMyOUTxspcSYlsECwQP8F2XQuQjXUsD6v0jC74D8cyZD6Hp6FM+GlMTihk/a7z4AIAYLcyThWPxP4h/ZRFImV3ZWF/0/l/QWNl6rThrGwhCBMU2tywpXps1QOCfnNq6zl1wNk+DLaN5Et52xN1zvyjybDN/rzmFB2at+xYdDVrtKTwI9QyxtoMyepexUFzNjF8YsfyclU+U0PjAQCZhXnULxTISn0rFlvwfpJMW1zQXCyG/0GkogmjyvmekOfMPr+zMypF59fzxy/J7P24lulbbJtXUC8LEWVhrSi3hHLGjSj+0l5L1BaCSVfkIO1OMaSRSWK/gbqERrl/H+dfWHbg63gcDo0+OxFJM72epjPR1ffrstqFSi3mdzLY9BYLvxbA8rBW+nCikXwraRUqi5FpCRlhh1lfXuH51A0fbuZKe4/zp/xHe8GIqzUIARXsyaGGo5rlB/htLpJSW7Gya0FtK/W7lCWLE+Id7rNjG1lxXhmyeXXpjgqhu8Yr4Ygh0liYdegL32ZZgWMKYr5V4l8LGbWkN3GV1vyTY0DoVf9HA7nwsUvD5c3oiFPOZwpUhvn+PIApcfJYv4QfEHj6TLXlot332iR7U9VWfWj+iI/WctdS7zL3+gEkoIdfzLPMPO2ttMX11YTNQVVZ5csV0Uo5KYjDvHy2J06gPLofCtFcvC2lLTOzYvAr/xONzuzHfqO9uAb7XYUEBRoD3YCM/8XgZK2EgEKvLXG7rwS9qHu7VAn4+66AwmTWONSM2QYHduJzZINQ2aznpnKcmvN25zuKCJ4VU/GEZNLXqVexapyXUksyhnfkuzTwips4X24EhcGkK4Zhc8YaqhMO9H/Hz+yTsRkMA/u33jH2MTUhFuM8AuBqc9AxZV3gZnKOlmvZdenmwZuhw9Fm+55DPCv2qu0lj5JmdcJAF6st+n/sQnO8zrbQkvLVw==';const _IH='c0052b696eefaf818be606d840c458f17e7e7a5a4926bdade3e36ab176009fa6';let _src;

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
