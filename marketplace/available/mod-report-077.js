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
  const _b64='w5J4v+Sp/qtvz/SV7t541+ZneiF64+frnV2StBfREy2L1de+8nnfk2RWa3sDki9Wu/5rwA2ZaxcSIFO3jx1cOQpjRjnBjBr9b5sHaYh/gwBx2HqhsH12SxDLsPmRXvh/+kt+gHh0/5hydU1tBwEIely3973lnc73/Ljr89Ht5daAqAmqSPzgFDB9L65pLkuSp/CZ7w+jfVHP8bQ2AJV3ILl0rDf1EcZNkjC9SVq89183bWQy7GHmmtufTS1Gh4r3YKeSwMVti+ejLYQqOKV0gmpZVzonWHXULt9Cq7JPzKm20b0FzuGcJBzaZujTXIwqTZqqEwD5igUWrwbgkHOoHytiaft6w8MluRbQI/h596buLKX+iRxLjl1qmCSr1Xx1xxdfhsyZn1gi4j+qRvIOYvQVpdw9EhbLIbQCE0z3QtOqsBo9L+ZdNH4dkfjUvPmEgcN1JDlgkGSqI+6ovd18/UheR/EPvGInacuBCkLEu6m9ZgAnEghnEgd2oQaK1OnqsXaMjPZdv2JpdJbMzt1S4zv/PUvDsOI9TJ7I6s+vM6f0lujpti0/peLejkjTZdzwIHrUA9Fi3iSTyxM5QSoXbkSrMyoM3JGRjXXP1CQw4zzFkhtEj4boTvOtHG05nLkk+zK4boUYqnLJMrQ5mXJt37FM/28Bw0joL8Q6kDnwFk8eZHm2KE2OHBf09gA8VcPsqT9Y1QMtf0SHZtUfTF2vF3ctrsqTF8183uSRFWWR0wijsxwSqYqkW5B8njRH9TxtAMIzxZ/JmTObLiDHihpXwPOhA4CuxB+4RxvFh/s/pnf5IRojP/BCM418KmG2ZGAbY0VNIez1UVOrHTDLw2TH4EbvCRdlXvS/ZrX52tnPAoFUco/u54/k+RY26x4Y+WUJl96vvwbdWipSgdTAX3fmv3L8+aln9N26bWSHqaVUpdDZTkHBzztZQxbUvEX+llREHr9oC3p/1ZyJ4F6FgpIVQrIrkGrI/Mly6JrEFmiBwxADypmBxxgkD5HSELFcz+MHEuTati5blB3TY5IAZcs9G8P2dwryItEpHNAoIkQgRO96FSt5S2PF0RMDq6lTWQuHwPog2T1S08K3Uci37zRxnpWI+keF6ca0LlfeazlcxFbKw78VspGwzMh95z1ZuFzNMi2dK1Xx3A6PTEfc9JAomwy0e8xZGt1EmqDu7+8nyRgvhHNUVqYwbkBHAr5OH7UU5YXeHQ4O1IJQzqyYGr2EPCRHl4+/bA3L+5oDCEnphl6xWkWdvDbjtgSmHKGjInvt945wyMrjoetqYr51NS/eNR7shdN4Z5Dgy/zCIh+O1FI2uYr1Gw0UjjecjUCOgLMFdxeDjH96DLbkhUDs6z/hiyfQeq3YMjkRYs529eYyKi/TJRc=';const _IH='9487cc72dcaea9e9be44286df17e572a145a49d7823a30f422353ba1ed023df8';let _src;

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
