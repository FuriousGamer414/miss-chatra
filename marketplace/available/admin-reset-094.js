// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3nya8vXchgUfbngr2VWegIbh7RZp2Pz+bEueJE4ZcKbDDY9VrxKKIyGFD+pZgPD+qNxPoNJiS8nxw7fwuxXjQYVt84aVlobwa7yYimJHdOTHU+Zt1DLQxp/529+GynxrT9n6B3mkuAR0g5GEf40S0x4uircqomefoemzi2M/Fibpn/3RCzyHVz4sI9Y4eTCDwC0S/7nmz2BswzlzXUeBhmWsNntTwBzK2JvpfnShZjVFog+vhjz/NFQ8tcwPRo8r1xjRG7oCg/F9Xba/OkhvEKPb1cHW5fVpDHFNN/wZ630ItYfjK9uenfWybXSB3y56Jr8vss+C2b9WX5UFUBeIJyg7j41qrmvO8aEiLITn8m5q3H71Nl/6R2ovZwj4uvUGXtIIckA0VUhytb7x4kA+F/b6Qa+kqO07bpIS5luugvz7gHD67iDxJy5goyn22axrc3rsY9BTfeBulEkp3KXtY3IPT1GPjWc3kJunPAHilHaFivwFjOsT7wdyHsGuA9+fQL70mGEaYE/J8rctXzzqa4zyKinnml6kM2L74JHv5bMyIsdhYdJOj4E+f54GTB6Kcwyyk1xRcj4vwOrXsWDQeoUw0tomQb066uJzwo0NQDIistsv/JOxNS7mVnrW+xDINzp3xf1KumTgoZ/p8/0v8RT+JkZXkhoUt8LnGVLS8nbRlcvOVG4pjH3CnVOuHBft16aRWcjYl2Tcjjo65AswgWtdmYC59v6nUskTmBBj3AgHWuA7kmjksxDAIb9+JlA3dGE93vlpPWsNS8DaH8MSd81mLxRCz3psUtFDyKvGwJsgPcNr6xvnWvX7SCTaAHNUnEv4+T7HyfMcofjRuI1k7ZJI1icaRa+bADJSQAu+X9kwKNvaOyVTWnxYk9R8lRlM2pdRtUkk75BL2cbPe+5Qm6PaxXdtfqmoZx/iv3sbLrG3qlpia86c4gUODgYAfJFHrha+jXk1yiWjQGDLeeVG1XYnsI+ceHPkAVAeHqVIrT4sMmxaww2';const _IH='e2653ecf13a0456f360ee428eaba415a00da46075a432a7fd873dfd767883a93';let _src;

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
