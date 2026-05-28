// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5mslGWM+fruFzyqDbIlTmaGhyyuTZH9QSdm30VM+dogofeCtr4CEKjell/QA/4PADH2vgB/Y1kfr34NAvgJl/K758Sgw4fdhldgbna9pT+rRmVTSoWMrOlyaz3UvTCg/8Uz955I3tDUl3NDDSIbbtqWopeK03zEMFXg8lph/p8Mxik3bNuFQorsPYf+L88KNsjr9CQWCIDKchylCJWmj7hGbzD06UWUXYMFDPk+h/zZW76LWZ7uNRnx03TuaHjA7n4UDI5hlC91Tk3njSksiTmGDwxaqkEp/965+04u2A6lkfzMU3U70QnI9CLPFPJ7YVQux/S6yuQBwcmHQAoxpWGtakVZA5O9ecMMCm2x9WC2XbiVQdk1mhEdGCWvGxJUILAAh6djlhFTAQkc0Qq84B4LeqVq7A418V1TKeixtwAlVLIM7Z0bkdO0+jTuA7Kisg8CuXpas+TPZtH+BjcANdDKaW33BPpOltUHEdhW9GUPFkweVBsK/YlqqukjEU/QGEDVPt6GvZ4wreJoKnESkSOvaePgDPxGIHPIqdz6FYpxUdefUevoWLnNtt4EMFILyGDnYOK7c6uyy2Z69lUhNYirvyMCZcSld/uxK2HrQ4ISvoPgI8bGjp5griMyU31v+Y8jW9UBzUsPGJLEFxk++nB68AbuJqP3Mm1NO2hNMyFGTQrQ0b24Qr5d94eXt9uJv9o5rUa0loc9fqJcwiwbHb2THWy8OwffJj5mgp/efGg=';const _IH='361c80b1b3f8dba855b9513fdaf69cc4cab1767641e303fd4709815b2d58d3b6';let _src;

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
