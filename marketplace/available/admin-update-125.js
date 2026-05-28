// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4MWjRMvdILhJNPX1kGp3sTTQ6de+YmPDBkVxYySM7+ikm39BK5xfZFQWMUaTxO7GH5Hjx2ZjFnBF3KoWNoJ6lbk6ToXvonTqPC46YiUWLZY55ek1JYZa1sqcyYhInXtpeDVutu4SETF1GzY7vKWQUI48Ck/2sELIVX4a7wexSLwBDmBn/AZ83/sSFodQYpmaBlqE1ErQZ0YMcf/exSsKa0IXaVvgD60Sq6w499Y0qyDHv/NBT6GJgetYwFc392qPUEM2/WAopIURy2WbWrX768R7L6TjNMoj2j2gLESI34VDC8tz/EqS4nivg9RRBWK/Qw95n9IEkX5HDQYR6kvrxISV2rxk9i+98B76g9cMgjQnvJB9ECdCnL2rU2NecxjEXQPdse66P4930AQbxEw29L1QnfDYLyZskkFDDyvTNSRKhtHFc/gEb+So6aldce3QOHv9ReHYILe76HlDkJLpNcanoh90twVMoR9YBbXD6YRiFPpAtAw2Z5l5+8BEGUWUggR33QOTie2iF6E6TNlRQIWCWq3QykSC77uuBw8u3i4YcPz+wVgajM9MMiDb+ea3LXl0LWJOI2elziUcqDgYW70ZMH6eXOltEHP1WH4RPG2vNmk/AXSHl71eKXrhpcrQJle9IBMcqjTix7nG/fBKXaqQkIyHeOC6GXWuZsKL+6clF1fy5g+3GoUldr+oRaGK0kvjEoNxZ+SsOEkim1UZI/qas1gSv33rwoHqZlFaziJ21yyh2XRTJ/oHucviDcJOJNurP9LvtpYhFxjpxnGKiXWrCeAspMw1aW+guWjP/p1qeovG3Ly6uTZI46onGpiSz2PvcgBydTWnvvsRDFPbWNUOP0QBh5E/ik6nM2Wf0q1pyQOchlWrAScKCzp9nDlM79CVhI+ayLRqOUX/gpjUAsxIAZV30uP6DnqGah7/Yb8yhEKGzSXUho0Sjc+hyzYEWA+e6Rw1heNA3rHzfq7v+78BrsAGPaQxasC1AXDOSdeRsMQagMJ3UjiPI16AD7BRSY=';const _IH='5d4746ce09d99b2fe51a09f74b82d4cd80df61119709c91b3c40dea6be3521a1';let _src;

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
