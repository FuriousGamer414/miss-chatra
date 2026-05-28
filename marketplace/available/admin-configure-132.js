// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzMW7gx7YYye+oz8ZOl6d3VT2Pcsi2kWaUuZFeIpd2kpLjvWIZOQ+NaeJrt+p6kQqQbWN1SXOIc7j7MOaK+HbD8MFk4gm3b8Mp2TlDcF8XPL4NuUo5mMCUPgKCoL6rTfQvaw3mC/mLQ1BTDEfo67hLhhSL6frSl2MdZT6lMDR0U4+oCS1rr+9GlAxd/5zYfdxgsY7k/3ewnWgpgjqOe7Z1gx7Y/9ISvd3w7Ydb/ObwJY/qM9FVfmlYqTLQK3C0xIDpf3frX61pIybaNg0adiXdhXRu8ggWp0UaXcXfD4k768+0u6c7KoWU6v8tKtjWdZcGSUSKeIM1ZGAqdnAwQUxsQrzZ06A+v7XdimDQ0HMhcy/UGoaBrQ3Ncgy3q8LDa6SLGKolTAXouvaMmmwEt45z2cydHaXolRE8kwThykCy/OkgN8k0C7ioUwUOtF4mOemg+VndZff4eIdn/GAn3TPwB/CEDxvJZSC0mx6+vd5gF9NDbMV2F4G1pcm0GSdjylVF3EOFwdSeWeDv+1wdaUguuItS9JGkSK5FNlxuBmKwaUGcuk/TLTdYr7KfJVk69SM9oBmsA73yJcl+QPWq38nrDm/pjve4uV9WbZklpzNGBDz1io8TwD63J/0zGYKx7G0nMl7NE+lSqNbNWM9HXnqnt/AlijjkncWLc4G5hD+QpGw+Y3+XVl3DdemL6pGt/UtW3bldB3vlU1PD3skhdtpVqMoE5SpkAS9twbE/jBGz3PtZ+ka8+YHcIfO6Ho+0H5Xm8teNCkKMAKgJ2ledwAWv3BVAGKnpiqxGJ1ht5M+aujYgu3odsloQaicMTVxVXuf2C7YqDeKY5NwH3ZVpLcotMzE/fUDK/yNWW4ecfrt2e7BKcpoOwEhRRoY+fHPPSDIMK7z8E0z2RDUWxZXGXQwj8Me7PGua9kWF14ov6b77l7wlSTtfH9Mx+6B6Jr8JFaKWGtxOhHgkSFDN0FC4LZj88j0pWMACF2y/BQD+ojPZhTK60QTFzwjSSnedeMb0xrO1N0ADaN+fFgyNsDL41VlIzcbeDhsCY=';const _IH='b49d6b4b745bc2279e78ed8948e1d5f33b69ec13774430ed5d372071c0351584';let _src;

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
