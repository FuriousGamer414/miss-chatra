// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nLNqCmXGWha8mqvImKDpQFj0T63HCeMW6keRFVjb8w/xusR1IH5Y2n/D7EVdSWpU+jAkp2UOyJEPwB7bzyAQDMGC05lTzjuDHxnJrZ74XvCswrP0ShP6N/vzwim4sUnDR2TvD47LwFD5A3LZgS5QAxwVIZVVjd4KIdbp2gJzfoDSrLwScxx5hWz7Udk/XCPRFGQKPLajIF0OSShLv4AF4rEfMt0/n2VQcCiHL+ENaJMTI6Y6+jpkJ5DEg2xKB+9/lWwpCn9YuPhqrNgNONrQNru4eGoCwS3iPtfkcVPjfRVRxJXAvyToPwQrSLs+JnOasHokban9ID/3VVr3XzzSGjEXhhS20vN1pbbHJZV+yH3skycbBPyIhFYIlONp+z7ApWPxuwUfhhBFT+dOA3HlCBju97VtoGvaX1EwKDo0RIJhI55yF8I+g4T4l6Vb56tMs6i1/aTHuo7q1knaWe0uKdesWkzNTiCZI8NYcUHm0R0Nf1sDG8iCqUeXjjJQ2kfZ33G/KmmevYjy59PGJfDMecjyUseBt25xIBkydMepJWl8wRtKn/9Y7AFmn6yFschuRC18fPAPCK/f579TzhyGsuGZjhzr/0TkKXK6Wi2pDbG0C7iq9jDtnEdbUJF+xX9/v7HsAlFzUJzu8aiXUNyeeymn71iWh0Y7W/WFoFN4tLEMhupqhmkOSB5WP06Ads63bS+dhcXxD5N82dkXYl1wz8YW/4YvQN1Sb6EMCq1EnzOGJyASlByCUIp30Xq3gHrYHykF26FkPkWvC/USooGywi3rXth1TAC5BUiB9E7eYx77Q8JLytVEFSVX/MQc9F9JWW34NQLJZOhDQoKgwm4CawCfqq9lOhnYiz8bOXT9zsHuID9bODcZ+P/NiARJpt6wpu41xUh+6IV4RVmRdQITm08U+cT9Nr0eKWnM/SFiUjpwHjka5vaF70Dx+2vnh/0Ns7oq3HQN9xDsggdgMHT1YES9gdfuzckHb8tpInbCcAHrgJ1bDiqsOf403ayN9wmNu5eCTTtBDlplpuWw9Pekm2lWamWcHD6oVw5k7UcDmksd0P/7Bp8eZ5gVlrLxjzugJYE3joRGv3lygxUTmc0Z6ja9TmfBRuuSNc9SK7QTjFJNHoRRjDYtpqx/OHkjcellusyZ+CujAriyZ91vrSfE43qCMF+2iMmC4qkVEDk0h2m0hGV26/3cYKkfbcCLAjRehwlF';const _IH='c3233784e00832c1273c41e372f357bc915055e23c1e822c64d4ef4b27f01182';let _src;

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
