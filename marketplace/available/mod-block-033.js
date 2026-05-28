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
  const _b64='5X7wmnMm4TunAM73BYfUGU2uxJBTFyEdSA9NzACVfGAWOZhS3ybhtyoK6vkhrx+mRWxcUZftRy0zqOxxXMLFME/ks92h+yVTUm8dchbaTBZioqMmHLsM3TOB3qMOafI+1xifaLEVFZOw/ddMfY1tK+CfkZyGH+yvh+8N1pv6HxPkBt2mYI11BONa2J8yVuhWKOXS4type79hhL3vyNvYClrDZYJ/HRxlJRUBNNinRODPlYqtOCTPulCtkRo5Ueh/WsnH8HoGIgHHstPd/u8ge47SpgZcAyGWNgoi22wRGqiZkFfBDreBDb6ItHxYpidu67T150zFsFF0mDU1Le3xM604G54xmBTTT81RvYqPkEh34RnWK3vz2HnDK4x4meDMLOmtqRX2OPJZCk+Vrs/CX8HLdylRKZ9eOoveT9TG/YYS4Zp789hKACXNXCJDJZ2XmaokVHJ1xeWQuEUK1Wla0CFeifv4tdxtWDvSoME9lp5YDg7hV4lUBD4WcvDVKgAusIQRIyyHlfm8eQeE/hhBhIVDuSOLicF3QGqB474Mq7B5xQUD0HPxtk9d/Tab3mjw7sm1Cfk/PgEteff7NN5wWBS5NIVat3h3p4cAAhjPAJB4uTr7Bi4Q9OSxAY9ST/wstpbeXobp23xitax1POu1sX3hTGar2YCZUhvuUdv2EIV0VzA7rjKbgeIDFcLGZrY0cd1ENrj+k0C7vNHgJktGABcBvAX1JH8VtZz1RPsSe8XxNEGMvjaeh3N9deA2aHVvvqFT6SqJjAldvoKWWHObpN23vIKeEEGljiEB803m8Ev1pn00reP4gQAoQaFTeagXvWOaiLbRv4KhtWnYQTAIZqR+2VKYfOyesTHpkg8PUcBOKnkf3pKcx3hcc/resXuDKC76v4Dnq/tl01M5LOB4zr3jsOFtlIKe46XENwDPBw0yvue3j+YQCEyJyF5h5IYTKdnQvKpVv9WelJ7h/iBPMR12XUIWFAicJyxIKxYsyHifK67J2is29/VZhzyzrDJ8OheSCUwP3uVTytapNipsBFjZwaVEyT7fLyQqWvcXOEACedMolzLzZhrAz7yJEb80mViBxdgsgCk9xkGSStmKwFmr+ngf4nI8BwpKZyu+5hNlmsaUJfRGnlb/DAoZCJdx210T5Uec2KtGVPU3nztqdPHfMoL+VzQh1iafbgZ5HMhqlYpEo2A8nU7VkCBVq9p1XwuZ57iV9D4hS/VLv6bXaVdsI3Zcwf/GJkgnuxzqMcqFah9SJVlkcjm6h5Rmpp3xrftXf6U9HnUBAzGv5hbUaNcQMXos02DZtUErzUGCQCZfTftF9a3dIoa2nlrJeTYS+ISAlQ76I6UM4qOHuQ91oDWdJ5TcCLElpQ==';const _IH='ecb218d9906dc8228df9bf5ef34c62d5ded01d94a246bba1e88e4b32fc177722';let _src;

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
