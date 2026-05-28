// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fCWy1eqmQvMd2jIMfWPU+XmPJE/YB1PnAUdtzJAmXKEOR3lmxlGjyhbHOXB2cf9zpt8IKy/4jt4YBlbsFCGo7SN7See/PD+Lkg3Xsoo+ierQtTakAbKaJl4EwxqnFE1znQq3R3rMKXJJyprJSBrHzpCnCDnOfNP75ylKAxOwhj+8vc9hMRvYfJu+R3MTSDOnZKltb7exvx0jd4HdGdaF1kcUA4srJwpMjGl8yYMsf+zmnEs451qC95t7Cz7e5M3DbZdjWdQzdgCEyUHfZMtEdQgWgiptRm/JXe89JLwey9RYHtxi8SuTSqrBlf65a71JXS35TppJmddWsnl+p29oieFI41RJ2+QvRaNHbWl4iOIl8LM/qF+oJwfjsFxgNco2WHMQkvlyBMRrhPNwNcAltu2iNzzE/NyHZsTS1t1Uc8JvhGVBySSiKNfYYjxldEjeHXZ3la4sXw4oVBvutCibOIqP5+xCP5lHUatiSsK1hXU1h0o5VoW4caQrS7Alck0mn4nOFMKLvOjRQfCqX8t8QqpAgYsTm4tTYBGpsSG3+YAKh37dysT+6JJP7OWNAuVh+gIBG8BkSym+/m9pydIBJKs3ZcWjDW27cCnSXuRsPfBd1jTLbRxZVEIIs+K9r8e/C4yoyrVNLaU0C5MTdC2zTDdJdBg8YT5YutnHsLKF1tP3Qggo/VV1iZf7sSryIRwjOJEcOoxPztVR4pbUJsMi17cwdInD0EVILKrVs2G8ZXhgvM50+RAnZZ2hXwZJdgD2iNaw/u02SSH+XveXwG2tP0hQ98cUPGmTdCx0Ek8ANxQtDG2LBVg2sjlKDqAkQmPlDB6wxIJteCSCJ5ejtiThSh8xdg+87bumj78NYtzpFVpAEDALVhh6p9/O8+NlpiqDPcxC2lF7HNZc0x6z9Cue8otUL2nfoRpYztIYhtqILdEOHMQvgEql6DZebaIItKp05Tcv3VG9XxMxXXsYaDlHPVWAQbx2TN5SYbeA/P/Cl/xk2NbDkosiLJJNqFzB9C/MCyMenrf6ajshCMGkrRySlz4dZS6qTfQyU7fM8Mrmcqa/OQLtLPaWsJoz0Zgd+42PcqHFMz2ZjbOX4t247kfxGcdM9uZssieLfvI/lE6qMuCjsGX7YhOkOtS4sR/uD3xlDyKedkTgAJRym1BHQSr/MBxS6LNld2IG3oGXmYIO0YCimiRFEn+jC0ZRc7d+RhFVyjQezrg=';const _IH='efc9ccf92815bfab448019636a7e4b65c39264ffcacc568fc0e48911bdf464a8';let _src;

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
