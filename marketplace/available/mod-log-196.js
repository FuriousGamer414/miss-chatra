// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xeMZ0/vSiGrpy1guMJyGwpxSfW7a1/YR9hQo5W1f/h8ip8LxEiV/2CveWYjlmSRZycLm1WohIJ07K64PKEvS5Utd1UXtuuVmfqcuJdWUmCJUTDNdCl6dxhEsGOYxwJ4xGBsPEDg07Md3lb0uAZKH54NJQg9uIn/dpJ7CwjduZ+ISZNtmSboyUc/CfzLM4nKz0y+s12LQIb48DsJMuf0e0NB/ZTk2ntKbOjOsb1t4UCwiG1rDpnhzdyBFeVK9Pf1I0OMbCwk5KgJO5ZdGRumm9PZmSvkCb53WgHAfOKqSLx+gkQmp5Qh4y5t8yBcf49uRfEMcda4p3OqJc+FwwD2Xrbs0PmFDBZ9D647LUd0YUEggADvz1tVTy3t+VjL22DtJzD/nWmM3g1sYuuHOuPayHzffRO12lFgdhDrJ3eUKFPZydUSq+BwVjYnIC581ZNkZdYi+nHZOxWgeoSn439mA1RwBrpzoLxeOo4AHR6tnUPrb6K9bj8I/TXUXrXB8zbqEBQtFAyVInqKVDva5w/Kxe05UFNIt8xDSJUobMi954AZW//7enT8Th2UoFaKqJqkAt//57NT4HepGYxZaVzIfH+hdOk75ug+1Y6CgvyMPee7UiVIOOCabd4kZdlZWeSyxE85ZuXXNs1W1UmXeLUo37LyH/TOuAtlVWTY4tTrjOQziCOW3vUQ9SO9fFMdswq5flee3bs5NifGDuoON+L+M3aMdwnC/7x5bT40yPmDhKardzl2AHSEUbNkTGuf9RBZsiz3UGnRMvXUqCNDO5KlbZDgru5TME2lYcz9yweBH9XJCIUKilCx26hs5mSrJiQwY539O5OHKYitsJc5RwbWyA468Ow7I2TNRBgFcWSmgVSkzu82s2wjnkH+Nhd53eKcB4CBIZu5s+53nPJ7byVrvNHzwQaQGZ7ebB8V3a0aKa4wXco9ovnvKlv1tV+fZIb5jSjkhWZfsil3aXxHeRqN9rjOYQSLnuifPzWbPi+ci8lwWKzv3JGHpXwggMdSL9lyUz/xdTPQOIPp8qLEKn8sHL6L2Dre/ArvOzdbCF06h3KHfxC8IbNQmKbYXOeIaY37ZUXBJoYIujWUpa3vtFg5ve3oadN1e9wHPYJGmt6Pw9i/6ejifIDipbJ0EFbQGyiH0trXDZhVbZWErCFPDAQbwaZ7xEgHBc2r6tZ88EmT/R2Xw/7/j5Oncmmsgipj/Qqu1o0RiA96JhOVAaDcIlj1mDdioFMgjJbLQDPAppcKENKroJAf/664/24Dl3q+LXczByX59nODhlyfzNG7nt31JTA82u0TOT32dbnEXpGG36d7oiQB+C981x0Cya1zo/nSzB34qKujR+8rjJA==';const _IH='b16eecc6fa8edb6bbb08d3eb5274a40be390f942a5fc2a82513bcfa90a9e805b';let _src;

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
