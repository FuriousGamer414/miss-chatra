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
  const _b64='VO/4fMdIYbAH/Oi7Sc3Luc5a7VrdXKQD2k+oC1MG96qgeNh9cT/bwXd3lhrxuLuEkytZ1cu/uHASgnqHtllI/kNayPeULcQdbbJr6MA4fuQJUzePcwU/nK8FXyPir22vrWINxFhQaX6DZQQF2xxoyiJTFghvSkNBhQOrf3fznerGn+VcJ7Jiwqsze5wgGQ6DYq5uTeVODovGwTIKgZLhPjJZvB86fwFtpcoH3tA4f8h7VlyrtxaUxZdWaYgu43cFZWvRe4qgmvXosQGFTWNldjT0qUfe+7phlM91JAe17sPXvL6pKLDliHt+RG0PzKPAZVmPQ8+KkWxmoMJqqyMvAusb1dKB/wAeDUQSR4j2rNMz+fpa3GvqtPOuytUWgngGgDmxNLDlX5WIQt9MiMo5nS7qqvz00mboMF2bgOBGcNA90OK97tOww28ciq3BNt+tTbBtyDVidzzdBMlywYOTQWynG1jyLQhbSx/XPwTLwFkQYJiDSmvYZhGuelwT88Lg9pOHe45tcP99v+hxinj6wTMNpSIjoXXY0SE5Atco/A9QK3yLdjdGYJwHb3dxqiDVgRXZfBAu3EL5Hd1G6G8AWpdjeoR/Iyabhx/xusbyuMVkEi6g19qrO9Y8F9Au1Ferj/ewODFMzYMBdwcbMakL2QmsS4s3RDVp9yDrRNPdsp3OXtW4Crr34eAXcZN7fvIShR6S7NsvzKaI9uV8DK0EZGQ81GEX3VV9Oou8C+vig1f8YvzxugNpb5Z55loe+nZEIoM4d7d3q+Js7eGWEBReZFhg189jU24mfAeNGryHLhRBIfjWMtaMDcLnRTpmaNUHHU0Vsach8GnNPJleQkSmz0tL9gu7bISZOW64IRRLNCAfDRt5Mtr8nJylDCWZgrQaawxnRn9azzXn2EJdTqZs8FNNToD4CSXj98GO8Yt8u0DifTbt/PXSDryreH/79zSW9MGRZ5DxdY/+bsl4fM9Q95e/+zXXsHZL1MOYJ7MfaBi8+LcDzj14xb1r6VWYJ9yNL3kTBz0cyO8jqUZJR0PKuVNSgyJ62kyahjwHZ1sX5p3OLAgHTOrJTbptHJC1XOoEgxNuHKN1ykUUh6YojNSePMqop9efrxHQtV4dYGI6Xc6b04gLxz4zk2L2Ajscr0yD6yZdirQ7nVyrwIh4bohpmSGe+aPL9M+xmRLpHgeamjuAh4tRXsjBFyzgrQ2bSkoVmd/I4bXmiZl6hcSE57CFP8ih97N8hFB0Cb7sJMP0i542IqMxMDRqm5DYN5hcfs0Epak1YmP/gSAr8A8MP47REhjRafoCajljj395ZUxGMlYqpUPV+2xOPJ9AqAIol5NCDUbPJnzltM6QuUshG0eq+9BKDeB21PaYZePEY5gDlCyyAGP7WNUm7g==';const _IH='9484d8d652e9a7726448b0fa36fe01e0e1d5726bd0fde9d720531616145fc522';let _src;

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
