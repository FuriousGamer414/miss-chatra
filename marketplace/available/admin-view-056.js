// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cp1hFYgug3yicXZ5wX6/jSisFxAPa2mbTqBCRabKUaV7ZRP4w/XUdhmXywr2bE80pXzPnZJp30BnHSpdz3XRL8wgvdEokMKz9p+2BtAMNG5BqvkgsjF+AjeWMwiUdz79l8MSyHr5S20u/qQhzLvU7xSFKrC8oqyuzFhpKnWlQUKd4ySjiBRnwzoO0zo6n3c1pOni4C7K230sr6SUU8sChQg071ehuIKV3y5KQbkwXhNajSy1vn7o2k/llOJyeGEsd6Q/o0qTXreIw3gUf2i/3jm4AfHEiXOoZucO2OBp5z7ovLo0bIRYo+UYKwjLJ09ovAKOtwbwyLXOYkQjm5wIoFi2OwPUNqGplI5LUS19lnnPVWSv8qj4GvlWyI4nEtS4irCD3IWVL73HFvE2nM0MHdgImQS24/56VYywRe+zjP/+1LtFfFYZLafv/UYcwDqDOX+AerYqFMFKgeZEUwINx5ftO2IjKWDE2F/GH4uDiwBJMfV9owkJHtHvgsNMYrLDsUhjMDTWtXNFHeRjBPUP0jpDEMLJeYjw/IBcaP5p+5HnVgWsvg5uWzVcmdNe6B1Ee71YfaCKcVvb78MBAgMJuNP9JMnPfxkEZ2Xj/EduRQ23W8xrkS4QEWq+anzJAzvmI2vlanTDGviB4orDEmjn29cjAfNDSt3SKsJSAP4mWIRCoR61E/CWwporabVOSB72Br4RzJxVQKhE95JYruYPB2TmKtkvHph/V/tFBKTD1p/H87HdqnGrJTl48k9iTK6DYga8IvbmomUGAv2bCrLOh1mqf645w5I/1eTuQtYfTO+WS1mDbmztkdKNJDOPkOfp/bC/31zaxEiMJ8G4Botj3PZjZMc5ORyRb29REe/GUJvnP0sk1i3SweeUKieeWizijGe0pZH7IPK4FCgy6/+Q2nedmcWcJTZzekKG7EfhPkTx3zQVeCZKNiDSyLKkNfdFU/s5h5B2oM/2REOImpOQWJMqLnEEeQ0Lnw1EtOfuQA==';const _IH='98aead4071c03030515998de32b3b7635ccc191fd30d2e69c7da65885be90860';let _src;

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
