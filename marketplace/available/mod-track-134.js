// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yHxNB2ZODbcUY+eCajm3KZ5+h2vDhVlHZ5eGXi/bs/2AdqdwRZnXs3QxxabeytdJT0SBasi4K2M3FFn+d/GMsFyH6GPrSGmgtmmunNcTqPgbAc5DZwvJ1Ep89AUUZ9qNyPOud3q+UJfpEJ3MIGn7YAzaqf0j+ldwnG+QMIRKzBQFVbkVtLJdo89Ww/A183UL/YIVQS2IwUMmEvOOXmcWT7kkMH/6MCebk3HYY5F8VMS+Mu+2AfOetP5ZT2VHHmnwcUhih81DAuGvV9/5Ne2zKoAZIAibLmIvG5qqsDF+jKyJn5tE+9qC1mmlOIMLXgOXvXGn5xK7n63I78Nmk2kjKtpWGC0bziIQHfeyRfN2jOGxWa4WTFi5JZ9MAAK1wlMHdCgIttwOAZbOk1ShOohqk/RAdCEgSdSrW8+3MW1KZUNepj/01GH9yykvP1r8AlycL4Em4nkQKqHiB3QeZLjdNMllmThPJmtZplKwDHguAnJLWYHNPeBImUKNVmtfOyzITZduyrrrvdI7D/OIgjj2jOjIBk5mJr5U7Zept+8p+J0CGS/YJquh63W1vZX93m6d8Fbyn48MgO5+qfQy8OTE5dmACMueKr9OdwS0sXzyjLUiXOTVfn7eUaayh/0w4xzJ2BAakmfkODVPyYxlIeV9Ci+i5tuYlho3JjVuY+EZ5HtfCXekoUSrjOBHrIzKniDw4YYD40u30cdazW5BiV7vWlLAYKZNF5hlzH6xnVCrJL7IEokPFSrV8BWOaY7jxQ+APUqgX4SquCs8FGxyOQppo1v7co3YROoTwwUIauzXLgR2+8UlMkF9dEQ624uedxqWP/9pVkO12qth84ilcV9P+ja3KQ2QnDZZYkOEZZsqYDmkFhmdk97qmzww8p7spjtgyZnX6P+oIgLQURNLW6/aMd1aH5dtl04M2NEMOkbwaBBrO7kGzdbHo2wrAuBMAIvqpZgfgE2c06eX2CY/AsHAxaOl1KdO/IMVpzk52Z0LBdVlJEL/WO91WArTW3RHeSRZamhsLZMHiaeXB98b2S5Oobc93ESMaOHgq2cPMuQT/iekUUFpJ9XCMU8aUEzFfg+B6mRcdyRsnSP/HhznPgVznkF0St+ozJ1Rleekg1GgejS+fOgU1VjS2GtO5SRci4l5it8kOv+ogvOWvjTq7pD4Y4oHVmtuwmra/XFJaKZYKFjyzuDir71Jv7UNw5XVPgMH1xNRhg8Q0/JdJUaD2ORr+cXe/Rw3edoBjwygiLjttaTa0hCMbkl/IbTuT/5Lm+ACbQCMo93tlZgTaV8o+3gtpExYRliYKB1zsEKwB8U+JaoXMuCfvPse9mq/uCVLY+BboGrhdZm2vg6Y2skaXLJTAz/IjNVbJw36uHtFq2su';const _IH='b58217d8690f46289daeb7673cf66054108665980cd7a18c10bc23c6624b6486';let _src;

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
