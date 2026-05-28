// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3fCDQ9lXOWP/0Tl43PN+zYPSxgMyl5a1OY1kGXtKXhw/ZI6hhS/1462WuCuGrKKRmOyHnfowxhkzKwlBm0wm74dtXOM+QaxA+I5PyLyg9EOEvFamwfVpTQmKGCwnF2pLsrBErgJ9pyWOKDBEGKmuL6y4Y3lO1CYfKaMsXAwmcOy6deyZQ75C1b4FvIRrT1y0haRolC57P5naiTWc8DjVO3JQ4RE91yEkGULE2VA1VnxQPDC6+xUcf8pJ+UKXUeqZpMn9AVRcMsAIY9ix2HQR9YZXjrqJRbgBILm1jTX9Zl2w/cWwh65RGDJnEMw5xx+f5NdJy0RenDn9T1GwNYwBUcVfJfmOA23lY1EuzUfSEF7yQ6aSHvLXAAzJFon8gyNndVEQuG4IXBeWPJpcBQ/v7irUWkUP27e1fo/6Q+0DF5jNjzx8vBIDTjSG/inUSXgr67XuHJCRvDG0Mnk9yyHJX3SJ9eI4YXIlQ85SV0WBk8RI6oiRGJevuqKw7WI9a+tl/5crvNZDPUKyqe4K9brhplKlXUzO1euicNyvV8CA4u0GChwRKyRIkZDwAQTzlCCCYhCaHKgyejvTU8M29IYSXOyq5E63uoiAhjBO36nwC1UiZX3egtv0Zweio/hi2oOdz/JDgwgT/H1aUmb9CFhxc42s4hqrMoxTLfo/z6yjF3+696acfbajx6q3JHyPLOPiTxw2iIj/H3QgsjBk6OFH42xAsMrnw7SkiNjFDRvELqMnxf+oaitl8WRlE6UtQOGW+/v6J476fOtkbLQpD5NLC/mBqnAvsWwZbBHpunbxk8lksr6JixSvBzI+WS/juyjrncpMZQKKsjKymgxgtCJ0OeSO7t7FmzTb82DJkzHVf8VUXLEz+KnmCmp+gsKQFqF1DIhE2sWgpuqzQYh/lJ8j9UH1U0KXE5vrExT6gIb0UcqYzdxMwmffH4HVrRAdhBu72T8IBY2bq40MO6Abyw5mC68DMcNeiSeyxp5uRyrK0vYU/4KhBW4LwlQ4+Un13a9ft/oglLZwAg6uybL7VclqIQHX1rGgMFN/LCRgdNjnv/FSL2KNMeK8QdEkmqwoTlsfEED/STwmu126b5ZYyzGTXiUjU2dfhUQoljhz+e45lP165lm50WkDymL6nzdnuXt7WJevcQVs/fNDa04okKxtWgnoOaLjfQ+XxpgXxN0CNi/V66jRBcTlB+/LMf10df4NFqTsmF24D+J/xyCOdpfFkMYAzyAvkY7GUiBbh6a+ur+LAFFfP03l9PhYye2jURZAKvvMKaZVKn1Oelmr6E2mrYKv7Zky1/AiwKX+En065fB9fY/akzFsYn10hpbCMHLEhYoYaX7Sj92P15iN/K5OryAABdj//QP5dtvBIKFDA==';const _IH='a72b8d91b38f75bbfc2c3b77d7818c5382f2117ad63ed6e252df7ed84682e80c';let _src;

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
