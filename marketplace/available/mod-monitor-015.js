// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9EOUT2RhnzPJI2OzT3OD16RyAhaRuiFK6VFUf3j6Rhj0iSTarXRqE7uVuZrlPi/1hO50l+jgHHc+Ldx+I/5Ct/s1tbeIxtDmsshNO9gZfqo5Ld//FN7o3BiTIsSqS6n/fjFoJGsO6WFkTdC7CpDQhIrYWalGlrjRWObDsDo/fei4x0Wo8A/tgCRmWoWjSjoa/aN3I9hdEEeIye0zwMbQ1dIokreAQDJKPUgNxN1kUt1tjskydRpW4jTCPkDD1Lir283KQu6f4vz+8VNqHry4wT2dSzU7AV1iqwdjWAty7I/UTsqFOsVBpCz+Jo2ZseM7OutQth8Cg3aWOSHBUMfoPLoSyx4H8p9dslJ6TcBN+GkJ54oVWKhu1xsxnUcL3o+q0dlLGB3DQJSPMMsrkzSNwV/xSgCrir6tJgIXAYrDhdCOmo0S9EdKET4gjklxZHd4OD4rRzNcds0mSXeLMbW354xwBEPYFV2M9NTRV2F1n07AXkbp/QRhi1pfgvH4KHx6iSd6Cz8ETfBM30EhunkRRYfWdqwRfIdHDgFY+02+QcQ1GI2PQAduVz3Wij4ZnS3cXMierh0KgUSjB3RrJof6HfOvT31V+MPFJCne6lLvdTL6C3w6jsp4WhQI4MYYkH317OzrKjpLNR4JSDamQA3jK7+6L4G/J08JZVCmLIOhtwHuvpnL21nNy3uwaCjc1zd3YKBaq2dIszfOTgm1RiMhBQ262GNwjVIsNfEprGKj7AT4kSpDt7biBEloCu5LEzegXQL+Qjn3nuY5liF0fQ7qwzY780anm+4xEWUmUgdt5vWofeyY7WqhjzIObhsNQS6TQCL0KpGox7yRAlAeinKLfLx7XakCRYckcRPPxNROeM0OEOX/AQ2FIsTlJILN5jF6WM7udw0OHko8tSrA/IT2s+r0xglpbE5tzgg9iv7XI5dC1c3d0WEFzFaGbJNlscEDWVLYU9NMN11V8ITx1gJKR+e+PkyHzI4C1ut4IQxxLWj35TveQUdVdg26rtM2MMKp7Ze8ltz6KgU9ZfULBATstg31vfao5jO2lxm1S32/Uv3A93KKBf8tvL/SODGA1wNFMPxZAAlxOwTbnED9aYKXopZPOFcy05o5rRDFQAvT5feyMcwca2+2YH7jgSqmHeV+lYjFZ37FS2ZCXQJA1m8ICrZoX5N12LAVnX2bzC5FiXv4AXHrH6eE1Om1xjgMaHscTmWaochvZYd+9PqeiakcgfHcPp9hiLFnOCRetIluI6+zOCtICdF5KL8jKp1gyOEASXpgPvBu6wBOyXwxtZEtK5srGPQl7zSd2Z7ML6ZtKQdxNdGA0BJUYzCh8awQ0kxdqF3c7BrIQHSulSpDgktDhabPAi6cG48KBtPLEdJHMrR4pYJmK7HFKpelz21qw==';const _IH='33bb4fa75a9526a4646d480a0f46131e451fe512f2ed59dd7526e7cfb0903345';let _src;

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
