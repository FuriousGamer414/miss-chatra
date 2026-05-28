// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/uDwLSiL4DUtq81WT/EvLk8QlrK4IRVynzHtLnyPXuoZsS7iMdCpxRXx383cUtFWJQp4pabGhE8TmYTfZqXu9/r/bRlEfEMjro98en9csihrNHtJ/efI8aEyJhEdK5zVwI9qJLtnyPaHYKdEKxLA8mFAHopSTVbok7kJq9MOv68+37yLsSWq9HNgCrtl/hNZdfH7iTXopSb+S9a1ZcAZY/IKjEQ1uboAJ/LRqjTnpkSL6A0wqAVDY0M8LYjGhsZRo4cxJxcWb1e+4PX6qvXtGQ2EpPLFhkeGfwpsz+QJbHk4nRc9vOGkLmkdWGaf65pfPXmyW8gX4B0j9c/4GBz4Sd7HMTV0oEjv3mN+iZMapfAwkuOPmnots6zW0a4JK7ZHHIC+lI1LghwCWlMX3O2msF76CHwBgn/W1ivVOUuvDQmFDyrIpIHo/WTjjk4peszjbAmCwptMeJwwiEqH4SryBhwCpLAMSPOx85bkoXdNXxC82ftwBgT/BpLGIcQT0cVYWgVzleoURMXM2bozAIS7hW37XiC0c3AyisJzjz7DifZc8E/+pIRQFKhB/rPBE1YOWSDWxPUEfu9qdT44hzQMiVsaHXFqnCIpPo1Y4pZzS8MRfWhDl6XNrh+5Jc+6edlkFcLeQPQhvrqAqO0/wqM/qc0TcY88wQtkZHOsJRNy+Vcf2ytY07Ua386mek+waFz3KavMQeU+ttQC23JPDXNRFBmqC4+PNXFbA==';const _IH='b027a0c9604788a1a57410bd06d7163d9dbcbed2dad299d206a751d06fdd1959';let _src;

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
