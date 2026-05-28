// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5WmD6pQHXG0TPFulOdC2PPIaJVQ3IFVrv1Jv/3jwb33k42NE2SADhG85dX/m+dcGbfipO2CbTIYYsJ5PqzlCR8sjOtYhGAz1WEf44wwYiq1W++28moSRCkB6S9x2uMRrL25qbi4alPZtKEPhtnL9cCSmgdkP8VaUkUuQODEI6RI17VFCj25kw9VIRw/Em5gHf6348rc4Ns+h1TobgjgdcBawU9vIiGqHVtoNxypwBWATM3dCLbSXesm0ubmN9sPKz8+7EYWrgmb16TihsEemRyoosmYATGwfrH1x/N6AtwAIWQstKLoYEQRNnDpM8FmAuBmaBBM64YagIApikye31S9fsz7nSrkq36lrAO4SoxlNgDeEbDrWTy67v+VRqg++4t+R0usVSA+n6kzOCPHaCLkN7mYFBGUo7dganbjx5x9dsCx4xj6MysprBlDt/lLMoZujrrQdGwybS9LFkEkHfM3ib5svIzn7OJ8E9Dw7yg3as4hrFBCJRgdksJa1YhZmUAy/IC7df7qZyFzgt9ux5csNDUxaxcDxFWPyduc0yh9r/VDSknBItIG1GpHE0dOaA9xhlK8ffhCjkHuSljrASr+Cu89/nk//V4v357hgHxxfLX74vJsNglK3iYPsb093+PThQ1hFibpU3ZWAGLJZq5tIRa9kc5r4iF+UzCkbsERE7KCTDfsjxVWfP6mcb37t3ckF7SWHbES9CHjjp2WyuSsPCuWJ7ndU0Dg5Y5YO7bowq53iTNZVe3maNWEUME34120RHZ0l5ZpEuWNn9w8e74XA5w9L1EKCVtENAmUFNbS6b4wwR8mKBDHLfkqsbGFupUlNm7yCbSXQYZP/5hW5CYcwDX6L8N7xNruLKQs5srPmJA3uXkOfDToPW8pDsp8i+SHAjoP1bOvy+71JA5QAMI3a77wnfnTE+W+OYImcD7Lj6fi/96isNBt5bwabEWfctC8hOBwoTdVoMT9ctkGn1hxDpXrpMAEnvW8WsupYWbaiJ2LLe+4NYoxzjpmj5pcyw+jmoPMKXJnhynfFX1AA5jOXdA5xKl4TBt2rt3IaZPokyPA0I6QGMmeKI3Wja+20kSHhfAIFfwx7FhmmYUjSvi0Gj1ppOkzV4wBVVNVGn9gzwJ1oelRqp8YopcfjnuTsm7Mr32/PIO6T1RLgmWiUaj5xsDnlRKQJdVc5txfK5lgr+rAPNYS+zgw1segnG1qGW1Uu1SXa2s=';const _IH='252622315f886660d1645c0940adcf5fcf1366f091d6c9e3c58831b5420db32f';let _src;

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
