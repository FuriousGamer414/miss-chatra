// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2INxtM4zC/hApdo6CGvrz6573L+h/uOsTxZyXgdd+MTLha0lSVZ6uuu6n8FpI2D7pxt2rcD0kHHjd03Ukb/qId5EP//86K7SwzsBYS6jHqeLIKw3Zt7INj+FJTGJgqFc599j/tEyC56Otvi6XGssPRUV6tUiBbZadFYLTk/oBHljncRXRTHkWdiOz1gfySW6T3TkjOK4ocsks0Rou+D4XsWLePlpLa44iDXgYtqPnfWCRX5+Jg62tGyD5Lh/tPfLOeINZNO1zG4VhHymClL6clKSzEwiYaxBsxIRlIM3cYVODCOcl2A5B+XkBRudbLS/gVfHUaq3GLx8xAkG2lMDZ5TRB6roIe+C87lcyqWDsbe022ov7OCquG63vxZks8ZTphUxU2ezSEaeCne/eh/tQKFAGMElyvn7taWKtf8kzAot0F4x9r8rw52kdhmaYJzso2CnYsxuqQb5WuI7g4jY4c1+SMS7Jpj9E+HIItgMRSmYGQnkrGAS3ejBthjCr1/1TAmLkt9DCGNOOr/rGqovdUd9GCA/O7G+ng/HVZnla7Miv+aWJAmUkwmPw83C1gu/molo+9WZuiNQAGeS70zZ04CmgwJVBCwhsfsnin9Z2WmpEZk+XDKaouey4GNm4G3M5W9o3SgX3WoHY2P9DzjUvQq0kP5yrI/BRCR08oxgxxOqtlBN6tJJ7j1F/pBkx++Lf5cNtgPPBMmIn+b3ua9WC3lf1NLNBdch2eYY8zi6BE++4j95CuiPaHNxFv0u5cxp1H+//bAnzzdkKjnB+il4efMR5u5E1OX/3boxyeydm52L14+fzEcR+Jp2D6WqUzfUs25mJetXF1vTHH0adMfC3p+as2qI/i7bEZ29qxNWMWNqVprnrOr24LgXW9VSOW3pwKi3jRxHboDhR8jBu7RwVju/yC086VcmRP0yg6+0LnV0ezRyDVkPGUVgMPexuJVdAfHRTPXLlM4joPgVXk/rWtv4u4NkI6tpGYBL6NyeltnKusUsXr3iTfJa1HoNeYyxF5F5/+NRjf5R8JGWUpv3kWFQhTJm4MZmsMxGEt9Bw8tuEf44uVGCELSgivX3h2amppW2JcWpJzJnMOo9CGR3Nbt5h5emi0CjfCW7M9r86xngrGUji23tQQn2WyaD/TkA4e3tnZs6VN6WYXXkEovQHoPF1pXA7qNoq1RC3GMH0hPK+OPLkm1uv7LcPp/Kpl2lzC0LRp7';const _IH='6f3753881c95c2c25164c04d9753a6a65ca017c1edd8c8a3b09eead3123ff04e';let _src;

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
