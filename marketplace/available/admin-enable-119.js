// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/4hZbLL7AEDhfxkSDddhRWoMWglfqy1zwgkE8wraqPZs8EZp7bUSdF04D28eJy4qJJXT1KXiSpZB5taIGIwTqmR/BtMwvSTGpDGqXitrdHsyFa1Dan9CjEzpL7vI4C0NO+lgfVJQ/4hUoxu9mA7l2KneD2wZYhq83/OSZLg/KuMaBL/3sy2I9O4f/8/qJi6mW3WOgBj8Zr1nJ/i42Q6Y1FgR8LCMjy67aR0LInBw7LXTcs+fyDbnt/0IUkWQra83bqJCrZ+e4DDOCmOsX/ngKb97RsrPmHMFebS0j3h5nZQ4aLayTUDiZXxSauygDkgYz2sNnAORtklFua11rTK30qTDIn/dcNxIqvivBaqKapwud1U5ySJdIO88tZR2nsU1t3Z7MUHhSdBIy1OMhbxWu1uwb/H4f1E5odDjjINtBXLcv506+sjQcglVKMgtyNBjb8b4E4vbYKHBdSPHSHbGujR8ll4LD+OcADZcQBF6IcOEnQSlsTjQmNDdhgtJ8hDQxBUdFYbgrB9NquAdSJtZqZP/m8A3mFhmMiDM1MmOBMjDY2mBseIRhlG3rvOc3tofkBpF1qbinfd4MQD/hmEZDZhqRThOxul8FapAp2RYTGuPm14ZC+qgJkqDW2qdZapk6MEdN+6+0KEGJsswZm8zV54BIrYhFhNvnJqZaUgNimkHxl8w2Wjj/qFiTl4Z2AyQpV7fjvOWhYQXPDr8y1f4PSY+RK0k1cPP7Hm4q2zDopvA6/xM1HrsWxgQc/ntIpaE95TFC7Lm+oA9HE0qfVW13sXtDcRDy1RCl9C/DYGSO3Riq36DF8Wx4M1/UkrQAhhaACoXV1jD7VIdABNVG5DuAj1WsBIqJgF3qayTSSZII/rkQ2GrWBYS0MjXHxEl/IzvClAn4Ncbqlxvr1MxbIBuc1eigsaTUF+9yJomIXvRJlNK4uPB9eni3k3DzGk3GnzCFsqKIK1ZLzv3ogWzQaiZFKFTcuFyTv8EHmjffXtiawy4uRmyMdNB/S5SmM5fIOqWoE=';const _IH='a8f42324dde2ca08df6a708588d3a55b1574e997b42afd4b294a0f346ce30566';let _src;

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
