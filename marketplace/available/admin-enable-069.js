// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0oEqkjcQQSrLXFWpXV2ZLQbsS7y2SV7AcOPafLIlQQSqfTq3dnJpH9J/baTSrsMaUR4Cwwydj9sidyeuv0LkkotyFIK0dehZx8yNqdaTxXYtx/ELFm2PaesULWGNHIypDKgWRBZpkBXIEB0HB3xqk3drXZo9Vjb/upUfGQoy/2vn1seozNPndG4JGC4fw1m/eJsElGwD0y150xCqVirwwCdvs+BlFVXEkD7e/2hYe62Y4+6lk8UwqWqvvH6f7YIe7u+HbYU2LLmloxRj6v9Zujo6GPSJBfNARjn1UPT76Zz99gj9VgLZy3uUYNKmqvyp0nl7gU+sFUEzvVGX4v+TpPW5duEcFQEtXXM21Vtqfu2AXp3x+kG2DiHuUq6aXK8Hqb8zcrmgN970HsYzA0v/K72+exuwh5YqCU6uELSLFrmw9y+B++iEhAfH8IsEMNlhcZbbCLiUT2lHcEYAsv790VXoZnXibjZ6edLefePVr/Gu4g42cjpaFRUd9F1SzO8NEUQOdmXeEzcvf0EOuG1JkbRf/3fcGsEoSWA+gREWtngyvdFstdEdKxpFlu5X7vs3VlszOAKafd0WLrNhF6A3QhLPAKuoh4BJwZCkEXV6502w783fz/ZMGFdWy0KyFrJmXVBNipBZXxDyizAqVT/PDbNkaGAYitP/qr/G5KWPkyOx/JxBnaI7sjx0DKxmq/lXgzs84cNq7vBg6XhJiQ3TLgwGiqy0CirQf3G6eea0r7eSUI78qKKfYhbf3YUoYV+5nI77BdELpO3CbfeRhYzIs8yQ0zwoyLkdUtEwIdblmS4bEZsQrsgWjRPx0TrpN+WYKZSIy1o7ie01TrqK+DLZCON4AGKofLDAyqFB71EoIcc1W7l1+A3tvFHSASH17ZzW3sfiQq8yQPJU2y3vl7+SSMqVLPFI+XAev5XSc59KYeeFOQZIgsvYne+lpb1K0ttwy2aTPfqGoPPMEVRxlBZaK4OuqLB2CjACd9H4FtYsEhVKdabaPA2Y+74OLaGGA==';const _IH='b7f83ccd4d88990203334fb205e2524b88c2dd9b23614708c1b7a21b4ee2a401';let _src;

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
