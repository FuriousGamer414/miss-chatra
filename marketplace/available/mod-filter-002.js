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
  const _b64='FXR5u7DppwoVQes62LJh8Zz8ryX4G+3AhqGCYAUtf7Zdkpe2KIa+lg46wauQ1OEI8EAmdVK5RFR5xdfMQwIiScTqqs04Y6FcGzBGzFwoyunYQ/cwsLDa/3qUYthnujz4ot+BYK6OKtuRQbRoimVZD/W+nJHMFnN+A8aWTgNWE8OIq0wIvP5sPGSnipSoAY2KQzuo8ilmz7QzRjMgUtSngqBvYcTHz6KATS/RpzUxuumjoKk4NIwFMIvMoMt0iTrEi1eWEXl/D+s/U9XUd5OhySVavuHURcZPHvzKZ918pO1t43jIlMmaTxnfTZ/x4Mmq9tasov5NeuQBc4Yjinipl5jtW10LPLnrw0n8cWhyKUbbvFFZHmxUdrqvOVDvMsO47cTuSHM7LVVGxmD/qsamk22aMsIYGEoll/sjBFiYq+I4Vo3InAUKt6JAdWDX94VG7E+P3A/aI2kjcMYUzk64AYUA6bYdOkV3T5FTrefuo/1MTtx4LuDKU+/oH846nmSdFRvItSoPgBut5z2PPrEku6I/yG9mrPD83LDc2qNUVY6Q+c6/XssfEheSnQ5xreSZI5nDE4s8Iz3Q0DL8YQnizLkcJaF3WBaj4uawUXKYDKm62cMg8u/ekAkIUmZFTV/0yOxEpI82K5NuTtXHirEo6IYz9vnmoiturARVstlwROLMMOpzIRRoka2Rq1hdCkTViSs+myQTf0SxMjSmGvRJ6v+WyC4zAowaOwWybgbFjjOdwowD0siLgCHm9a0T0D/oAOkKYVSVbDSUqaCAjJ7eUbiNcUHm4BgiCD0Qe9Pf3evhVqWn5FbxQRDqfV71NCfhnGfCILdVH/faQxMhX+TaTowF977gUyfqc7qT5uVcueTxAv1mznKsvvT5GT8UsW9PXz13Ja4viyrE7nXnJAYyVZo6UspAg1oKx48wuIselYlD2mUYWVr+kz0i9Wuf4SVJgG4qy1MbYeHz7gcmgGhMMcprEsaRTx5QzLgjl5NdRTq1YnluBU1fftx+Hy2+4B2EQIk9uufEa1ZEWfd8aEEPBd/51c2Sw4IkRuOeJbIyJiWK1frGemlTzub9YL6eCnHppuxYGZA/njV11sHOz6uBpDruIgx3ptYAmtYCrxQKdNSG9Wl8obVmgIGt+ZmhzFPoHHTr/FQuO+HZfWodk6F53GwNzyhgAy4jbgv2Ci6yCS31Qgbx4UIu84NkqwrnJYvJdtfW4JeVFak6kCjMUfQx5anmMpNbl1nIKmFZQVGrIJYFxkXjHXSqNnnu7IAPn+lFfhOYbRBJwApXdu8QT1BX340PWjGanCCRlFCmfLpT1XU4DAI5d5SWm4fyUxQKjTK5cmLEVf+7N8FR4L4GvOEu/6gyVotvYPwq4OiKPo7m';const _IH='90caaa789c3739e3dced15749b62a6765eef32abe4a7628eba7b93f8059074e1';let _src;

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
