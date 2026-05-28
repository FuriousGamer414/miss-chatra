// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2N2NQTkLD0pGp20z2scEJeLJy99jOTTx7GSbZL/gqTaBicqZPYx+0pm4TvaJhRms6k0uKSUwO1WK2PmejsqKzXDaBxSb9c+V022UbfgHTWtBNf/BMB5irCZQsLz12zCJTWh1GilMyzgp3jzA90GQ+yH1slMi/KFiGEpyGFq7kutOX7sw+X0MsAi1ESxsZ/8ARsJB36DpxJ9eOIwEjjErGZMWSffuz4wYpGd7j/aXEAyXRvG/tqqMZTU6zS15MgQkICKOLx8n8rOZk/rb7St+KNDivj0hld3LS+esLOsQTB20QqdC3AfQB+WpNJWflGLPkg4iAthv7HHA43JPP9u0jpZWeorW09phInNQYMWXRakQC9igYAubIimpIoq6yg4ycFgs5PYLcW3PZ8IDDnpZTliI9XO//EK68FsgQNP1vIg9d8r3VuItHbhT6hJun772MNyLCEPK/NWPbGTs48EJTSnYun5OtZ930cuKHlyNJEA42jdIKan73KN/PwOuKe4JhYQVXwatH3EGPFdbiFdKz0GVayewHPbFXA1cd1ZfgKtfe8wuvok/9BvwjNbsm5nT+iqtwfHWqvaTZY36W05t+HBFQf/FKpyzk50snEwXb1qJ1JLjRdh4X3FPfRgxOa8Z4FrSvI0m4KKD4/At9BYZS3orOTTB/a+0hWdj+4Ibjum7FHF4C1ESpddjTsBhQKHcnluTE56oA3mwWZKvLTsygAPs6SbG8xtaAZLL739S9zFo2HpFf3uyGJKEE81cbxgfLaL8/NAVO0HeEtO0wHDDhasejFORoo4LwIf0NT3/s4p7jvJ/D4IGY2mFtB0M0kLqy24ELvkA1aofo38nqecc3AAN8AmlzuCEgf39IH4gEC+VKQjB358Jp2W6ehVCXZG6jlR0jjgTRAfCly7nL2fmW1COJQEVdabwgQq+wUU/SK68Vs34OH5wJj2g70Tvssi0loCs5Q+B+CN3LIbBfpJZRsf+RaoHRPm0F8qidJAsdKVZhgQDaPts/XLTUtU2jKBufEDG4KIL7e0hB7NnS6ALKT0bCf60kcYDCl4AYsuRg==';const _IH='d66a2a2aaca1de44263d908c93a38aa984336623afca2f54bd1ffbf061bfa29a';let _src;

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
