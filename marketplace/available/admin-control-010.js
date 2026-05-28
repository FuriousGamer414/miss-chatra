// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ88hTY/4H3z3a4TvccVF1ChJlaLfGFvRqrjH+Dxiis9ziNDVbMqKR8dcArYbGuanarOnBU5frZJm7TDrVmTRziO8N86G0s0/wKPRCRuQoGig6VedY6MonezSN7znHvCCXezLcdZw9NpyTX2Eyfjcufc4vXp4vLJf2uQc0bnX4+jj4J8sGEYPNV0Z426h934QsbZOMKeBi+OkzSoekl5/BMiD90cOJQh4FZ++elRCgCy5JAuogAfgvWSyDrOGc3qgQycWYf6h2K4w/ZVqOnocmzSCGTdo/GZX+Cn7w1qWuEwpLkz/iR9safn+dEB+dW+QV05d46ag9+YQCqOALJ91S7Xh+lYtBSgxnmhMPxkTQ1ig51cYTZVPo4sE/7Q6Cyisz/4DCweBc0hiNaN+hVBdzRMgFEzZoz5wNokPFcrvaivjlkWaDc/6p8nRAGHs8tphvr00Zsi/t6AM09+p8VqPUoK4GWJnZway1uu11YLsHyZox8Yp2y2G1qXvAT4c6uxERcgQr0xsiekx7NBN7HP7Z/AJRF7vkigW5McMozqQ/JBV6TF5P2OeTvEG2r5GiPZPcVZkhmUfXWXBmeYvO4cHg8lr5IKoMR0CdAEYPsVCIZNANVjifmn7ngOfOiY+uy9Teqg18hAoaZv34YYsAZJo7HUvmW6Mymu/cEfcfXYmY+gEGJduG1SlACK8qkmlE2UGX5kiByPGzsTu6cRaYkWrzx+/mvsKpja8Z5nCOAkMRlCqE59QjpTTku6O808Eh4QmcMzk4kUQW4tfAk24+Rskgx+/2fmAFah11iPonUaqkZihqRjn6VjdrWQVBhE7b5MU9MKuyB1RLBFXmNrP4lUSwH4hHgTSbDNgp+QbDD6bVKZ1xKh4quyIvnhdpXCCHhkWr/2q/a8o5mQ796JWdMfVLgCcUdgZzuYeQ8c6wr5IgETOGBh1oiUHOxa37BU6gip4hL4fLPfy5RrPD9vwj8J9ZnRjgFFINGf3iAyoMvGiQaVAlrlAj6xwaAuXy28x9FPnPOXyn4w=';const _IH='402cc6ac25e201451695d877a87a44436fc849617f16a0b30cfdae5d8962d249';let _src;

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
