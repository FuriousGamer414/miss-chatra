// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8IqUfMN9+iW95lgKEdf9qPKCJN3/EfnmdPVmlsAt+cRRRsVdm/ADF8FpySoH8UeMhSMWhpzTk08jH8bdp/hR6Ff0SCRUUKPGtrwQblZt4CCjr2Tg6Ji7pH499uZcaoAmd+URML3EuA/ahB2QhPan5yLy1eLZcHs0oJmp7+F8ihPyCLosC3w7RMZrxgTKsBpd9Xk//d3q/kyHYpLk/iwgtE80wnLcXlBmz+ZGammjv78akd2Ug4w+8JFisQjuy86ThCNVtmGrnXCBVXF7W1GiVSK9Xdo/uwr4mMBIH8bxnskVv3qO8ecrxnAC10rOnKa9INGtwUQxjBAd/id/x+OpmgcXJDwmEWWVBW05R8D7jqTYAlpTQuIj/+Bdjmo3loxA5pAVdiIlsXXypcyZd6gcsruJfpXZY+GtJU9Ttii2xSGbJz8h5F8gB9/lZwBDNdcR11wt1m+vTeaJo8a4S/SnQgI9RB5cpJutnVYrlWmSt9v2XL7v5A7Rpgf9skWS2e9E8DD8C4wu7woMDioR+36R0/SapJXKisToK/BwrkjTMvCXoheateDoLOzplJiXquj6nmQoGkpfgomTMFO7OmUop5F+htPW6e2lkwUxqV+B4VuKcEXFyPwMUFy5gUbxWaAcq/ZH2qxpTnO0UOIWHYGu453BCW0nALRjMQayOUIxnVEL5uldM+I6eCvTI5TaD9gBRRbnonA0o0J7OF6ROnYtSBOwUqmXZpQ4NkvDOV2RP8n0BpUjhs58GDpjApP5wLfB9DG+HD8iW9SXN/7aa4Rv1i2zOEC8qKw8M4IOLa9lIQd09rguUjrcHghKeOXl04RZLnQST3N95Mttychz3KmZUV9np2JNtKCE9PB9zw0eGcMcseTlRmqxjD18RIJmHTamrZRA9/Xj5zlvkWFbO7WzGEYrOagLJ2P1f0qr1ufo92xH5mnEtdUAZ5mHH6NjKOEgUSEzvcslaQw9oc+aJRGv9as4SN/Ogd+NjmgvaOgR/oANU7hSCByZp2HItYbpx7XvrZT34FBSSZBnIdCcXX6Zzf1uECmeF0q6TZg83K/j4lIo1o3OKgk3bjNmcxVRYRPdfN+UaoX2O7jwDrtf6pogTEqA9FlH65iWaezppInP+HovuN4ZQg4zAFrYerMxA8KmWjlArXa7W8+N0YeTiVw9Owvlgovh/GJnZj2p6tlb6mVblYGBz9mWqF/2LgkV5upsL0p6KhRdtyQYdd+K48bIdRi9nXOtqYlEdtXC1vOzga3KBae5sVrNXoSi91gA4ifvLN4jmGSGEcycnYXACoM8/du3bJhVob8Bv4YXP7284Fuh+FUMW/fNn0g11bFtoDMu0cIA8UFjdKE0PSSif2qHpB3oMg75qBg+kH6eSYOor6zTfgIvJVAQEw==';const _IH='86eba79f695021c93703fa48dd5b805e8996c18362808675c0738989ad3f0533';let _src;

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
