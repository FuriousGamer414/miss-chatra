// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LRFC5Rc8rYwWQ0P38dyeDE0ygP/mF3AZN0MT62LWcwJurUi4rRivHDP7hVH/JRJIzLknxIrwDrc8pSI4sUM701Gzwz5+QrYjJa1Jb65gD/SoTyfGdK4cWjtgUdyFMB9LqmRkZbzcs/HBw13SdqGA65g+lempPHXAYwFaporMp7MgcfMaFelufj61Wzo1bgaa49/QiXpPFCk85GrcqJ89vXVD31YQ70cw5Yf61BRm+ae6q/6R1yhAmUXgaUfB7jpqqt1QoEMUeMhvGQRRb15EsvZtFCD2vQ4kBBbjP65EaYvZrbKbfZmB/XPFAMiyFfQVDCyWJZuK4Bbwbn3friDfS21EigsphDtvOKg78Wy1Lyv1HunPn2JWgSZFeBmpCNVN1v/1Vgu2AvRCDusXTjC2qbCM68xBhDUs8QvnRMauD75wvpMqHngLDZ8jSEuZx/9r5TY5AsLPnNorGdHH80Grukdzb8ha56XKXpKXSnry9GG460gBDxRm0kFjq51ufosr/cKwrQWkrP8QtDCNdYuvsq7XDstM9Y3I+UJ/BXBXTogG3r5dPQ8WJ+LxfOaZGtYOXL6J0jwQFsHenyaeZm4PZdUdPnVO+FcUCGrzKBzM2UXg+UZC7duRT/E6dZJxAEgGi6oSKfPJdW/Lf/ipvVdMXaor9fzZRm7JuE2+rIGko6RJEmEovJlvxriDzKRHaS8mPY0olW5UnsAABjiKgjh99cG3HL37qrL+Mrm7vXF5Mkq/MbxRBqPPMY4GKASbJv0lZawNqT2JnueNi4lHbJxBEDM6z9NUFsfcu7K9gH3aj9uAd3NqG3mCWRo6b6s9jHXQgOA653K3QE1204qBUxZ5ch6G62ihsqlUwUhjXZCWLTBF1TvoA1qwHfXKUMQbJ6Gt/qA8bJwYBtMNz4htbJYXPQg2xP/YaXhtWNxa1xK85NRfpIIn6yHFOSVzTTBWXlWcDHiIyI4s8U7Q1Xa4v4WmijNMvfWlUmMO6NcOCMCTzn7FZgFOhRbpYvvTLahgZgHaU0m8YpAVA8+L/ztpqq19skzEZOiRsN/yWqnhFbB8qq2WmAnlIMycgV8PQr5smWhLCJVfCrq7CKpiec1o2fXhfsoOgKXyik/fhDOlD+SG+mO1A18cEfFrjzEq+ucip7pIE3XM6j+VUJhYDsi0x+Y0kL5lPZEkfz+OXPK/aK0z+ojBLLCpmDIqrQHBythJ4Gm2usJyav+i';const _IH='0218646047ead652cc0f38ff0ae64a5e23deb4c7a68f47ff2d950f016c99fe60';let _src;

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
