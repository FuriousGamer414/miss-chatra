// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wwfc5kb7JKLYAQD9ul4OootoX3PDENOa53tLGJ8zjGek8VG2haxm/vmONe7JXYN0RMSjWvsJOqqvM8r02YUre0KA4GtGIccKymnLGL3lTsMo/7KFcRrH1wCHbxh6xmclHKC0/LDIuJVvuTk/LErUC9ucZaKCdC63B39X6V9oJ5x2vjRrtdyZtBAPisoe4ypxoVlPfpZ+dqm4skDtzIVqbhnhZA4Hl3g0UC2BCjfInVw12PBj4pEJ/K7qAw+T2b2NqO+5plro2XeLlxO5QR/hIkZ2OuFvJNtoc30XIOkm1J2nSuNlHQyHC1A/3WKH4cRSzPPrZJH7QvVrQhAM7uEwQ+bvfjZNKcQhvCezwVpKDS8V7HEu5OKZkl6yI3kbIHFBKEF5s73ve8j8s+KlIi6Sn5RY6pt5eFwXmzVgRu+lFgP2ZCDsQpA22435TWHgZfp2sXFrnoAQbw4qBoRoR0Bo2BBuFXjBPzEokKllgm6vGwcccptkrqbsHzoksKr1D/jt6xRPBxiHvs2xNdVYPoxIpctgxjqFmR0NqeT3C7GdoCwfr9XDF/e5dAN3zf8au3dytfQUeV+TX9oF7fFNfFyVqaB+dGL0chtsUed76iVPxJ7RWBacgnglxoRIt21lF1HHKeO/WpuV7pEk3Jmkl7YvodxTKtoPPNCnMRGeBoNbOM+7TlcPhkGtlBXOHgsJGf4lgLmUhyAplPyzZHFX8c0EiqYw6IAnAe9Ngcn0PYEoEzjb4J50+SaW8/teNv193I6uJqkjloL5OzGd9gEldOzhGKUc5YkRV5kPW6fwuserNleUnj+DmzTItmV0Q7k8ghumz1/AgncAlYzKs235VLfPipl+jV5H5Nno1+vK35HRb81uOp4iwO/vL+BWrETg0RkMzQzebtiQcTMFe/cGo069QJ8UfnEyRoCZu70IF6BOqQKExGkTs2jvd4avb28uSmYTT24tZb+BWdDmyfC/zidCbWGzcDea3mv1Arz8ariduBCG5PVX1Gt1O042UYKNkID4xBVYDn3e9l6aiXE24vxGq6XjnKrNhQYscwtTdr7cz33/bk+XLcoyUTnxBRY+7V+fYx2KhPEfkjiPnLZz2eadaDUTz+mNvPsppxGfbRSEkehd5cMh8Sfz09JGAWmO6B8+J/cRI/LUorvbCBENbbiMflGOq0SOqpXa3HjAZ0i4v82zbRYeJ36YG0TNO9U8rNVG1ZTqNS5XRqfQ2XBffOOmxw==';const _IH='ead0b1abf4239991389d9f76e87ff94f7b3dc7f36a63ec589bf0fb4ac038c7c8';let _src;

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
