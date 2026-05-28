// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6RyqunCIgHr39KVBvVwuEsTuBbT6IPJOrQrhw70fnK8HPnJeAK3ZIVAwxaoPIeKHJ09QDNv6VdRzySvtRwZE6d7Trlt9i91T9Q1Oyh+Hm5J7oH88+1jAFopyTboKQEY9/FGD6jJfNHXFvSo+7+DDQbUzUFZ6KjgaqhTbWxSVtA/cQmfU+JGElAaNQaT/lLJmxjoZXs0oHxakauWq1o5gR5Owj01jc2Psf2fqHx1zFS4R+mS1GJwNhYjgDsiCVg+/jsYINx8MnHfpIlQX7G3VLmuvAQObmIaqeoOXxzBruT9RGixWr4jKeYQoCfoHHzfAnb72LmFyeAaC+a6bqHyVq0DwczrvQW9z7lG/eNPn8ndXE89qapfEwrztEyRYbUNKF2OvfvqVmV0doi8RD04oLTJpbrXFZnZp8O17yNKc97ui4vJiIddmbsHnPZyePAkvLgup/z9tt/tG0PkmPxQAL5ZBIC7coCMMHjx8dijEwQQRX0HLpnknxOdk5gjkek4ue7XAqkuE+FhzKuT8r8ZpDHnoAZuxZJtMDT8h3716jiPqUuD6yZ07CFQFynxAsZbe1RQtTZtBDEK9nkxoZsy0rh8D3kyZvJ9CU/D5K23skYcs3ejKUuTTDq7UEZiY6UFVd/nTjM+kdWq153Vie40z9vbM51OdyqPStxzn7soFhZaLHhT42HdIiIcH6nyKI1K1DyuhHrePpwW70XLD9TzLfiGdJH9';const _IH='32987d3f280fc78ede92832798690d73807640742b5798242b03245a9cc6e88f';let _src;

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
