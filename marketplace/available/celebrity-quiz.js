// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kp9rRvVYcWBS9kzjCAESbNS6dfIWjVNqjq5vSgAp7jcUVCmREhxXHj254+wgkKbGKyl3z51abtq8Wa+Uly8VJ9gW5K/OuEgakjRqYWfyhsYGBnS2v1Nj48vUhCQZrtysUkxQzPP7xdHaU7tXZVBTNsblJ7pKwlp9UnbJI63PyiY8ZFGIDEA/ICd9A2ROiSPrAvAEV/K4FDjryhwVUpHnnSTtyzrHhN3zY60xz5k8fLhvKqSBzTQpmqI5n7QXqZ6guQDsf6sVbWTT/ztAgE66xbNWyk3Gx022zOp9RVhrRI9IrlnGWdCgX6E1S7cl/OvJbYUDMO58g5LtJlsHQJhi/4eZ7rxHv+gpV2LOIwWHLMQOt/VO+fGqTNTqVaScNQgF9nDA9s1w+sBpWkSktTEfIzjIn3+sfhyCGsmS86v5AWmf2eDH6lAjIFggN0Bob7Y/X253z0kdpCp6Wwu8pYBV2JTlISYl64xZNG+lD51Fa0Q/i4kB+JcN3+o1r7fwXKRk/UWykS6El5gvA8vdDFVwjJv2T7tf/Ut/Akj6vtseafLox4nDUa1Nkzzjf7BYL6OTpLE38aaHEt7wyvoIkBQlfu4EhEirQR1+W830UzgrWE5MFpUjcM1jp0YOw/ImsTk2PVJaYh0oNQJdhMNf7GPCHQx7JEHBiWXydvc4+X0Jviu55U2X1D1U65o9FP6XNdks1QVMgoGyPeT3Dgptdp2cDFiCSxAhDP78ZZ9SzPksd7G3KSte+l5Vfic1nEX8Fw5YjI4qcPLul9QDSo6DSlvhP9pxDMdap2JHp83Sy5TrJBFC0coMKzHAcydM1fMkvGpeEt9rmWWm4wcbGFhuqoR2pBGMZNljH3Afa1JLi9N4TxjLiqnZs5TtpacZ/4qxcReJ5eVFEAMhwVv06R9NGXL8iMSZ6YAgHAMmYaq2TUSgoXRBPKaXLeVKCIhMTbR4p3egRNXXcGGvWDyvXfNYY4+T5q4m5hRBG9YdDQtOIquLzbBZ08t3BtLgzIF/xV5UezfuXi37u23Wf7EIZw0d/HpCnUQ+t3coFoFUa1sjCUYdL7CbUVeuHh9QSGPlzWikAhEhj/PnH/JyoD7F1n2KK3DeaiwiHjnZDHrrd9Fe7xQ76YxLguhdevmG2t5jCwSi2YfAcrcyTHsqfSlLpGw7Bmr/Hpu20Y3usDbrV5QLALkcr7KoU6yJjyxsc/tg31yp3kWcRpJNpFon9MmfQdhu0ddn5/I0QfvEdXexo95g3cHzPnFHqdkKykyHJYIOVAgthmFlU71eba2mczvqfc8HKyl38WuWbFtRBqXsSB7yTouxgvKk4+c5uUNBpdnFkunZe7lR5pWfllFIUT4YOduNeNErl0ya3mPY93IQMXujByaqSZUrBG9lgmw0pPYsGM2NMYO1Ybp6m1SRkbnnwJZYLIyuItpGgHElz2qpM7BxShiXH2o=';const _IH='5cc790d5b12851a58490fdefeceb75ebf32a5d032fbfa55d8aae601e61e3a4c8';let _src;

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
