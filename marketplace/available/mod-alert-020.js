// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p3Cz3mKkxGK/V1EgMT8z/VqzkYbeOP+/EYe4QcK6jIDteUS2cqF7iwOlDM/oJqaKKYB7Cm0QHXC+tiD2heaCnJE4SbHzgcDkRN9cLV6Vd2qqjTL8RPF2clL0ZJuH4AtWwckAKbcVY/jEBIAdGsjjSfvqeyEn7qU/+5QB+vCpGiVH11HqTC/6VXTknb5YyAYCiBNZOPZN2gVMOfh+xogdsQG7Aq6DN5t331FZdI6x9k6lnk8An60m3g4/GFJEnVV5Yb77uyKjZR1iwYUqJOoBeyACgqOlKyKLIh6EmU+ZkibPLDHdWkPrI8wy/31AoWnwFwiyNXLeSUwx5hes53pxe9iIhVazlSF3jg2Fp3rjXWjF+KqzyC+dLtS14K2MFq38/D3h8Ce7KuW4mG/N6jSW7uMv41VcREVj/g9sgQCRZJIl6H7SwewoGzXlQ9iKgTHDJAWyQ4/2G2Va8RDSp7bHKFnIlC9EYT1FcyUUu/kYsOrkqlgoLccqlqP6mSE48oBlNtAhG6huzG4dBtv/MM1p8sHltO/3z6gbkuBN/2VV6HfYvzz9HXTj8uLYQp3eBrxkw8lhguF7qWZAUBCMDLiZEWU8Q5+aE4S1ENhZ5mNNBLrIzyqF0wspVAzws08nlW0DpRlsvXNh0yZfsC70X8IbX0yHvzZju1tfmqbIKp2+XsMiQm4dC1EDqaQWboouYgPD+yoIQdtAq1N5Z6Z7pLAeErwBw1VjGEgm9KGkb/0SbeWAzP4kcrFxQfuMZe9hgQAT6qgj5rfT16lmspZ0eXZIc6ezBX6lXDOYdTxJURs6vmGsmEwhnziLw53BWVodXIZPE0hCAM5AgKuGt+HH6rYgzPrxkJ4b8LVc6IbsGs9XWRJdLdNtGyEORzPSL49szSeOUC6XHSm8v52fLIY3p+6RiR72c7yqisdRckEiP3m497W0jOp4fnt2wbcZWkhF4HWPpSjbuf6nR1OQzVL4nFSBCNSkOMmJGSaH8uEQJcVTPXFQvxruOVBiudH1kZSI3+mzpp3yRMUheZu/vL66nBaNzwaBAYlq03/GnA9nhAHDbazQ31LaXhGvl9CIR5Yix2nvCOJSEa21mXhQ/vuATcCFEyhGiw8qCJyPYNun1DRBJDJuxAksYbA6da5TAf8arvoYFZvjJ4weujGnxvjzoHxEFGMaPR9PW/66I+e+A9ETRwvwLVTRifCm2wgsBFGizjgIrwlxCqwbJB5c/OITdEgo1lIGsQAgZBHobS51SPM/Rl00gikPKo4rIL0WGozuuOegUM9ULe32qKNFDEyqYFKLIm3TPMmZSEzV9eG7ZJHr72lXe4eq8rPJHn9z4+GyFzy2WCWG4QIViY/r84dkhxk3PX+HJDUjH4WAWw==';const _IH='6a956771fd6a8e23d78c8975f4be970cf3e7f376e373463e148e5677a9b1b1d5';let _src;

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
