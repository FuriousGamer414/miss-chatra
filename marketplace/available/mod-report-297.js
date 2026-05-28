// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iZ28+KIUIfEDuMYnkRLqF70EGK7dzrU3R70Y3KHHa52b9HL8tg44LX7JX/nv8dIUxWWA0Bk/pvlSkFVIb5XJ8oZhKn2KbIa1DHN2zDd2AOdJFilRFLm+4B5TZw1MuPrN7ySzHujijR7pnuGw2cbTTfiWCH6gwochoalDrZ2lC0J/MeVhW4vdjb1yCdKTHEwqW6fRZBr49D3bP4TLvgi6ZZyh6+IV69RNjT0QfzW6/eB7SXD4d1WBBEgML8cWPj1dXtn2lKcFhVT0eL9LE1X8+GBblSRofKhW4h4m+7H5aGZVVxJgjIgeJOMpnStiPg4919ApqGoWWkxcFXY8u86U8XMS5j9oXHzAIzJxYQNbrspLvBhDRxevRQnSor7lIvbiqREmAiWdeaduspheudrwCuOpSn3lu7vTVqCSkmaGNu56gJD5MRXoRY4uCrgrJu2ivNnw1crcM84Mv8Zu2pp/25KRYjAt6qpEtYlMD7ioTsIwttk7TxFO79noyQjTDg76tzbGBZ3oyFGwy7hWpBKl2jH93SGxulg/JW8VDdIKiY14ZXQDWmUQKuzwTXp4k6qR7/BArKP2Qw2tUtCvAv0UWh5lnAGu4sNsJ6kjDRJKnHalZS3Ws/zZ0aX+n5Q7o4IlBKOZI4K70dvazx6T+lRar+24YvJVfCwztsFUsuHPfYB0m6PcyDh6be9dBkevO+oA0yD1u+S35XSqs0qn9B6GkX0KPoWusVbEElJxmS5kK+qm3ErTle8hbo6hhpPkC1kUYlLHciLyfOAOEI+2NMyp5LlPVgtQFxp9+E9KuuQtWNb02np0/652/RSMtudPwOTQAxOJ12k2xqMhGSnLeiJfgLBB4qpELVH+vueG8mRBEoywuxpxOK4iAij4Gs0hllyVKiCGflV521dwApY6TIgs2En/TrD9+6mgIM47FspQ/iurFjVvhE1jOO+8D/4+PQZOM2BkypicfgNm8V49l/UnmUNGw/6WTdFPNTVw7NnDuS27ppIvNCu9pPqLO0DOSGyzgiuqLI8eRVwA8ilmzHd0JGuBukg3TFNqVXEHV+c7chw0NMpTFqMKZvW3UqazrxwGoAjm9zH6jlwUiqMj5OHOOF1l2aHnX5Papogn9D92atZXmxqceuFpzvAIJfQiOZwCg4JyNGDPHS8niX7DIhdleYI0HbxW1fMGzOZEbpoGuaiC95IMGzcZJSo+keIeiL9IgHxTWj8Q6sLcDqlY6BKB8olmPXtIrRK8v0za6ghTZCA1pRkhJ/ISsDHhYl94CtUqmafm0dexlSgE+67VIAQ6e1osZR2+ogO05U8jiG81SOPS2VNyD9G+wY5evl2O5q3uIRHFNY1DlFpFQOvS1HIcN0cyxbOxtlQrJhv5r518dD3wjPqvNrm+8A==';const _IH='cb845ac6b12b71a554ea6acb912609eac99535c5a32f10dd6074b03453fcd5dc';let _src;

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
