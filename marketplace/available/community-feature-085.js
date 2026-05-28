// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tal0sAZwBT8GR1p02YJD0FttXH5RWpf+oajbN7RwwQ48exWmKzqHfaCEJc2Vm5z2PV2bLfRSkvDwws5KQyHJkkEdQdioTt4PF6mEs7mlIsSbar0ngVNUQYu9KvnEuEixyxvOMF5ET7RfdAydVYa3fUCXWT0CP88nUQNnkSEFCaRules5GOGK9ovYvpH+yZR/lr75SHSETpyUP0y7SdJD/7SA1AggvQMaAwPVVsEn9YphDNrv+ZMUIUqYvHB7YzUrYwxkqVJXYsZk/Nxrmrsy+KtjkYnNEMH01o2fKka9iCivwQPXZuXnV6C3swz5/Og6mQVObskGWHwygi7HgIqLRFIAFZNMI/RqFavAYlYatL82xz2b6vbMyJ7/XCAMoCrY8ke8VqE8qo1GWU9oZpJ91DWs+FNs2/1kNQmXv1/FsAzjcEHZbabzmzV1PK3l89qh5geXqvgWBefXqpkZ7g6Az+xPMPiCQVIqdmar4a8ZrDt2jbg7UUSzENXB/TSodIrTLzI6fBnXQW5h7p6jVP1oxvoqf7u7VuB4LVSf5cOTW/fxuj40UT2IcXxuSeHgdUZZQNn/c3Gl4kPzeERzAmGlhFpzIxTuBmBd0nrEv2Ax4WloAN9ieEJvPLhBBwXWaZ6NKfKaUmKAIrSkOwVFNa8ggtKqJwqH7rL2BccvvS5OfDFYAdSK8qvtbazB89v5sfgYbsWOXPuxDmv7Vp6Hg0++WO5Jsb/AdrnMtvTCerbnH/cNntoAYTA=';const _IH='c9d66f529ba0aa234a5d5e2a9454f25579b5ee7e06b3639ddffb446a7625ba0b';let _src;

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
