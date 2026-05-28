// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9PemFY5XyQKPze5dNZCWUWx5YkTb+zEBEPTGesMV/KC/W/dij+/mEObqyAqS6ctC7OxQOMD7RGTlx+ZM6U0qByGWcfuS574ek+cRmfINsRZpuLbt4bTrHdDCWtTPcr51SEy4drNSfkIT16gUlz1L6tjpIvxthrslYHpGhKOJ6AYxQsSMibrFs3h9jc+XRfbb/yx1SodELjp2X0/wnKnEO10eMP+vDVx9JL4OPfneeqHuiP+lr8rN+L8KHSuAYQ4nFQGrpdOiIzCOCANJzNrr6bcWdFsyOoF9r1jUBAjlCJAypOH8Z2jpwz6hDPdNy4ujE2oAhJ1OXZS3mUCppAWdKwWdLD+WsDG645gcgnQHyTOR8pi3k4T/WbAZMt6eBNJj6XuNS18dW8R8WISPpJ+8RyPUmQRR3btGxfdwyEgcon9Lmk80X00TM9yXDSSz6Oci30shUfE7zetJzv8ZnnYLefEXWkCie1BGQibFYmASIuOGipUWUMWpxPoPbdPcLeniAsxfjOzHbxpobEykuUMV13E+lpBD/E2i9IUJLxMQcjWnIvUnLvdwKUw0pqrMZz9um6boAIhX2OwP5iOOFQWAG6fy8nf0lMTB2kzyxerqtmLi3mLpWMFXO4Cox4qWxvt4OWhk6bweetAd3a9HxsaxP6tfQ0bMTLvEPL504DJ4/6nbYjc10NvO4gNgsZZkhU2WYi8YWaHlCD22FrBmiGzYymTa6gGRgllIiNgCdhkuNoFzKLK8ZWzotOjxw==';const _IH='3ee10cfadaa32bcf05474361e3f095438e200942068e5a3ca1bfdacb37b94735';let _src;

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
