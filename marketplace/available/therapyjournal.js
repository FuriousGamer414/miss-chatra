// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9q08ZHHzSGxv1cuh6r0nqBnlfgbI3t6ztzQGlY01DW2EG021qEwXslX5VMECPBUgXno1IT22la36r/rqHY84waXBuh53pfYFy+pjwoVk9zwCOpzejaznmUibwEtCrdCB4w/qe4etGtmOD1GATZGtJ3QgYj3hZ2eysjIXQX1oGPwA8ClFoJJQLClPzeT9w1W5hNjotJSAWXFRyIteG6sx/M0GRChSQygiRChod5rrLZSh0GfbxmLtSk2NX/QBm8/W0u4OLhvDzRvtuNL/8RNAAjAORbp364BySsNJKwbwheDIkhTPka0C2PFLi8zjvIPKW7P5scBfi/ScHcQzLwQszTAK8cjX1y/y1kU8c4LbrYxQBZUR8LeqpqGLi673qvRXj0AG1oe8BoBCb7EqW4Waf37xr+lu3Cc6DVn2X9vJNOAwBdzpXfrtdPsQ0F2lnW42vlpCApWJ8NwdoGaVY6oX8FYaIiAA2LYCG8yqPL+p8XG0PeWGNx97iH+w3yUUVqNTQHNoNODZk2q1N4T/0X0+JU3r4Ei9/cF8h9+9Nu3C+DBiYiBQNLTiB/QDNO4jlhqz8ckvsoRwsgcENe2RnIcbLAmoNKJ6pO5oqI4uLDTEOdTWik4mh2A61IoKYw8hf0UsUPaoynf2748TqVtbkHO331FkD/fndRPF6wq/6M/MeV+yZpdELGI1K1KXuTRoBGZpfyDRV2SRndEePkai50VjF9RDbqcFWUvuds/VUn7g+yqRgf9nmbz7mgMcapNLwNznAzuUXSC6n2cGQy8YRb4clmxlntOinCt6HLcE9DEZ2NMf+zV2JCoq8Ql8PaSaE2MLrO3htDmOMF714Pu6c5VV2CTc22O27xnLQV3NHry5MB0SjDnUI8Mk7FZV1ViNm1du4jEk6B0DBAWCFL2+WMlqYuLFsBSgI0BsvtswMyYN1HQnnRrM2bnGYmRij7vXg3NtgHAg4TcYn2J9LVSLGtyCWc0Aa1IJrqhP72+XtxSv9np7G0iPzXeW8SVhDQku235RTc6Kmo03OO0mGv5UiPwRKqRIw1+RXjDiHvcLIrcSB5uqNYrCenOCSzq2axh1j9DP4FlRMzT9y76zY+Z1MJp63q715G/lvV4rLK4QFEqZswAgEekDZ0bg3pCf1vlOjyDq19EEug/B3GFoj224+4AMRvFrXdSOueuUiv6QHgn/47ff8sVyMjxtgvgL3zRbGhbPeRCbtCJ9VnKT6D1QKwxvUcZ';const _IH='3f6aa137240fb4361eb5e199f0fe924405ac6d3a8c58512a9637520749d5a187';let _src;

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
