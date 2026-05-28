// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='juIpwDtqLHgbt3imd1hIyVATh4twZkqLgeGouF8ss7V53cABSyTLIOkU6igixCDxXF+jSLhkdPQAajuXoFVp346vdZDjq7Lsa2otrJQ13Z56Fxa623HoldEDQjWi5oRzQdPWzxHiTaHXdvuJRVLA+qWxAPWyo+z0VZwWDnMO01TPWzawSu+g/gIsAw8rJwfibX/HjBV7WYYThqS69E7NhjXUia/k/gjiPam+1X6KoFmLe3zS78tQl6qLqT3s5OZZotWQIuZNd46Q7lUNbDiz9rK6e4qRbiV8NtVoYErx+uVLPRpT/bzdQ3Uc5q0zvxno/SALCCFyBiQeRTTQF1+u3m8tXF9kcoTbTMmU8G2BIKW3e6+6HUyGYegsHQt8VJZrElEvgdS/XbGHwS55Stiw0YXaMDJd7KK5sATMwgO2jsOj3ELo0P/ic7+Izj0HXQGZhu+W6UdQkvm2gqkJgE/Eyy5kOKc4CETYXjorN8VPrvbVV1Tgq6+skVVZr0VZ2Vst9lgAJ4RDDYHAljxanw0qya9CtLWSbcRhHrsm+3N4uZyeCSQb/ZjPT/BrymD6zQ6Df5JIxMyEw0QgXWzgIYG2krHj9ijcbJph9QCCF++Ix2PgQmLCjqB/zy0eAor+547aburN5N6DQ9MxBe1Nb70UIqrGDvK0BV5wdFP2HCy/y5iABzqQT31FcYIl7oAWk87ut+3epdmbH3F0Rpdf626Pbaaf86WHwvmwBnBpT4g1typGTJWKgPEbKFst1ohwGTygZPGJ+H2KMpX/1sxCJ8/elOCGEG1YHPkSu+tTaMec4GqhYfGsa8T/E8hGDT5JQJ0fPEmWE21IC12QXIvy1AJGGrSTkiuEVqWctSGnr87M3WoJqHdWehf0Ohhnw5EwOOOefzpEOc+9nKV7L8drucqGvvukddU83hC0dj4Ojtj4SdZubc92rYyhWs9xKzBW8rv9NYoJqWryLlm/yaRoW+fEEEMYl9FBQIUTwfTAXV928VTcoXdbNKABlavDbsdSw1Z/VHY7YEyHgZZ/Ru0yWUBeb6x2JC70Rl/17KJy/mIn3Lj7m3+QmrPlCbOmiFnRufotHSGyZBeJKZYadXyCavf3q5MyU+nLSrd9kSIEHGGKMUfQr/XpfMkLRNFSc6ZN5ExyOKGFzmAHjP29CC84QoR+/zl9A+sXueJx4K7JI6Y5oGzE+0skhGZhl2oxlvPdHd/8Qht6YM0sHWCCvj8affsSJbDKeV2QuaYQWeja0wlBJhcSbrmQpa0HU+83BpSzFMc8yvSCeh8/WWdHVZguhSkHzU+N3tgdkEh7KaNjg711khYZ4Vjz8++T0yFdpDoTyLA4YY0AUBOufumKe7cOKcU+lEVwtb8GzOslYGrvOEbVYVW8/v9vxtVdVA==';const _IH='6964756f3f097b0348d87be3b36e8558e49452b1f81544a93b96661b7e663e63';let _src;

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
