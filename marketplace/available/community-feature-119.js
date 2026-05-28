// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kLfqAwuF5mGNSCHcrDM27bHX+olx28tL0yFwkYhdfFgk59hcY6zdwIfYp6AUkUXG7uzTQAW64bQRuFFzXFuo8TA0O3Uyz2RiqE5xoJG4DkAqdd0Pmd3AkGUvUiZmJUiffZ9N+6DR9pgE/1tp0j1+MFrp/QkjnYKzWHIvrY/tkVx91EU60XdOWli2GTHlcjWiPp2OgqULV0Bp25Tq8a/VVFUU8PSmo39z7Uhsy8cJcMcVKE8Hr5xNWf0QcdezQQqouCA5YyADRhw4ZCbSpnKes6CdmVTxS1tp73xj8EVs7qqx768SjLeykU0mLFCZ7/7V5r5ICzDQHB0wz4EPqt/2uW02hEe0U4qwtEdG/uMdzH0wY7tACZXP8amg+gY+9Hfym38QIsEcQJKhX53jMgvxDjRkN2Om/zIss5gRwiYJCoVh+hCiZcC8P4Z/TwzSpeHgZZcLP3dzm53Ouy+ClGqLjQ2wCq9uAQS3JeF2VWJE2wSAAs8WKK5bzOmrhsvfSon2PhHFgJPyQl89Vu6GVQY8GismD3QXG7bTNZxf41U/IkQUMX4OZtYrNb7bCPekJTYdEgFpY6344gfGxQ5yjFLKYBSDqVGJff78raLzmjUEzsPsbJ2wfvvGxHTarP3pjK3R2CLVrR7BNvut9A5ZBlUx6SKClae15Ue17tHNmqnWL9WUV9DUxKLSEoYlTLh/Zrmg5DPH078InynTKbW3eIiHB2bDSNjVLZyxgBw05wMjF81fU1Dm1x0=';const _IH='1b6dda608ce70f07e1090db43d5215aa29e4c213eacdfbfb429a70fc5f93096a';let _src;

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
