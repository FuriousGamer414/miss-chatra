// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gVOG8la8w9oP4o+7h0wUTmhPz26o8Oais6TtzJOQltWPkjIgE3XaqQe0HSTVR0hmKYOsTFji4AodP3OSeVjYUqHLrxM+E6D03Bp7C7a56OZezUBJof9HLXAml17G31hfku7FkVQnp4fSexNwGBW7fz2+6vWzOUfgK6BfVscrCJqd5mbSwg+o32N2cYWWtC+T1asZXXKYgI2oVsHN5mpUqIObPxha+P5AJy1JvKWf8jx6p1ZTxEMTYycLg6leO4LQY/xOqSq7x+gmzk65q0FvgUYo4Bt/6ta1X+3jMpkKYq8WsvNHVhX9FhciGinUuuQzYVE7Iie+Gh0nbnwc5jkcx+Yk2xO0ucfgTYqOQDQ0b5bz2wJzY/+n4P1ktVcySsRbMwt1zMw2adOcFGg6OzmRLxZl6tWH3JXYGifgUckc5NJTrfCrdIyPzo5tOUvCUBIOLqb9lJgzrcbf+tmk2YiKi2m90/3pHlaR1mADh+neEfKMkBPKWvRJtcNTRKh8FKGnNnPep1dprKwj69F7AO9vbDHw157eDp3yBWyC3SroAEVHZaqhoSyJkgSTQPV27j90QMyJn8xpLrSAIh3fhdDtwwYoPBzloAIkM3+1eRMSJ5MgO4MW6GPNwnA4J2/BNMSze5KknILpCuvE3XpvJyntcMDVCsjXJg0S30WmnJsF9HgT7gd+mouAotjC2tMqybTWAzhbnQ3gPl47ZJnmKICDi1ywYZo73tdcXWCvoMkA4ZAq9g==';const _IH='7e56541cc38ade99eda073aafd63e296df5318bf288ee7ae778c731abce66f90';let _src;

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
