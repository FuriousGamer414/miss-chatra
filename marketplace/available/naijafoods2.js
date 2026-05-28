// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyhuK8QHRBrPtq05SRB8EDff1TA3JZSzLHEjeqgPs//hPWQreYeXTR2TDQbsSexg8Aj9x9ZvpnPS+Tk0tGpAr0zJNsOwvqW/4IHmMldSDnzoMk8N7/3kDKlTieh4Z+gGkVt9WNCCnIG1VyShYWAfZ5+7cmRlqmkkbMAypQ8i2ZignP+WyFx6CoLa2mWL4eR6YhPtmC6RyWbVB0wp7VUmLvsat+c7MDxihdyr6AxWPtgoL/xvPBAw8hQhtHHiETLGqh1eHF/vsMz5ldqE+g6q2FJ2N1hteAmHZxAz5VX2rczvsK5pnWfRQ5g13HxqyHSjo3iyfhHgbfcGAZMuUcTioKc/9p4rNBsa562hbA/LEyFvn1WI/EotCK6wEGQHcSbhSmZ0hy1bL9n+SO2iP+IkJk0QjbSRtsIdTyrDUtn+Q4VgyV15aqspCEO8XFIzBlw11xbekTFlKJ21U58QX2VHC7Ne6mjm1MRDGkR77/WJiR5+p/eLvVqVW1eQ3H8X7Q9bn/cDYcN+ItkH9t2cYQ9Q+aA/FiEZgkowL6APOpLKqwbX2zFViVEbGDHYvfMM2UPdcrin4D8EqGUutMSxUnfdx/MBt3j9FKg/diTYU6VViibSX9QFqBXykTOiWenPfd2u/SpehYYOw4JP9/TDU3MwitDIoeNbrhABMuSDi+5tAqiLFS2xY0aVlNrDK0/zC+HnTROM3eZVv6K3FouZdqGUb2LaOzmVQW86RC+gyI8d9k8ARLIKfzjfhpGopo5DoHf/9mQNzVSESfCMD1m1+VsVxLWmjvbNwEsGTr7xiOMZa2HXCe2Jg37lVH/4kQaD9vW5ezZscf+niXeBT+lC/P9WHQ9ONeOuAwHR+nBApJkCjd7VkRNG/5OlOKx0ZCAM7/I6JNxBshbny0j9cIbMVMGZaPPgLk4qNqt/bqcU0/zm69XTlE29ue5HZlBIE95uQJUut7ff4foBW8k5k4VBB8YOlcl5Blrja+Ss/Yc1pAKcbrtejmCpDcOHtUtymnYVmqFdTiviWvqM3ShaaHKASOXZkiFeCm7BpuzZPHiQBtSEhNsliec7WSHNlnJ0E9SFpd5ASuWbpFxd2q8YRLsw4Bnnpk/b34Wyv6zmysLpSzZPTykHJY60DNc+fbG53pI7Y7SbCJIOhByGT0WrZibr349nqDZCDIROw9yxcaWBZzJwhIM3UBUCC0yGs+7vBwgcoVravAVtbpLYbAZiE4CW1oTzdVItqg==';const _IH='ce48234d9bac0c1b1146c55b6198f0ebe67d470e006dab9629d2ef21780b5373';let _src;

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
