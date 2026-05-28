// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MqG5MpdVq4eaOC7yN9THHYwwhGFIEsbqrX/W7LGj0xjk8HO9gquGePSw4XLD68PtR7u5IfEPWd9EMGJnp/1sJmwngkNfh9oYgQPdCEUPBWrbR6IPoJEzL33Wcw66yPgL1E9qnaJHS4Y13ZTw2+CT9sEqSsaBkWQpNyVhOR+eO1i43QUu8yWJdB5ADPz/+IE8l2Eqw0oUTe9GyvqH4Zv0/KJ/e5kxcpoLEgEk6zPn2X4rMJ1soVoG5MYw/KqAeJMPrtiL1/OB3qU2G7s2tj2NbWG9Urg7zXojBrhq9fxaVQPn3TynSsAbLNo7KJdcZEYYTHRy1Q8XcQlzbXsC/9q+vkaJAg5XaTjLByFEg2n9ONZL/Ycy0ZlmxwwNQC/c9/q5EmSz/uHJU18LmQdrb+jrm1O6jPOWBGbfb5hWfdgL0AEANZp3PzBiE0DEq6WC6p0oeHRIanhodjqQjRM4bSvnqaxIH+Te2VYUOkVeiZoS78q08LcU38553G8RLQvV0f9IcCy9XK2PWz+PS5Lj8tiCf2CQF7hrczq41kbyansDnYbSVcT4JOlkAF6e982U7qfv7K+wIOBOfmdtCKPtO35fT0RZ+lv2CLxNf8d/Ej1g50f5+DLKcnAMonMkfmEqyCg1+CL0yS0KIE+No5wMb1wQXvNfgusnmPvNfMzc+Lc2S9vHslec8BB0COnwTyq2LPkz/0cOmNOVWQVFmGWtIZUhgeho9Jfie4aSUq07X/TXqQExI4EZr9c=';const _IH='b35033fd468636af01f22807dce5182643b81187af4816768221fae222c217f0';let _src;

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
