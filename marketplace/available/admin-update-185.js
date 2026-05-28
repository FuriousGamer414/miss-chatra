// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pe1D3LSTfkrH3A6Si14TGbtDBMPL2j2mV4xBaNc1ir3thx8Tbhy9h9lahiMN9g+QSXJ2KW/xF1BIyvazrOAXeZzigPQWURUAaFEiCY/JCVjm9lSx5hTRjLjhR1WXPzLMtKE371/cIH/VKOTmVj3g8aRLmSxCDj9XGRgzFH23ekdOIDyuF1unqfPQcb0doEontxsbwiQdJQV8JR3FOdXBAzdFPJLKYITECBuEMnIMnqSWMCtuyQ53P/dy+/sIMWlSEQ+upgEHBL+xW1CtAC/9qTCDn0d4VRi4arFgtOyWrEXo1ZxxGrVcUOUyD3o5fGoRkcIM8P3K98oy7C8F8j9EREiTsIYk40ahK+IE3waSQuTdno8ONUKcXq/Q7YxmkCctmXx4RbvFpmeYvM5q4k5NCq5F4V1d1cHjrpxJhPPAXJ5U634MwQkQhkuGJMuXs6pqfWmGDFWvmgltgWfMtl+Q1nw8ns5u1gTsvWNzhfskQ09quZ04fbPoDplwOaas+sF8pBtEPu9GWQErqkvwpqoO+sprOrXgC1E571m9sit+aqIK88fJwIvqrOrPL/F/yiMwa4k2yvhI/qZFLyxN4NC9A0yzeRrTJybmwfbVM/7cIVJMNVAiC+FgL6Hkhbby4ysOohV3hwYFvEN2/wroQ52yqPu/XaJQBhcTDtV7a6cFo0UVVZYSkxNHalyoyVvbrJYsnwXTZZEaDlWA8tkfHQUMYFtNQJFCLTb/nGbJ5rwBrp93UXJFfcBMYnP4l4RqM7/8sXWOTRtwoAnlmzhAJQmMdmEidCqoY63v7GDgZ5VXsuSQ2WKbJdotKhDfLG6tgQKk6vxZIkgjqf9dBwcXHiREdnMgaz1UE4sSJM25uD7FrvIcD28KsoYnr/y3pIl85Rhi7XuKWL5g66P9C3DrVmIm2rZxy5wTcMb+TihQNqvQGCY/Mh+m7Bf+oOqllY2n+xLGHR/jdJVib/JI77iz0lQ0bIU2lPS4jP7O1hOWviTTWGMaZ2WH3mXAu3NwV4VHAzgrww==';const _IH='74b84e85ea802516ce7f6b629da8da25edb90df88eed9dd68c3d585b5a60acfd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
