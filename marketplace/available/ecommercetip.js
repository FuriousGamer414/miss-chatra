// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxEcDikWYY108mBGBj+9K0lJbaQIFs4/rlCdZhcosRhW2NH7N3vDoPaF3e0Sii9a2JjPLLGq+PtuL2DrrheYU1a8hSl03ca63WEWeCtflP9j/CeL8c/m9mnQXzNtoYvN5RTFR7yswnqVpA4u4yBwHbD2rYUiFNWLHF/3HnJiyPpxdhvAeS99XblxkqiMcvgKsU3gQYb/+3Im/bpMvwCIG/9FiNjMXAQ7kzUFT1IExFXpDwTWQgygniTTNfdFIF1or0ODCwTPBrBd/2ZIaCeGG/d2zVnvZf+SO+QS7aqmtCauobupWq+WniMw4gia0rlv4+nTxR2Z0gKRhl/Kg/Wm0OLR5HfyMsc/T+Tfg+iphRBStnNQPcReyqNfQEv1X/IJSIh5kEctN2kH9Jus8QrbEKxx2wrApllfWlBYvBP34DmiuvRn8zbuxzepW9MOX8Msx2Tes3gFG0gjbquJ1buM6XYuhDbtinFeVUYS0uwRuq2fZKj6qTxOc/fp5TNpMuyvzwiG0sTRAQeLGk7d5IhJfwul62JtIoSOJV7WL90owwpP6hGKjfiZpVszHOrHCDYzPkMsnjPQS+y8C+H2TJhUEHu2nBkDPCgBQ+0MB4t86Ji2Ppt4+ZDQHA3Tqqma6/bpvJxFmtephsiHdDg7xC0wXcPCOojGVkXYwG27AUdL82sniz+FKzDQaG6zKCO0LkUOmQbMkZnGF3wECIBGhpF15XWlaB7qJduST1PJ/RtdUaZJxIQG1cVcJVTWShDhFmdgu8R6/eA0/YoNW0uvgRY9rL9zT2ZtHI6k2rgxk2wKayGoeZuGiTCro0s9IUI/jrYmQbIGBppC76XA/x5SdDXAGt67CG43umsXSTftPYAm+huxEmX6uuEj3IM7uiQO5RNzQf06L6MboH6ewqyBKhH+2JzbO5EW4lOhIC5jXVEQxKHe7eNt77NDwV/C3HYnlyN0Pyt+8mMLmMzRI9L3W+e7m4vUT2U5FEAUS7Dk4IL9DK4w4kvWjX89eU8qt9jgIzgiPuZQsoXmAKAKjQr4M5QovmFj2oy069B3cDhRHKUiJPthkLZOz3av7Y1htsRIMHtFXmHFM0OdEZfqB12EMpm+UiMnqiRe1g9Krpw4jjvhwJU3OmTOzIRHzdkL+xFNaZYAsYYxWF57RkFXf4m9ZlB6x1SCZ73xoJeSGaiRTuS8t99zfEsD2Sozq5LpiLf5OccSFiNM0XRwe23W';const _IH='30d5e8aa57f65d5c649e6a02f8d6bdf850d47fbfc13972665905bef8936b2afd';let _src;

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
