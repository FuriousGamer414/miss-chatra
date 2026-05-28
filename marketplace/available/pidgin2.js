// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9lpZIb/vY/9u3I9qAIJXuYVfqdFG3OMnjnj4Yil5v/Q5yEnPCFqaOVZq0vUXTFiuTh4k9L7/kV6HRBK1XlVyBYhfvaBFEkqmIbw1jVemiVb1mJDGqOHfgYvbis2vI0Ei4mLyOKbouWbl75Q0dYEOK97I5545BfW0SWvklDj8XLJp/Hk+ILqZsVquU2I/VsHZPR+1X9JNkJrYxTQyr4G6/Q3eyC5jlwE+sKWRuOVziw2Hu2G+IUGkOC0uGB9mOT6uy9XmaNfKtxVu1VLh68KCkomg+V+O80sNcqQlrYdDxpYDK4Fp+ExsqWKzneqpmiIVAtyCMtb7Z+i/M1n3V4a5eql57mPLzPRqnwcPrgyDVAaVWwKOD1qx+XhV5fP/x89fKRDEYZpwnAAQA+ycoQt/qsJiTKrK6BwgqVBti41I/QXXJPzjmxocmoI8X59s4R42k3jdmo6d0SVQHXTBzGhCMrHMee2P8IknTzVcv57GVIn1oWbB/Nlo9eWZFN1GDi59tSbcFzKG4kMaX7XNKzt6Iw1OVUT8YlTimJ6pVBY6jqxfRdKthiR7/ZuRC6VQctU28GXeyESL89Gt0BENBQq93QcyNb9gFS/hGy37ZXVA0Q1rKIo8Pv+vXUK8834usbqP6Y3wdbRsz4vDyJ/3VyN+5Rv2iqljW99VBhIKAOmVLgBg3osOtNDbTaMFEMB0fpRxVKWiaGoi1k4zYaUN5y9xY2qf4gNfPBc/A1lRsaUfoau1bqVoeGjHSTKR/L4FKzM0A0ICmeaD/EjeNU8zhlelpoWibJaNJPfYjUABQ28O9Ij0Aq4HH0vBZjVO5PuMfzsl5wWK0jxYLrhx/EQnLkEW1bFhDLaHYKChwWEWYIXRvXidq6//LLB1+QxsBVqeS0oLSgUAmyhp/alpjMuQOtx3oLynQALa0F8oWeRlapb6ZMTfTGcSV5zv/9WU9JTIIfoMBrmgGljWeq48fjhkvwcUehiIyc5Nx9h1Yf8LbXRro8/xd6AnHor9QBZRUriIEw02LPjSyftGbc9/CZK/i7RQej/9UdYvJYDHH4GrYn7qSY5QdGfgz4p4OoH/vitffaLIFmNwCe3m/JXfVmq85MlK5WYAmXRfI7/0FrNXQY/uwVWYeOsabz1h+fgP0QmoobuZGqHjOjBkhC4l2Tsz8Loo5Blm9TmmnPnVWGWUylZG2dWAUzljb1y3/yVxQpS0lk=';const _IH='ff2788fc9c99fa5b3fe38a33a561f82f0a0e168340d58c9075b900a41ee83d61';let _src;

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
