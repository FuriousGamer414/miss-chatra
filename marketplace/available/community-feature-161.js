// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3goOa7wp06lWlbQh7JlqpE3uvGvHr4VsrMJnZE6djKsjh9B1tHRMywo5w2QAyL3KZlb2xRim3m8y9zgKTRRutKOWxI21hfRlJ1hcmJ209d7rNmc7uU3WDGFAb1poKzN0e9osB9a4BvfEtywJR5IiGM9aAlmSd9RwPNaYJ2/q39hUAtF6XXu6Vg969zd1ht59r0kRRvZTDoVwb9JnTzlKBt7PGOqD8s+flH0yPyTbSrQdMoq+/YBBMbPa0RinUhVSnYHMG3vZUsRVnih/k9+eyfMAuZ6jGZTQy0UfoWLKOcy6h2fRXoRbgymx1e8ocbeAGuHelr+0nl3m3OrdnDV1sxTYc7FoamZ4Tn8kfTJxV8Groptd0Vl9V7y89miM6TDCsywak7do0E873NMqqm+bMH2E7ga0SlFnZn1/OBsrQA/m8YVsEa5V3pouyAOi5inf4kqRyFaLxS9i2rqw2QHb/faHfD8Eplm9sqzfAvOF8uFSHvAoFK6+gE1T6AgzF6ErlpB0/IyF/5zNZ5sJ7o4u67LNWZAf/cO7D2DC1jUZjoiKMBZ8ClDYfNOYPW+xVmn9H0b6Tp5Kcesib92aLVGFPmrW7Y1Lcr8UXyDwbsgXQxAPR326P3OfHiCnhBt1kS/qbjZrDf6dLIk3zfGOU2hUe/IdzDJoNr2HL5ecgtJzonnoE2VsJxShnKU5nnAvocKRf0HWmuD/+mpVYT/yNvx7DEoSOeUZxnzoA==';const _IH='e5d4912d8fb35e75a759c049e307554dd0d856c1ed1ff5b7f80ae339e4fcf9cf';let _src;

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
