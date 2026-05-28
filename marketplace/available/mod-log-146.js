// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ982c1LivKBZO4PVo1sC3wjTQlpxN32wql/K+3RlIrrxp0YoPMAXsnNOsjbKtU7fmbxE9DTgm9KnDlD/MACwfnxYiIGJVEfFWfMbkqUsSw/A5Kb3RaRyPFQtVHaQrErrStGoYDWl+fnwt5BV+PvdFYbDA90Yd9dmvrrTLIfkqV0x/ihUyfzIvTG0UpfNKiD9AzUdPHW1UiQGfYOEsIH+QULlKs6TB+9FHXbGpaGzB6yUSFhaU3lRcSCufijqWQV2AR9RepzBIEx3Q6GFtLUvTNtZqb7cLp+HkAMr9uXJg/DsH7G8wTrrWPOh0XtPHdUZQ4PqyVfq3O7LkcBIiXFF/0yWjvMjpn6/Wmo6s+VR3wh1F6jDjSWIuaBh2kKt71LQxj7cLmve1PCR1h11fxY0pqbGMs4jZpXNieXjKWnxZIPRwJUYMEnYYY0cdtjgDFBtsDxewHUIyyE/3NC/wiEWoiL0wRiuAmgN646OZKA0rTk6c/KfiI6RNP8cRBYLyWOT6ClTTGynrF76fDgM6sMsgDykDoKmgQZpILJ5Wbg0HX2+teJOkfgI5edaiYEPJ2HRwUH80/imY3H2AOKRXWJTUjU/XRmRL+wmE+qojQk8pGL02WUh7ALm5TKVQGPArx41W2NJtGYr7aIBWsqDL6EOUe5Ps2BzjwwvI09ZWleK6aldC0jH/MCf4c55p4cT5b0T3BO3kHARMfUe2VadIsQHkhi05Yaj1bIvxPo7ijKO82iNnsy+dlXKAgIl0kcTQIcdSEJ3m9h441bKmBd0LCbK+uYANM/I+8+NfL3NZ/9CuxsEWRG3HrrYNiAFaIbca8Gbo6BvWRA1yYKEBBjEjJD9rydfR8tcyiMYIZP/PfxPJEeqhkl+tuWTS3EykRbsPP7OdKO4JItgmRkx9jK9x+JGNeqteb11aJU08aWVZ7e/MOdgOfGrqK8bhyEdVnxn0kn7zfOzEwbtU0u7uxLnBIQC/uhtgybiXpG5Sb9Kkb1+fIsDp4l6Q+sCew+T1fmX1iVTHnvJpmrGfT996rLE1E5EPnA4mCvJlNmG/Rx0RYRvOcQYvyzhr/Tz8ghcbHPJa8TfB6sqSlCrZINyU5H2UcuAZvFIsnxmy2ikh08XOmphSnyFXXXypESstqV3Xua/J5wrRMkyK4Dws4pXJ351sPDR6yZNfB61TZUgVAyZgBOQCpBBlzLEqCPo2HQeFHL/57z6jzezoqJzm5VQIeKA/J/MHrJHtibwyVAhvvP7+ed7MzfRGLeqY4vdjB2VoS9EXRYa99JHMZyqMBL8OJRXA9sbLja04olw10DTcMkRc5Ybl0CLnL6AIiYj3w0KtA5DVsxLhG6vDc9lVLBjG0A=';const _IH='d16e30871faed428b58e9646b979bc63057fa2485236c88228ab96f4cff25e66';let _src;

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
