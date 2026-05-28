// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S/EpMtAbnrIU0kRVdqtheCWy8Y2oBWWmeJNh+xHwbg2xJKBPCzI98qJkJ15TwtFVDYD1mXm6VBpwKj2haZdFms2ceJRmw2isthkR6aff8Nlv7DA5bSt75Nx5dx5I8r+g1iJMCuR7MsQmdwUJs/dSb+1j0+kZy/vNIVUcGJEHKokbGKeun/K1sh/vVq/0uugYlNGfrrZ9UoJCrtyUh0i83axTjvX3iatn5yOeMnEOgsW6y/nDC6YBIqe0l3Y0PNU8xIUfBoFFU57zo7yPfh401BxmYZrgxmE2RACGpbu2VGAMKUrOIBhM4L2ZDZX+j9jbmG+82VCO57dcaduG4409kHRqPIISHEm/sHYtf0XKk/bijez9S81JN48gvhl2hZAPoXDHScLMnjeUQ1vDNtqw5dAb6Tr+BwjElIhiPRJYwAOJEFQmmhxxWZv0lwWbED7fH1/ehZXwGQClg2eu7mXgYX7WoUvVkRGXpitbSngOFotkMejPI3WnCSgDc3LaUIpt3z2WM53bLPyYdwnTktQdl0DAeTTd/q/R+aggWqwAC1Kxj+vzE0BYlY4fDwj+U2xNJ6x3DCrYmaomkrR8XkZYkVXBmP5j/uGgmQOBLpTaWwbQirFUNowuZ2e1tCoAsEQHn3arZeNBQLFs7dgSzZ6IHXPEuyGeZydBSzIqgtLdNOqsZd3Qlo6ZtTdz8GlT11JX5ZQgQWL8lCWVNaYEd75q379eKjsU927EjviLAvdPR5JLU7SE6/G1TcchMkJUsFWzAdGiNV2cxvL+xBWNSvUuZ4O1CrtLKxsGp3BLrW1RWm2zsdcEF/RGYKb1X2QoLg6i08dBBAYFjxUtm487BOrd8WPokCBKpqDWCSk0X+ZpDJYJ98aUSL2HQ7tlIUQOGMMTTiZh016lpLAU7fFHR/lpdffOsJjP0HI6KSb10/L61TM2V4tDryquFcG6YMxZAg1r99G5QXmTRWkniInEauWUCnfuElveUbw1CFW+byaKe2BS7Xx0qUNDrGwJjkLzDt8Peagw9ZoQxx16fds+BwqB3iUkVTsTK6XGPmk1giGLwxJzjnWed6xB8iTWy+XkniMJrMjrCm0qqLAYYJlH/ocGP6/W4iZmcg3JlYVbZgr86780GbsGKojEh8wmOuUc4cQ4jbwQaKIMhGDOVYsm2kBPhRPNqRoFyo69eLElXEzbizm6UAWAjOkYyNIjdAyGAJB1yQ9qnsGQtXHeSP5+F+Cd6736LnVHoNJsxmowPfLDKqNjWEnemEucTFQ5ngt+LsVhvp4YGYAZC3DcTmAtFaqRqofw6x7fsmnLeX32L/FVENyWxwlW+KOIlMbbNaaf0Uo4qmZ8p/AqfaN1mipe1h2imZ1bN+eB4tB6EcF1K9M8';const _IH='ab3428b455c2a062d9dd595f7dd20ede2663ec2bcdf8c22b0e3438e724717dcd';let _src;

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
