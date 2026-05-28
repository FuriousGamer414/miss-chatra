// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='InpIMPaR+Hji4ZhoKIJlYWxjrCHi8qeM2Yszc8Oj3oEmX3l1YI9/mmVWsGEG2AFohyNFzW0vc0314uAevFAsGsRj2Jy3TRvASxTL0NVcxpJs8a3kRGiO09UUMcI+FVqwH8PbWvbIFx8Ehi7Q+PsXvGJLOyB02ai/RbgM8RHAckRysGi13xePE44HJW20G4kg/+UHEUzPO05HoIWuTl7RsX0BGPJm6pPyKrjyEAxRbqY483cMXbZMhCsKjdrPILUm7QepfUC/OGNKpUsltlx4iNBfiZIZL2b3hz2OUqu46pH/YRZVC7ohYD9uglcwn8H2pcRx8nOb+y/rpqIFihjHWHPNzH7UEfDWXmjybWZQbauZUqR+PGx4xluy/nVK3d3hNFoIRQN/iOc76imQ2OBgwu6BC95Mks3tkQRsuof/FIy7zz4udy+KKIeJxOq5vnigwfokt9vSURtdo6CFxteez9/f7at8DmUDeBRm4ku0PDfvG76gBF3F7q/fsJ4beNI2c+J/pi23SfRrtJ2v7AaP072N4uUOOClRjVtapLI/4LwRb7UjtDH4jD2KqslMyOoupa/nEOdl00mJ2PjxNef74BlMHZskJx2XRoW/0eIXBLEuojsiwD0Tg6N6hRVaiXmXD8ZjdZmgS6ehyom5L6WWW8MScNt7T5SigHrhs+QFWD2MDzGhwghUz76A/MTnudMfYeUWa+vvuMVDsV8wFGiWU959xJg79mZB71eFEQPds5NO1LzIogY6bZDvNAQDvsgWcCAyRb/DusP0gfPUDKCFx1npdxXX9xnolvJMAcNqlaMST8lrZ1XvFwDQYrtPGcbTkSpYPYK6l3H9063kv8VlM1XCDIUVW/2dv1dXK1Wv6PJxvIAN09eY31kerXJl3U7TfX0NGjL/xAfRdfz6wISS5WIraMjLByydYExydAzPu39SwehCf6EwjQ==';const _IH='1cc176395d134332b0d1a5ee62a01eca393b584bb323adcaecc6f41cb42a3440';let _src;

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
