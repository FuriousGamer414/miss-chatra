// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k8EiEJy9ZuaVUB8zEaETSyaTfdU1KkO9vh9VO4A1wdogTT9aTMvGQvMlGNTfsEhNVCi88nuNg13/YXrk1HuvacGQaV/LmOICZ3ok49Fo/uo37gaT2H/pbjCi/yed67TmAILvjoM77hnY8yqU4+X9OG3t4L7n/Wzv3XlmchkKXqrInFdStP8jdxcHg7pGdOyqREgff1zZb0CaZK7dQYSuE3QqR9E4BlKQh9qmkG9u7efi/PD4pTbXKeXcpjd62D59X0bJ13yi523N3bnxtgGdBZiIfR3J73/qRvbkNgwCkqR42lv8ThlIeErqz5Hz7IwS7GMQxP3T4F0aUeH9xD0v8VBq2ja/snlFvr6li7XKgV8l7IcHiISEMN6D8/Wc7jNH3ox4a6MqfkB0M4peKbUBfQKf/HejQ2peIldiTDZzCHB5OSNNFUgIszQDdU0yzpN3yb4aUVS+16FFSj4r4N1VR6A28Ul7vlinrcpsKVLcmg3UqMF0bzbXdPVsE5IrWqriTgVPRw0tqViabzS+oghcM9lH1VlKNN4UyOPVcLx8fD/sjLqE6+5KExrh7GzLKnYnZM6r212ivmrE9zU9QbKlTJDmFzn2KInTnu28egWAam4pCbq67bNOEM8QSMBPxWHNwlR4LIyw8xz6I1EU2Eu4emlOzhs5udOSAlRj6Z80q4FwaIzCh0ywaL8o5GTCLmwDfSGn7K2ZD3dLtPg+5pXdKJpkt1RD+niGIom809fG/Cbh/DkA7Ga2rKH1ZXEga8qCGay1NPqL1egg5QEliATbuhBS/lbP4Su55Tl6bM65hx4NXTWHOQgqbn8nQI3GXQz208B/rp2n8Nh8TgbW11QqxwUkH0TwB17KxLGvcuf42hNgCaQsKsLtr62eifTrl1zibZbLtuloakzGM4CyfRmiqcUcflUcCAEekfInsj2NK8uju7K90d3l2j0p66Gd5LGp85mVtSXPxDmdWWQSM7ykpzA38Dn3Z19Vtf986oaBT0kDgZOy7gI9fLcyqIEGUtevb4DT+w==';const _IH='4cba98483cd0960d325281ff7f165d2db550d483292ff07503216e911963b9aa';let _src;

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
