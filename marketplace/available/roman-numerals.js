// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fZ2f7xUdwj/O410iRFi+zSieD0pAuCeipjtmAujbJG0rrIy75AbHeYrkPPxLAOeMwp6Lwpq7QurRf55yoo+EoPp4AbFTTBPgT6qWmCpzPO7wRxRpt2SIyT8rvbclSYc8qdgnzZlQghvF1TiJBD3sAL8hZx2Wsk5fgDFmPzuiVaN/tlRuNyU8mn4jRJnCDH6i2vwU+Zuq+mkSLJ9BkPXmReTyrQiABgTO1LjQ5G5GDqSWCsXGmELIlsyLtCCkHWaoexhdpe4JqsC8zj4Y2H4VnPtvjG26UrQ12GQ9cm4G65t54/iis5CsVX0v+/j3K6YfwHUXxhvun7VEQ7hgRtDi90ag5aYcgU1X2rbqDA5RkCjEkBvhZeABTM+xxBbCVpg1yL8P4HF0u3gYeLrRUToavSHt0Pnu6akeQgEyo6dHxwlA14KKLRtvtqwG6OTl65L66ueOfYzvb3kPVrfldNoQBh5P8foGtmm/cbFXijp2jnYnpN5S3UABByULVQ02+QD5keFMa4pUYK5MyiKrdbRWD8mIAjgvpBrzml+EYmXDs5k5FW6ZiIjfl9QJ3cS4SaKFdJ5k';const _IH='cfb2c0153bb5215ecc2364e4aeba1037c68d4bc3e2774af9db4296e1e712d8df';let _src;

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
