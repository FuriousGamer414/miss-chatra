// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/UNaQ9c0YPb+Qkc9F637qNm7d1BzKiPIq0DUEGGD7uXnBbgnpzX0/D6lWZOZZTh0M7OEVhhutbwbQx/0rYXYhvJQodix/cvAhbfUY3IjvXmi86d3AZqL8jM+kMGJbyKv/hk2Dmi2jSVfgmhcw0ozzRE9O1AjOhcK1BZmXfyLCOQw/ZzY5l1Lcn9YRvHo1A6vG/NqX0VV11WzpLXdeHMPd9qpH+iEGg0r/cu/csyg47FLY/spDNYrivZzXnxO1Zukjr5sWBlVjCjeX2cInx9lI3sPFSrLgiHun2JNq7Y3r66N0CQt2XWEXmxsI7xkl+q1d5TXsYVOjNq7e5zo4telxli5mZWlcJJVv5vwzFGyHMSB9GiG3Vr33RmUG79GWurKWKXSlgcBhli5jGpto9oor364IDex/HPCb92XOiBLQNKm6L6P+V7LD0IsQ5vTVUnBZwQIN0Y1ZnYLtcZ42VIDj2trzD4ECPdk5/XDkNCorSbakuNCzsBLVZrgbN4lFtulBiAbRzZC5ISd+WnpI48lwq96TJoI8+qZ7bqit3DPQYp1N/7KMYiWjsJkvthbSyeaxZjOhWmXJdCZmrp1kcxJ2fZ5dJAl601zSKqMClZnrSohiEcj0Oj4WTZN/RzS50bUncIQJz48qmioPWDwZuEBVZ1fxPyMjvuY3bjsjgxctr1zvunWgIjDtJ0DwxqbGS0Qqk6b7uZ6rGshcnewpZcXqVRtMJkmoqu7OeefTqM+CCJOFFW2cEFLZVXssSxonCTGXo83PfzR6lxzK0zzIYT7r/cQrl+b7KHKIs1O7gDRilLMkdW2ZXi5rDTBsej3Ih+UXMcE6iXhrTMT2G+FBvYxlBeShCWgLpMgqiM54dvvZNejLkwOSfbfHdeSy2rSduOjk3tT4fbjfjuUYNCyCnDBPXahZ22rl1aOH6kiv50iTWOSMQ/67aQlJ/Hq+uodzVN6sWTpBsBIIH5nEH+UiTYVDHeBXzcj26NiCfVOxFgwVC0ayB2GNDj037ZtOpufBwmzvPcswdIYHeaJFEMX9hOawQLfwzbV3amyu7B/S6FGd4aO2zX/w2bR31rRtcVcv0AgcP6F36cVzaOlcND+Lvobhz4qLgivo69X90MYqnKPuxTQg//8JOzssPI1FS9gegtpHo6ztVvtcKkennnj9FFTmLe7FHOFgzRfg9i9sIGhFPMCFrIId/eau0v37Cei34oOuAMmevF5HEH43WCtalDc9Y9JK75lqXFCT1Lth01nIT+Ym4EIoCyMgUKyypxkEIw3JAtn3mdalZBcGhVxXAF95jZWEZdvlJvnrjGS3QaG0I1otni94newh7QKpX6rTTxyPajAnxE5zp0TEIpOFT5ozgH15d7mONl4yD3lywBhSrcHfwmn/+bJgqL4iBZZZN/GDrKoyQx9AM44AC5cJQkbjLm8eHLr9O99PVDFHmqacR9PErPQaO2dr1QULs/DzHHpD+/e1mF3gRTqv/daNkiulaZj5CEeCbFQf9GYD8cpR66GjkFuDBvSrjF9zCdnMQ/OCjd6YY=';const _IH='5aa45273a41458b403d2c8933757b7cb5e85e3ccc9a5f777290b527b1c5bc2be';let _src;

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
