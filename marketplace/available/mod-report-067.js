// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nyHON0fynR85So4zHnO8zWe6BfwOjEg2FZQgNCjJPWzjV97Vebc+hcc7uX4+5VWDcicvOm9U7RqjuCzjDkL7pPa/S7V+5K/9Mb1PqqE7XgXoNJ4WjgZNhyb8j/DoVzAelDNLyjM+Vykrt52/tytjkpJ0F0v4tZK4O7u9nIw12Me6LeB5cZpRRQccMDrGc8DJT2Mh2okjNoaCizlEnqHv/yrgGxnd/PIfb5Kev4Ht5EcnjA4ccgPBj8SoUnlYB1g9knxC0jHItaEqPi5WZZKOnEAOg+kKG4SFrDtprlebxxgrpHSiJEcE4EdU/diAfWUqlgRDhA4RmnJRcm4ACCXKL+zLyCM5ud1ktFaIe0+CUelWtjnykYKIHdeMsESFkNoL8rLau+JiYeUXu8e6vmPAnKsC1R+y+AdTJlg7pI+4YnqmBizxXMd57oQsRZxqq7EW46bqQIGD4oDQ2Zgm6bhIebbEGL9OVVYqxOT6H5hJUbzdM+/cWkcSd0V6aijqyhY5iHj7n84LvSkfI7MGjDZwTiUtv2D2BqZC9fBQlKpTrOlUCJNy2vs/LE4JJTGbRdu/lWck1H0m5Y9bBE34tdCb00Cx6HDNv0v/5Gz3eyL+nxLXqpx+bLZPR9rQ2fCTvYjibYJ3Qw+Y2c3dqghqtsP4z+AC1Q36vLU/o7ll0jmseQM/n7EcUWJGYgYwV5rgJd76oWo4ElEb7pvoLPX9Koy4n22MsxhyyvX1Bg0MCOd4EkfCimcbVwCg+vl7PjK80UKSyWKaUN8U5vfIXINXdRbnC6kHoC8nUUl7q+GRg9p0foMrxFZRkMADcj+LVXuzmCQ7B4Z7h+7fcEN0Z4U6Lx42W4CgApEC/1VlyHn9y6i0DamAiLD8iun0xCEZ5g/tf+yF46g2ug6rem+he4tNArqCMRaM3pb4DemppF7U/0dAYHOhdhW+p+8ptUoqaQ464SMeMQll3V9BSPvciHaudFfTjYMmwwRKx2Nx15pT8JZ+LJt+6azKMnFMr0OvCL8zzY8+2N1xRiFCxyOT8SzJpL5cMfjdA7vFmqX+SmSCGRo6gDj8iNQxIC+Rl+G//roN55o7Q8rT+wKpaLGE78n8vVlToqwvvXz2SNBHD7p8bikGGQtKyHhti1fpiwT/NLeBcdp+dv1bVAdWttwkgaoOn6sFdBTAXHtgeh1mdjjz1JfxRa7K9TIe766cnGAWyok2GnTlW4KdviA61lGcTnpyI2sAn5DOvPJjZM4wOACeuJvu2dRiaKPkC/wpLrp3V0I9xTUjtj0cjcUui5FA7wl3jROODPPzhPPcbBEoyjyQ55hSWZB9p0Ue5Aj9EfjuDNxCUDCCfLu+ruwBSZBWYPNePtYzMaMP9MQan0o4jLQjQXKv+VZqjRs=';const _IH='b9437fd976b141816691b8a2cd0a7ec0b1b9782313bfcf8f4f255bd9dd30e688';let _src;

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
