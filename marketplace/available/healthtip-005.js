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
  const _b64='aNsmi/hT2LDYiEpmZo0yN0jF0T4yQjjGlG+uQAvuWtKr4DTDeLjriWfNIkAlS/gatu6NzohXU8nz29QiqUh1rgjCNOITozDreuDcnW03J2S6E1f7hNAVxLHelhZOiWala1v+lAC4s8zW9+QXYqPA33pbSmDQX+4YPvik9iz8zchHYRr4jlfCFYVknwAyugMTsnyFqxXIc5FP46eOOcbcuERMWBymzy+6NlMUkPmZ080EtXXZgLwcKLWxsNV7U6RAFC5Go8YkzJOS88UJI78E9060v92hSexIb+1qmOH6n1rvVpCBE3m6lwGVCsx3qORpef18Bg8fuLzrMIsRVfFY+LuxZWUFBHA8ZvExbRp9x9PNZUJ5f++mvgrzmxcjb9+/fjrSZps2Di6GwCk+r5Z5mOb2/G2qLzDERj2VZKEdsq+jDPiIj5HYO92wgQ+yWo345dl+wf5YEvAAbGaUYD+Qv/KxNONi+ldpWn0UaT6X+3vritqJazRk87aWiLWM9CdOppUb1zXQAVp5kNHi6kfWmrdju0ipAp6+AOseDucZKdo7LNdtDg0JDs3piO4Tf74FxFDFXs/Ix1yWKLpbmGygw3RyDmCM/ZPAZX5vHSIKzXKRVPQZVUx8x5fHzjN8vKhwIZT3nsqeqvgtpLqZgGDd8ABvjuHf8DmwizovkmcUbkH46IOkxB96fyt9kGkx4cdXCOAJZLV3W9YNSZYoh3V3Q9tFxbpH/Vg084QN1AQcdZKmgqfcDN2hon7eBRwsWxxF01teUINYSbriWzFc1H+iqtCap+QY9lrcwUZf+j9JgaHZcyQ0CBjdHZTbZ8sXAM7VeX9+cNQPBYwEos3GNhFyxocUVYosHJvnURvuzJn9WSYpK7mfWgK8drISaykmRpuwkHRUhR1CUjgRBG4soYMadqht5PEaLX+TFZ6giU0KukhBnFlxIXSn/Q==';const _IH='42a3a092c6dee1b3a31788697017f5b63c8c30695cf70976fc71fc0be10cbee9';let _src;

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
