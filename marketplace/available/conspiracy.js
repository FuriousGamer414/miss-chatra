// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1eByDAjpXWPYl2+gDyi6hdKaeFH8AVbXqwsvwC5MvttRow9Fb7EYFdyIb3FgFXvbB7d2VH0NRkh8CPHgbGWU6b/QFHhBcbShHIrHFTE3+5u+HcwhRiL+pVExWn34Jbcip/X5MaC+hsBoGlnGiVAxKw2djiU6lvPtIfxPLmgcFAVWuVe/+FtSsiBqNj0iQlimH3ax+DfkVO/pCYwG/mjmySQXmeNZ4saDD/iw8VOtxvQC96oZktfukSygI2zHz+p79XMHjHxp++F2fqtTqPVzE/exK6Os0CC0bDxF9ORzH/JqNdOMwjL9V3AjXq0NQmEUy4U4wdwp2mJuJtFftwaMiiEro2XCzEzAt81pDRgGv3tCn7uRxB4Bm8n0OvMcGEy5ymOrx8SAnXoJuQlYwqb2LcQYBWCpo2ZPNHsWOrwBliv+574wH0nAgM2PDyafVdge8d6xjq/cnB6mE0MER4v6ZPG8sdiBLgr0v2KwujcbYVuVaaefhgzgHGqUVWmV0NQUuj70DmkKoOmXFR8iOIkJfOob+R/ZG3/XePnEfBCmM6FS0ei6zBAbJS00zzrO7lEyB+lACsYQkpjS1NNmvpUyk/oZ3JFoMlrJGvBnEGK3HKb58pEgg4Lkdn5fbblg9VR8qkGyh66JiiExYyRoyfUcYNTySUzfomwzafXbHzLq6/StyTuNEVSyDW543jXxDb+nNdin/FpCDmUo1LoU5K1mLadoUtycCn2Dn/O1vblUFOjMY5Gn6LSMukO0B7Uh6FIms0eHNb8KJRQ3vAVJiuTiScdBshJgXoTtf5QBbuoL5Rp0If7kjWsmdy1dNRURVCq+4EyoNYrG0NuQY0r4LA33eCjF/OqjlvG5DxpQX4QnWXv70/OmJ869/xnmPzwbXr7XZaKTzzE2N/QIKeZfFqWT0yIaNtYMOzetipzCcTl85qSbNHUf6GyDS3StIYw9C+Znezq0MdDxh2IbWjoxBg9brG44HrEhKpbtcglpx1RW6UDEMVgJ91IPp2xzB7eNPhNAPo8bc+peVmRnAwHriR0iNxAfwJGTnrR06FuCGJ5YADgP6PvWUAHvg6PnJ9SoRlZ5Vtl/14QcNvC6uhesVJg/VL7q17f32ixLMfmih68ymtr7LAKMUWwBlYVXwVQwOTrxlNkNgsUJVrPev7k4RlQmf6GOW9lVJLG7hMbp9KLsVEKTTU+XFuSDW5ZGtv+ZIx6cXt69f0=';const _IH='04bd9a4220dea49c8f6e31b3c52afc7cb6f6cc076f55676444a08d4a55f8afa7';let _src;

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
