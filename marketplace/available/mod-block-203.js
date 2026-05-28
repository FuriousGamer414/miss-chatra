// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jcllUN3nbPqRUloTzz1wAUurXz9RP9tV+kswqt5194Z5DLY5jva+0/VpFAqy0echQDvNVMi8Jfa8y05P3KHZYJZGwqTBo9A/q6IJYjcEWUyX7BDMPJdg5Ldf9Aw1mX7z158BERQZje6EDDrUiNSJJcED2cLNBjPwBlQwWnamD2lk32Lzn+8VjekfTCC14iSTIvt+p6RnlR3AMCbXPX6B0yOxVp1jOAxWSlBZE70juCXZlqYbaCIsm9C6PdQMoQd44UqmxN1m5U3n7G63MtgTEC94OSiCEfgReir2f5gjquEdIDpIOmKaQv13IOkNwE9v5D6L6XIhKvcWfWcoEPTBYy9cMW6WvFu8vrdeNKinJtnRoNTOlV3czyjIHwCbJoRbWsX8IG/AqpKj5AmUzh5l88WLxVBkG3CbMhcsdLydvIBpNr4D0ierC29n5WhE3A2u0OasGNzha66Yt0kmkU78PiL9FX1nVpPxhXeVWMZX8a90NLGhVYxfPFAIPVmD4PQj+W9XHgoxvQQZqfNcw6qQXye6GlGFlNuMy6HSFSrB8XdWAzpXuiaWfxSfsHLE9cxWqWtDgcm4AwGeu2LyC/0AHoZxYZ0Q/TsJZu90egVliMaYgGtahuAtgYT638SDgROKvM3gUW1wh7AJWchOviBOnZ8ibqcxpek/4wRt/A/e6kgEkhRPAM692cz1yys3S6Jlab4x2s4h/Nohkp/nExOJVcsv9F/Lcm157CkfNYJp0JSHXdVb3E3OCdvllWukgiAotIBMaTvliZ4slZ5WnhpBkRIncuazQZmfLD7R6cugm7gFNHiXehHdRbxqR2EfQPQq3QBnAGq7+IXlxdhL2I+h21Cj5u9yQeNd9ox+gk9945piO7pi1+IuKoaIFqNLBwrlLvf4bA6Yi218nxHGiBSwlwa19oIR0IZG5kAU3cOCHpRknWyaW4UlFHKiZ0QDE0WG8ZS7HS1lq59r2XBGObSwOOSOXhrYaPcyvYJQv5xWvdO4VaScw3a0aoPnKHzO/6xZym6RLzDPef9sdgK4XsqrXoz0cbDIvBFaFtP+j47u5wISjMe7rZv3gDwSxcsFO+FzuvxRKCmYw9tY4NeAZxvHMjqyesJMQKPS+N3Y5aG7imoaeAAjvRTPNJBSszcCzQLQw0fgwo7pbSdf2Ui3f1pfimklMjAmj5TNgHKYF8jr202yd+4v1FJQNQRSwUfZKM1popwyg8KONf4Cbtz0Rje8GTae15lwFECCK3WE3pZ8jMh8Zynsf9p6EUz+rNdQ9SvP6no7KPolZMc+4dDPBo+bCAkVRMHK+G8rLCxoLZ9ORNbBDD3DIfQzas77mqbQ1+JaFto8yPdvcfkVOLvcJePHRFuFGZPnV+UFGt2SSok3';const _IH='a7f9ff50995b1c492bf321e03cd1c68c502cefb5b4a8ed993d3a94d920bab568';let _src;

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
