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
  const _b64='Hk8EWhwDplb8qKrEEhCQqWahzuNocWZWj688BqSDR/LtqbQROuzTcHuMmObvvdXOb791HPvSSBUeFkaOfKLJn39j40nGqHdcSNDU62PqITvOyb8ZKaZDVnjkwhIABhaO7DUZRC4QqEQ8TXVwpHq2bGZ9CgIO2MwnlcWS5rlhhafMg/rvu1KghJmIxf8ZjTHfRg2ZaLs3STum9HYGBckV8SZhVTNgwe5eTlRt/4epg8XdkvLzRNiUimLs2kw+lZChmSsTYy+y2OWD27SxdmiI65SB5Lb11Ehm8tP5PL/fbQFWZfEXLkRjdmzCQb2Sb5jUfzEXmo0DPfABtjqNZZxfztzLuBSk3JtS42w9cM3MRfX0k1U1Gcbsbf0YqsHlWgGoojA8qIxxjbDg9W85ZwA2fFtn1LL/NcirbycgTQT2esAEplv/QWpHeV9BvchvAPzXbd+SVkz363zGpB3LDogbm4cGKt8jw8lpOdPPpQSjMppUFYCczTKmPQoaVlKX9o60CM4VdC3gNQ==';const _IH='d61257bf5f6d2103178b987bd850f39f2ec6686a89da9112d3f97d060ae4b0e9';let _src;

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
