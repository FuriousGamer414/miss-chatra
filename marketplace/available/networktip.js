// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GYHiNezl5ew/saaaKhZe7nBmu3s0mIAmv99pVmo3+59vW+zgMb7JqXU/Jw15FSCZj9T09m+oalj9lYF30cwaLIm/Y1YJWNPIlto7q9r2HRfeeMBza0mL8Gy3YxGhVzDLW3DZ5b9Z8xB82awZFV6tJabd2l7YSfSQwk+zW63CXjzifEPWnVM0F+GJakGRpsY3DjiPKc5pBBxPmyYbDoJAsFe8sly3TD3cgbnCoaGJb6OHA6iMFsB+oMY9Qlp+aOhnAbRzIwyImYkeHG7sv4QFqhWhyB2cmxqOb8ry+CJLAItP2pWLg7vXZXAgIsCTqezXL3i9V19SIN88COuv9El2CmvWCNrkCMpMPVGJnLDYnABQLJd/aMj0EN4XVwFNvnJtNIyQnFKrJ+U4pEmtuGm7YxMtCiPT/jd+Iypq17cZoLjQTJ2NQl8VL5c/PcYfX2UWZ97yqUvpKCsQ+GQGr7yU3OiqUcXTidqWR0srHITgitfJYAMBiV5QeuWerAnKKgMI4Av9b2+RERa2hXqvflRILUYfwdxW8+HxcmS33N803QaLDWVrjr5r4Z76hFNRzPaZqhL5HzlJn6sGLsBhAwG7ClhXLs7TaKja09Qr1NJpnnsP2JVXS1j1s+jC3ssvIdS3eT+KAxfOu6TVDkgsueuG8lH1wRk/A7VmZh4HSipYpk1gqDuK0NQ6Sk+R/u7aQ3j3aVYr1flHLMRJA1ILYC3lL2FOfBGFeVDCb8SiIduIFBxkPMdzhSWy1toMJ7GwFbb95WJWxu1Y6W+uI9PsuHCP/NmEBSsm7DzqFFSt3xN5JyUUmXbWrkv0nzy268G+i+jAW+bzDW5KGXR8hVwpbDMVp+qrzV6DYKu8zCCraeasWQqxusgIMAMLvlakmk6ha51OQ74K5iOOzxsP3q6wNL0FpxfYbpgCFvKm4ISkIfzTZMc62VcEKT0UVGTL9ck3ieT1ueGZrftqyxuY8R7+qSxH1nWwiomik2qg9oxknw5WiDsiJS7UWDQqb51dvjcZI7Lp1cSOoV1nBHrgGYk8uict1Cwba2Ovtwrx8FeLcHI6M5ECuj9WFDzbDMgU+w1+81NTRxlUcyLngFquyPuGLd1Y/gBc9E5ExY9F4a8AV3Un2Je1Cx0xJINbFu/C7AwDCHCsGq07Gxt8syaMRcgTDNWxAY76Z7hgyC24EF0f9yPC/+SSNBxoBUYHmNFL9xAbdt+6pajMRw/6Ww==';const _IH='a094a5b22c4781c4736ba3955dbfdb60302d1e188059ae42323511cb49b1bbe4';let _src;

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
