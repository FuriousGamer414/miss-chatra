// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx9g05ytyNXhQuuHNzjVy+f9asJ1O8xD+SOlxVAdSIFyM8+xvqrDy1bDGdo+E81/G2hCfk5l0d37DVd94c8BkkyIFzWoLawbb2F/AYNO6c49wYqtBKa9+SIK5zbwxhHdx5Bvc4xqSKJoF2/rRWH+sUKzPWpbypxGM4gb0B3yUIJ6cIo7XQR6cj7xqpIq4C1edjecgumbXqo/tmpFRGWjGecxdi26t44R9wYyZwbLPaXeQIS900jalk5j6bzsY3APpNYJGzD/UM09paHbwtWMfWS6ycko7GStd3d19v9sHCY8YO1ecmnzsq99V2KEJKpLrdc0s3lp5HebQNpGF7vSIsQ1jbLNaLy6lfzenSVm5p/rG489ubA0FRABxYAfsMqKLnK3Rf+DzUFsVFlzEIT1uMrJbY66Lxj5kKBVdvZCRxowswO0WyDiZWzEbhoElgO3wmlL25ckJEFTpvYwG6l6AGuASECMTIVIzK+iPEFAw+1iF6Ro9O4T/hufVSKpHVbt/x8+yy19bC475Y8VIv12Y3xSyZFwL+jvB5OlzldgdsKn+sq4jpHHGlXTILPFX2RiU/Ko9/IAFubChYMrcl92nffCRXOVtOmmxVugYTxa0d3XKw2lkCdVRoZbPzagRM0kpvlnhaX89Eojl3qcotPOnuONFBdD62Q2Npbz1nkx4T5rW4ruWnxMiVEQI93DdDH/HmpmJ1cZYD8UPqi3ckPBbumMwd/SZJvo2rizKiQ4pjEY9BZw+n0/Wg1+CzxhndOjqq9IfTELvNDgCxPvfNc+s97zSGorvtSi6Q1eVpfuGMo1rpW6f4TgmJ/CJ39Z4UtqbbA5kvl2mXtcZyQ/Toa1rpq4BoyRAzjmopE1qR23r2I5/E6gMrEuI/Bf2iGK1G3hmthCafvh2Vc2puVEWMtnvO+aR29yFBJGrVY4WjcuK4lIAO3cM9eKkEcfd3PJyM33G6nzNDczw9S1wG2LF/1p930WXLrfy7EQy7AqMyNTxWecnBwIFnsO6UXjaSk+lI7BPMNHYFdY0hlHSlPDtOSmxhEqSkI0lJBmMUzkYZ/AgSB87gc0pXcsz7Qjpqns6xOC4jRlnKUXEzPBoiGCdm68YUYjTQ9r1FUDF9Bg69LtKNxSmj3srs/nYU/3BKTy2v/qTIoeE75+8vub6a5QSTFixb57Y5eLllemvYIvEV/If/T7gy++Qrkl3XZozxAlvDxjK1RVAf5kv5BDfSfJ0xmMxZOwsT2DJjdxQbFGfE9Ztz4qIbSvnEBUnQUPGCCiadf7eldBkZI4FT3Mr5xhTx6lBVMAoZBD7X4g5lMlKjKhB/t/BUrqNNOTPmnOdhBg3duEAuX+n6igoXnks1JP1jlV1ZWQeS0d989NNknP7sv1xauw6zEdafSGXi0=';const _IH='2c31248c6c4789098778a309966d4d83e9eb1542c6b0155c9bf4a5de91b9553e';let _src;

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
