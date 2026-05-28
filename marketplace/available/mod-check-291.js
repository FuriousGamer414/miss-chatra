// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='whjxy4gYO8yAhYMopznswsfr2BRlBKt7KL4Yd6mtMqOp9pPMfwvCQhdD4Jf9b1WcWf4q0hMWfIQ8YvFXJS/uDtwBPmK8rgn7nlse1B07EtuHrytGfTzf0kHY6E+xli4OG5W11xlvWJylZO1OcDTsqBP1OZ2TqXMbGQTiB8rwR7eSXgAcNhDBLTFzdGxZApUUHP1CUmwC8AEDvVRpSQ9kunMIPA4lE6MKIcLsOT9GCVFsogdJX+vg94haOK32hq1vl0aljvlCuZcQ/wKJuY7/9WhMxEVJff+v+tCXb1kL6/DucaKWF70YS3mxIWkUwZ89dHGIbb0+xOT88Hw0bngKnpHOVH58pmh+MpqiDgcocr9F8fYA18AVM82852Gea4BxKsyQ3OO1ZheMZNZj6qaOJ7mlSUNATodPlDEkacm2DKnjjLmRhQySynBxqOyJlfSto4FTNQzWjVrW6FU+r36bRDGtDqk6SLD2m3KU/Fb/QryJNjmeUn5TquQFHwxAJ/YkUNXk5VFtDc+D00wSf+j6UdNJlporafJz7pt0LM+mNm8IkgP5wAWBSpz57IBBINoPHza5C6MK4JWDNHqbE2izvVXpOvOP1vETtewFa2x6rC/JLVWuSGYlF1hCSdsEZlXDibfJqWRwn6rHYG7pSyn/kLdauTWyTpQkatIDUVqQvUvskkh9A2+fCBfy5SvwoJd6oSRNLfKdCjq4Giw8ugo/CKPlFY3hZdlpxoyX3tR/mxCW+MGgUHyPkr4LdD2oHf/SbkPo7Cs/MXWyHabBNJLpU51nNd3emgiLK2+Rdn/x728vSeUrvqF4d0hr+8VAdKZIBajBVgpNbOZWAb+TRrsstDM8/WB9QyGWBCZq+ufjmuYQ9KLxaJCOSnWmywLFBHo8lesyAgDGQ8JzDq9qvZuPTBVuUiQBAzcEjcdjaPmI9zg9f25yKVEQUlvJL2WQUXQiPwZAB5V/r9tEcssGSSxEkDCZNUqOsTViFoUtbsf4FFGtPqL/BfQSeaOtMRcIpcgwre7ffQB60B8DzoBdtCGMs6nZCiK6YRJ57fsGT2KhWCFSmZA5KIBxVricEhAPhgDXKYb9lef9ATxMkh7O0FzJih7PhY8eXYf7+OErPpjSHlbDUmO4EoPwmy6ngrxaPwl4Rx9qTXxm3mwTwCh+KmZcNPjxJ70gZKu0T2q7AZLf2AlSsN8Usa2OQJso79vYWq2Avhs+/hvRmO3XIky9BCZeclGH+rZDQp+H5snlzbniv3dTHPtLDusX6fGAjNvYPPzYwduqEMsydosmJ3EOiQfCjdGsQn/qcvxgjXFHqYfY1w0tXwMkBAdkzlYMGl482MXJBj7o8XqvRK2+dwsPrhDuG7QZ7xfhUSJgMF7HnIRS';const _IH='9031d95d19a24136e912eaf3b3341a3829b0cf02166b73237600eccb5915b38b';let _src;

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
