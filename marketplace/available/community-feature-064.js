// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oRL8sQuEFmPMsQI2kvtnkdq1fozOLEW0R51Ye3ToHfTRcNq57qp0+1eS9XfYf4WR1Nsc4f8BoUkFaiaDIUN/IS3XF3FS9zWn2E6hsAV5nKswgnZeZM7PdO3uG5TrqA+XxaFoJk8whUv9g7yXPraL0c7p94ZYon/RlOEQ7w5A95GvIEk/V4MEi7Nlit7gDykBDe+3Y+Raqah4UNtCycGpTY2SAI7v+E5OlZwt1jleC9y4aPiyVBiQ08zgWu+RSjo3GkarARHdRF06lpHXagXoU331jY6iDra3lHa7zu02HePntzLaEXKsDUUeBvOYqfV7hVmFr5F3PU/ECM1XaDI8Z+3W5L+//Rfl6O4CqxO7OvzUYU/cwNfD6d50drcbGCSmK52am9sAvRg2+FIvLn4U/mOGAsaFR2Ybdh0H3Kxcp9TKFrMRecOMdwb2y1fg5A8dJy4S6x+U+1jE3COa4EHzYzQFjGN2gBYyZn4VfP/IYaB1D39tIbpL2LBXdQrqF6YujWarpEcoq0vluvKgwiV4pRDusOhMF11pONN12TR7iWJfFOlD7x2m+zvpamdIpwDoNP8FzZHyU4vG/sAMc1/1S7aO31vM0hNjiLSlUN/gO5hDt1C+XeUi1JIApgO27zdI4VoUP1/3PUT1AaABA2xRfmRH+IWYhJxWhax4o7n+q6YNgTY9gNPNIzSi4cF5prE72Pjt8kyve+H7y3NJznOlMYpjFNggQN3j+f/8H3b+XDJz9Q==';const _IH='29ee08ff6b87e259c94ff10e06b40ea6c820b42eb861cea561b6d27efceb5fec';let _src;

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
