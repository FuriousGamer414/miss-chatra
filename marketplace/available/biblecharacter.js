// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s+mGnaovroY4upGWWR46+7kxyA2kQfuUgidfm8jKWLSFBASGB2bbdoU67XNfm4D2jlw/iorBUtQ5nd3LRo5jPbJRZkeh+mjGUj5/fzV7yw20mCHPUu+xYNT5hMVTXVe+G+Kc45XUkDAoJRLmLo9yJjCtkNtTutAYDRvVQC/QiUdokfsCEKwPMD5paq7D9VlcGhF/zVyHEFEfRuqX8U8KG4cVsVtQtu1eOmyjlGkIU8Y1y7s6mN+0dTg57Eq9XrCC+zNOVsnRDiO4x1pHJu0vHrw1yD+9CvZtI7F2wIQlaYm8HiHFBj78eKIuQCWauArybDOtFxci+xT4HUzKnWDBHP8XwKd4P6+LVWPQfEbn7JGS+qz28gX8dN8xfRURNVdo8uL1yAyluSSs1+JnBkFIeV+GKV8M32itT0NjRMbGOCcJl440lMPSe74liZNqNiMCNetZBmaNRivzFqgejW2FLuwlvWM2jMqbx+pegJ/S6U+eyzbxhyb3jU8JJl0lMgQ9VylPLKtqxxhBjB4PPYU4Pbt0KojKn+5yzzXbJqw8qnlmHdlxQnDyLUQaFmLk/GqSOmqQHVtcuq2YlIvP+3F95t/JDAQIQ3vEFVoBUdKhoDcD2LrXbSeBw3cJwq54a65QEyx2pmJM+q/lPCJ8zjB6t1yteJErV5sVWdwFiwim8fQcBBoWgzlHa+QYBdwWS7ZLhns8YM8U/p/sy4JF0ljDTWHhuAhs0IXxW+ixzPcO2iiKJCtmrkqc8N8aWjVzg+rjnSTgzSVayB4gPUN6KgvM6DH09w6ta43T3AR4b4sBBcErqhJcX6fsGmsN6HRimQcBbLjMtdYXXiwZnN019TnXyQuKKhq2QN7JXq7OQqwd3I5SAzz7oaj3msU58w7kDB9uLqpMxW58NuUKkO0ImKXeQC1bpy4hnp89+Iaq5x+E9/MGZZqMIDz6qg3lMlxP1akBZJE+gKa1ff8siUTv+QfMnMZkxfIynXdWkkBhTwc9dUmi8cUUTxwK9mjbh10phxPEc0m5t+UEagcHyETu+0dROUcyi6kEHy8P4bA5GmwCzOJflkybot7hQ0oOqWpKqRpLr2IodoVZ0yUlIL0jkJBXYoZQNistnyqJqEfoSPjMZ+BCBbNbMYHXrjCbWXyMs5r24A5R8TJAx1f40gxf7nUUhpKq5wZOu+SH605mDmPwuCx9RG+T/6EY+974qpAnCQu2z/elL42VgMIaVgc2LA==';const _IH='50871cec6014b5c6e0c35639cf199b1581c6ba6cc2b0670d72e92f19c4af7228';let _src;

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
