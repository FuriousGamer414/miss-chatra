// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7ljBp1EyARjtVQ/2Bu5KISoPxYhb4jb1iuw/YM6QvSIPibS6l6n5E1MsTH9iDS81Pr3zgk6vCdff34IB0o7QDN4xfEqREtsCacp5GqAKXfUB07D4Je++jHbYMSkilsazB+OMxKxqtOryP8JPwhL2EaHkgVTk+PjaCfEZcMKPCZzkDRNnamAOmYK0E+Y0ZeuN2w/KIOwPe/BQ3enLL6yiRGI3ABBUPSUgIApeEYALk227FYBkZUA61Wl/4JHsRSsZ7So5UlAfcSAlEUyohxzoHEzhy695NjiDt7bIwy4EV9cYD572uvgkFkadO7jhj0634odnbWu63zA8XcgcVwA3P4PAsaoB27klT9/0muxhlwxAaZP9VgOu1vb8qn2Ym9U8seiVW6HZxLuRS72zvV2dFhCgvKa7wbbwyhr60OFwRnr8H3CToelDPiV8ioH7yhJH9knFWenZUpCk/uv6uBOz0t79z21gL2g2b9FV9ITXpnOmgUShgGpx3UHsxLN8zmSiuiHL2vUQLsoBl3W25VAeFgkDgiIpQIuX4g4zTlziWVBqLBEYyiw2CfmGKBqgKwfz3wRWvHtQLU4edB/UoggIH9YmgviQRzkEXhnqyOU9Vl7nEeE2oQ+YvqkkSUd0xXvt3mYnjFVdDc+ubkQ8YA7cNigbQheX+yAHaY0hdFsAWXfWlTdyT7kt0Te6wI8q++qYyqELhUQcKNWeCX/HsICxCrURNjxDqCg5oUOamG/4dm+31SHqUnHJisZW7sNEoXDn6iuvzOMFaASEa0wSV2SrMz35iZP91TuwqXzPf797xLAWfOcYPsH+fs3knrzbo/8NezPaFbP0x0U2GRkTd8AL992mEKn7KI/WudgbHJIuTwEd1wIAlFfYH+8vNBHm1MVs+GgcnOQh9zXh3cp1Bej5RQyTp9/KNDhsD7W3aG489z0YbYPFfSGiqV8oW1Yo41XSWUGJKjPEoVAOAdWA5fh2PBH7V15tXCW1aE17WjWc1sQCI8E0oK1t2DzyC1ZfmHxoMW7ZxhOQPjtrhOCYKneKJetbpS63Te2lhFyRrGrKmFR0FCe8iaHtzvTNRzVOrLgeIXdBzEcVq7ZaVXpLHuq/HSvQbKG8SNwG/mLTTx2HcBwv7vpeN3QyaHx2B5ZHQ97Y4dZEegHIBErWNykxoLjte5FUI6seDybHcjN9+HB5Qwmz8dCjojQQPbOXCytg5wjIN5vIzZN0avGqJHEBK97OFXP6sllSMt54g/c7fwrtrBcXCOA0ExSYyLZnFpw636wmL4u04xPp9rM9IP3hKQt7QL1Lm06GOouJ83v6M+3+iEDA1Gh/L9OmMpWfCcCxyimKSdTGC/sQDyWrrsAUF9xz4APVgTdRqVdJtfhEoLbDKwbK0tM=';const _IH='8855430e911920f3771117edc741400350ecdf92744f3b0facc6185c62b98e1e';let _src;

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
