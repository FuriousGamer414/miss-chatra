// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4wXlR33gxOcsvCBwGHNOG3Pg2ac0ehO9CvPY9LlgU17tD6pjBdcfZP57G9bpkT2BN4ET7nrkrjmtwmFXGav5+xsP+369LE3dwYJbmC51rbFP5A/0Q5JjqwaGqNliqdU/Pdj4OhLlXlzUM8+lr4129j72wX8fiDdJ+J0diaWkeE+Wg8lIM7CbRWn5SF6MiSbuwNGxFSCcePw7vJC5qZLS6W29emuLXgHewtO4vjRdRoxd5U2Ee9APBQB2Oco+7IiH+ZqD4glRSfl8F74PtpQvEsz+H9AeoJPTi8Swu80W5HUam/X8xppU/3XyZEu9xZUIklM3LMrEnOjrfg1zN1BzKn7Z0+bTWdGLmTXJWCBKwWtdy1Zi4cAE/WtHotAGZju+hczWxbY7GgyvOCpC+69cXMPD+dRpp8d3c1X6Vr97Xmx3/jA57ykAVB0s9CAF/QmlIR0Hp5x0qHmiZvenYXMGiIpH1zO3CrfU3ZJmbTnPTtCJzkB1F/n5q00hoLF7nI4yq5O34Ouk0e+K5nRCQUzqZ+wXdkoCeZWHf8Jfu7TWWQQ5yQEB4UtpdCp9O0+i/iHDlJ2Y8y/yfcrKcjYnOV88t7mMyqQ7pmhukz6F55ny8L4MdMmbRH/tEUI5pOZ3CJHRrNYwEy7vhuagbhKOLfCKzvtnNYmD9bUtKTTOmHTSa6h/5pcmP1/xHBe2HwGDbZXkUjiTxwHzWP7yVrL+7EFr3HxTkdwG69fu17+t99nbpF+C65m6S1GQ3kmT9A5mQksba+jeEANjzLJjrenPVsamZ+jTNkt5wxRwD2wQN06Fo2KOJi/IHsG58ffpm272L3SS12ZK10UqaP0MFJhOG84oxGjY5Nrg0H85R8ppF6prKq2av5uDy6T7ZR1lEH3hrMjs2gdQtqkT6NmfVA/Opz4idWVM8ZwKEFTkZhqP/cM1vAAi3DyVAW4oSyKPBHtkWPaQcEPXL+cmDsk24S/yiv57CKy/sErmHbZYg9yKAmZ7eHLLQfmvvKxoxW9C2Htn9PVfVipuxynWle1QmGp/fw4fS6Tb/VCVTCKLzF49eK94xL9lvbsrO31WL5GVWYdrSvpYeLdwQUMJAzh3gpOSwD7A0VYCbYusN44ciUMTS5Orr70DRmfkmn68qcXq+HbJwn7erZHp89ksb4cC/RoDLUOTpLto0++YaNgPpMAN/cSzl1Xa8qmKdlHMk/r6toVUAxAMnOlvjOnyEVLMtt3q7FBKMo3PiG9+kgcEuDMjYGdk+BUpA3+0MhZhKQUE7dmU+ilYwv5pJG+/ARJQ9Pr4BY6qiplnML+mnzCjeXc+jhwDGMKZy3d1oqPz7TqXerxnIasnKmr5VmDuUNYq8lb6nUIVAL/tVmjiOyso2KwgRNmO4dcFEhIgoI4lFlO0M3TV5PXXHr34+xMjCuwtqp+T6f8ajW+NmkstF5Ka+ilTsx9Qqc2nJ64BT6ru56HpGlGSzO+oTwROeY/QaC5fT82+Rld1YToPi5w0WK1cGiOACPEHNKhUvOkaSWBFE5Vh0FMLAj27NrJjOhKMkD+CaRSwYffneBrE/ctuO8dMtnnLFkFN3ycXXpC7x/1UBf8zBTcWdc58WEIgKDfo0EPqkoDaaC1VtktP+3/l2pc8NKc9Md4wO2mEr3rJM7pb/rS6tOtOclHiDPVktYY1G8NNN8FOHIhYEBpqmP6FJj0Lu79IQdcHjra4CPuLj6Q/0YCC1v0C46hQeNpCDbrHhAlBgIxr+Vbco/9/eTqpUG2E2/cs9gm7oUJnA==';const _IH='4d748c96968fe24b648629eb347f62997ebd233ce378be0ac6c2fe9f6db5c6be';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
