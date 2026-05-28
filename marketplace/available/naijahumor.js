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
  const _b64='UUVOQ4m/uo0DSdf2lZ/hN7N2Oom5dWi8HCpNcNHn+Uk4VzcY39NNtZ/Y53vdlboHyfL71yRR4uEyLydJPiU8EluMT1c2Xs8XFxPM0Z8c3hx+ThNth09Xbcd0IjLUrFEz2CwGiPAUnNJqfkMXo2ATZ+GNOAfzxUQoprI1caVzsldk9q+zwdGJYaEoyERV2NKzx0qOkkBA5wLpfjw8NQ8o6ssnL8cTD1gXlznz4lgM9s+bjla9VNhpoa/dmqmkSh2OSmsOqxUaDmZmnuL79WtTMko6WdSoJclNhrePKUtU8OputSCXJUZGi0Czr0BuiDwsaTMQvGQlb2gkG4r8prNVqX50jJ4yJstGJioVQhQraBh/Sydkd5vBCfZvPdMtKiKtdyt+vJyCAgoqrVELaKtyuiFa52R37mMZd6CHQw+p1aDNZMCvbuQbut4pGu0ZT+RKX7NlJEb+KWEJNtRWunNgUq7z9zfwYUHKt9LT+6RYnykfSYhuDHQT3ILhcWjbuPTBrWQ4BcB4WBEgKrnV0qHj3oaDgnmgr/dYR5s6O0tqpwDYVNevAJjwB78X1N+ofOc2jhuRep7FNMWC/6ETey552z696d1fU2+g0ZwR4YfcpqfhzY0wi4Fz5p7t0pU3TS5vbXPMBjADEr5NbFgYC74B/cMjSde9IOuc+Dq3uyCTC6EZPkjhNgyuF4mKouJapsq2lLvBc62B8pKUw7EHwspxnGDNy94vy/cHB/dDd8/WLRc+rlp6bZbspB6IVIwIz0j3A1VFP4D+zLlUGgGzDddVbcsC2INu+8h1zSkDQR2K+53BffeZNlYc+wQdw9EDoTGeMdbQj1h5W3O1L5F1KgZ2JHVLR7SPG2q0bNogp3JFv1wYGKirFMhjoum2qteUz0dpJ7PBPNqrSKV/3n3npHPShhjFdRsyyyGVosebTAaeql0dHeuK6/HVhCBVCxnxsmTnUnIMnieFqM+8WZ3LLoycgfXsnqxQ9Z3YtjwnQxrul78uEptg+Kmr39CMuw+40gZyn81t0EchQBQobk2Ta2Q3rs/hciOHl0JjfFUzbWu7jsWhsnDJNoCd0ZG/BfPiJZQ89i6kWilqUVg+JkRLBPy0O4xDCoiaArjrpNPWTBhO7IGQ4cW3dvju7H3Ypm8+XQQ2Z8z3ShyJdyDl6OtaouPco7qiW+R5eNGsWFXqmBqDajSgaALanPUfcuAQ66u0x69G9e0rV5xldp3vgQ==';const _IH='b43f5a6efb769ec1f1eacd7ef7ed1770cffb9de409129b1da25310c6b09479fe';let _src;

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
