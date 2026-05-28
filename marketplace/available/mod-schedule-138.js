// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/IRrtTmmDC5Bry1QVDimhK/CreDubktGXzSkTV8M0ajGpPVaBXLR2RIwonUrY0eKDEfg+lhMIbI68B74foCxWdOkU495v5IciJwfwpP+DRTNWsxIu46qCPL9IFlDEVCfbf9QeaZ6NeLmQtE6dXU0lqyZHIKIMLfC1vMgUlUrpnjWfYGyFIYB/6R6ukAVIsq71DWjjQej6dp4u/UxX+PS5SWQ+ei9LJ4KZmZRvPTSZyib1ZoI9i6SgvRisU6UxNA0yGV9Wg+Hl5ranp79VX8sjojk7pVanRB3VEs+2udIO6vpF76xp3z4K041Q/c6eL6w8LLv1657rTRt/YmD3jUMLDC8+tY2ZFUCaxE16sUJsEMs2VBD9m4HlaD01g/WVrCty+KKtEgnWylXBe3Xz0XygBWeqQf/pLkqTFPThKpPAnlOZsv46CeQwmbEwwJZ5MPgWRKaJEIiDjvunb21CzcIclHII8ye9n0FCwWGrm6ytjOUDgL7BBq5CJnrUuw/SlKKYJ3TFPLL7DuA0NXZYuQBe2EQMSXColRVFRh7NrSjY/hIQ9Upf9nO5aULoF2KB2eh8bFWm4hyRVvJzJUXsE4iTGwWGDt/ZURrL/rqI4tqARbwmkMqZXV/RF+HpKAmRh9/T2AqwW6JZf02QzveMvdfV3L/pnIEyG3eS6+k0Z5251UhM6J0RONHBe3oxnosdItjnhh/EIdo67u4N0kMjn0EeNOOPI1h+CSHZmh1dKbw03c/2G1nMdOQfHEUe6DQOtwet4/ZTzPsXgo33+xmrwlsxUdhJr97FTO3LohjOgLUAZF/vxIz669AYUN0NvQ0o2TMLTpOJQSOinHMTyIjmBIfgHulZZDRnQV4FIc13czcSOy1UVA+tfpdvQ/8EagAdS+S/QmW7uagmJiHGIbIOtXY6Mrm0eN2wWSnPyfQ0qHBrGrOeipKxY+YWDJJyptMKbKpOd875SrkbnX/lSF5U2m7YcNP/qp4Y6Z2KWerKN8ESIibdXnD0qmH7olb3r/Z2urnu0l6ucNqNIjc8WTQ5/C7yckCyOubib9FLG4GqoSy9v+/o19C0miUKGqPqAnqcEAO06AvpvgLxFfz/DZ6pzfNfCGw4EEwgrNes1R2Hb+eL7ggj1pPIWmDQsPFFh5url1QuIxIl6ViC98t9bf5EGkGr6TQYVCCi3Nl3VlGjYkaCeJ8tK3UNF2yXYPqER7dzPt88GxubK4/wcpNSrk+2S+ge/vlf4VgjGwpbnY1FdJ8oib0O7G8eR0kHMj6YlzE69Sy2OXqE+0bidq99Z1hvizSL5iaokDXBU0cTckkxuc9nGNJfvvA2YToyydXktFfhlzr9U6nnHXQnncTZ9cLYTg2QbCspGF+9y796wcnY7IFc9WBPbYbB479NcJ7BJdsINBe7TkyrD6qzP6lY91RA==';const _IH='1026494a2a54946aaebfa7844a711aaffed07a23dac45de298147f6435199f42';let _src;

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
