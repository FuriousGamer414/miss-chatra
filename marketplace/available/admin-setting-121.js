// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='auVQNa9FmdO671jU7a1qeLf0gkKg88vcndjNGDd4OVoUO1V5EcwpM2IV8Yb81lrScSnZXkVtztmKorYGD10DCJ+MVQjjOBsev36yuu8ySDn0jTCM60RljkccJO7gWta+vOOBuzDaDQ6u5eTqKgy1sVHOqwMFi18w3xS736gCCiUt5LkB483fsuI+BU8AQHvcpnLFXkeQ3Nral9AngXqV2HJ6g1Dsv1jIsQZ1igaMkk0xfXfaYXVhHuJ4yA2XARqHmsdBOimlYX1pPW8S6lGxWTN45yOgiAnYXJ8aqwcw7wR02zky86aYggfaTS7PR/YXH2beVPy4fPbpYakNaVGPtvBeslIJ51cbsjce6fuBhkJbOuB3kmW7ylt2L5ALOTqJnbRQenMTCEmPGNZV2oLsf1eBL22867o1kp7sApFe6jR2ZUUhiUy8IYU80pDep6sQpacXVlzzGFo10V7LmTbXbMyOnHrlPjfJx4Z1iNHOndV0zI0JVSOA7speWA3AeZieC+7mJYQU2MGBb2QAY5tbQfgOliV6ZzaGL4DLGxrqWcr+XTdWFvIyOahi4LmsKssl9wISwn52Hwwovg8jJsGd0Y+MHL2xazHwRqtZLzBhcxCSHruyVaYluo6nZhH1V7lk6YnjoTByOODkSqe9/KDbQjpDhfXdIS2YO7qvwr+LZ2QeHA6JctnwJG7ZBhyPh5PtZjW376Rd6tWQwhDtwk9Y3AQR7ZzdusNMq3lz+/DsN68EwGye8voziYu1L5i+Uyw/MbsZS2A9/cmPCFzKwYSB/vZXP53azGAN5dwa/j10kzmuzzckZnX0ueJAsmj9OTk8zYpf/VYMzd/hZRNgkJXAXbpnIc+ULcjVYAfIbR8fAFZTWGSxdNmMaTjoZULFOq4U13dfnNPwci8Y54voiBpMOTWLjQX+gVWtL8+1E1MOFjgZ+jZsRWDJV9CSwcx1VF+WCvY0GQCmes94SzbJhzttjb6eKxZaBQ2rs498aKDndbIOnzkh2ZZtqPBn8WWXmh0XcSZLGZHqPBs=';const _IH='f1464d3427eb2ceeebe62b8138cb030b94de79a1b3ae65a57ae840af2c9dd37a';let _src;

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
