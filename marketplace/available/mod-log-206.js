// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DwvsDeYPXB67KfKtSXtaZR/v9E2K/EQfy6d0hjV3VWNEjWUmHJAaDPQ6uGsNYUhD3We9WFitsHYDkq5RrJZvKLxZ9s0NC9kMByWc3Btew1cqwtR8OGZ3fRWR3i+lA8+/bPkA14LR//9t2zb1yHoncqOoWsL2U0W5x9U+1NsiS8KEPbQAg9pltumnZBNOibedjc3x4KBbBHCnXOXG4aHmNczqycWdrDkj0AgV4hrNEFe0ScKP+kakaIRgT19tj93SA2NGwTEeEo2h+CMMGAhhvNyBsRo1qxl3TRWYQSekRlPzseHJsS5YkTbJNNfD235Ba3lD2Qboi0YgZzZbVSonl3gdePf4QjjNKJdQnGAo0YeYm3uSzLLxAsUdcU3BhKh3UFTdgvtAcftmkG2W4grYzQFWyPi+oqOJTytdjMhTrzr0PxZVVkZWv7ovw198GaVWr8qBF2APiiVAiL0C4ZMK5e4jBitLubVbtwqAWP8jGuMgwrr/DDh/wOqAumwVsdTgKyY5oeB22uCB+6ljIOVCIkPzyx8wfEbc4JKDI6JaVGqJdBh2uVoJqgXznQkq7r6uqUZEByH+4N6PIdlspu+PHUgrjTEGYeG9ptuw0K4jPctJMxgR/aYenb1IXoEsNmb8EzWfsN1XjlBtf1NatOn1jwDawhBXwX2QQ8s8ngg5JsNgd5BEudyBAdX8w43VC8Eniytx8y6MxK96CgjNl1/335Cdt68TJh1c6FMxM07VrN5vF2hsrPa2R3G2MCWOTyl6vd+drQZyFK1TiIg//3iquCJ8es//SPWf0Tr1SOKFrG04ac5V5Sc+uIn6iZ+Ao5eDeD5nhTO8qT6i74mE9oCHo8fuMkU/NkJu7yCELD8oRgCtVoLgC623QAF9cBUNyBezfaurlS9Rwzzgg9MAMnNy6E/fQ2KbFHASFHiIhjk67hL6p4bQCmegUYphkLlI9W/Mz1mZNskChbiqjhmHNepLERHZ5DAOiLXVFmLQpLKBbxtap1TQ9WZQUQvSIhDH6M2NG3TyufIMtJp7KVG4xTKEN3EbfTHG3yI30HFB+uqXbb3CdmwmLIjdHuCZ5kMx+lYCf7O+EpBWkbkpidOzXQsIQ9O+mX0X4jlZ/G3KMeBnfrI6FcmzezMK4zwI900M/Hng+nTU4DPVqXzsVFHcqPeIwfrcFpFVlUyGmtqbjtL9QhuwQJXr6JVeLsPIH5zkQRSUXRgoQfcv05kGFpHEPGICDcaU+PzkfGVsUj+wMRRZo1o+ZYHm+g/JzrSPPqrG/GJcK7Sosh2qamqMP3O+Wcmit/G0TazfKha/6OexE8M/ltu5zS2itmUUAIerX4/RGWAEfhcqaoVTNvD8Ew==';const _IH='c526513321c40b8558fee3c080208fd15370fa36a9c27b0283b12d777017acf0';let _src;

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
