// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OME+U+ARMby6+XQx/ri509FXnsPO2mhMSQ6PIASrJpG/Y3cGKYaaeDl6F+6mdLo1UaumQOl66R8rbzS3QvX83bIBDner60Fvtk2Yt92UClVYVCsMmMB9sExqRII/9od3yDcDwWwHWKhR9JtCyALhphz5+6nBgrkVTMvCQt+pV9OOM12kA+NP1iW0xjEOe3KGOpJKzZb9yjqwjtFoa5p1S4wXn8ITplhJJqUfhO+dsSy+RJLFR7SGjOrnZle2seABTZmVamqEtxt/b97bgEQPo5lzIA50q7DNxZU4YL8KBwsNUEQW8TtfK0ZAxLM7jdl6ws9V6ioS9wLo1KgJe87edt9PWOFEuZb0r75zFuhNzKhofhKna9InJkleUUemjdZj98mx9MPZGCRtqqhwAFJlR1xu8gKQo6wZBy0ivfTYWXp/nIt5KCYzCMHyFxpmgcS1ZLHxnmAisnh3O3qqhDkXdYrDXFVh7VYjpBczKogOBAJ7l2OGSjEyw1pMdoxK1aWRvw8IOqxKvoTlLgu5KE+5IOpHCg1dUYVUbyzHoAwuSFY5/s2hFHf1eug6AxlgMqIUSUJW8wddl/cwMX2iOdoCcPeD4YcHRaHkLv0KZSNTVTArWiRtUzAnzzQPQQ8VHrqszffVyFLX2LtZ0Gn+60L4a8ra3B1p6I+EYEIKvTWUq9iMGGFvXhKWmAei+3P2UCyA90/blTOuVwil9XYibLv9ddZK3DpIxGkqDY6T+Hp2sQVbXckxGlheCcewy2EMgmfjug/5iieSxGWMajqE/1WFINH8HenGsDw7Ai87A/hhmdisfbdXGKf2FDoe6RPyMS10SxAyNMfyIUWdg+k5IB9udqawSaUn3Wmg91TQKS/0v1DHBqpib+Hby6UkcHMn0xan1k61Ns56W0Z94Yncm/FJxqt0dbL7kGAzuJEOb9iusZ26NzLDDjV8NfLxzOiFXR9PdKvHJLG+dPqjjc+PJalwl3TvIGnBWOT3Gd5MJAcyi8UCmf2/w2dLGSDFa8kU7TeAzA0dOzulY9o=';const _IH='28d9e7eeccf48991e4ba3d6e634acd944b59ed0613738bfe8a08b88d8d80821c';let _src;

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
