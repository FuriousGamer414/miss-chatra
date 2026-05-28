// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6W0X2T8yEVPI0Fc+VCgP9jrbygUHwDuVH9iAooxyXX5QSLqS4OsUdISvKbYc0fiE/DQ3tSJpRbB8129+LLooa88Hf+Hxt8AnbpyMdCbpSFy6jfSvp2qUeID9GfP1Y0wphvbEycnPimse3PZqIWeeJCa8twvK4qgjrr+ZQgGIL/fLebReDDcRX4nwcoKoTYHq3UDEYJneQjMPbejUSif0oQI4HjajztVVW/n+n5kKpVVbVJW3c6OjyysKO5Sbj15Gu6092Pti9TuIs6mPYKvTG4l/+rGgYjTa2ewMFQV8zMlLwwDJMQZZGVGrGMTTpHLw7nLvqzAXjU8gi8xMl9+ix9C+mQKzMFSQ5KLFd/owgseH0vD+XwvCtBKONCrkd0duqKINIQhEAlvDUjWcRRu5eD+B8JbIoM1mIojKazBi2eiKQsnajgvibpLWDeL+7sNwXZA3aUEp+et6YXS1ubAi+G23ITh5rSNIlduw50NiOL4bzCaM8Po3UgU4M8zvDXVEfGivzeJaDqFMJOJESah1EpedOQqOY4gpGV58UeG5geNKVTtmJ/EYRsFLYiB4Fl7iozP4cPb5I4+sssvWXP7QYdF88s2qMjTUIPxQJbVEHw39zgbt8fg2VHQSx0X6nccm2JFMydH2CHu0oxJK9GuYTQGwyTjOKNDyyZZAz2GZt9ADc/qmL9Byygc1r9gG5wOVfmX/+EAbPQyhxKGrMu1Bh4W1BArnOkJ02zZ6955FDBD83l0HRNDYDOTe5YySJ8KHRWSQMjz+LfkenhL6+KDbTyo133wkb5Bgr+Vcpo339w+L3QlkkfE2KiZW3tU7km1wlFSw694w/SFr7JcZkeVWtGLP1EV+uOu6mpZlopb2K+uRI5KtrIMk30xZ7H6lPqjn0/zGB5sHKj+z+tSaQ27Ecm/BOF2oDytbM33n1R0Qrd0zU9BA0RMClbFLk+ASszMvE5JkOkZqMSrGaaWY9m87E0ps/suuYJh+nnTrXrwNzZXHPjPtk0FenGephrfEuZg90PCwiI3epBdhYy3cokW2EQxlPLCtH2c93+xLFPsCY/3bC9MBwGnMB6rpMfaotRClqcHEeC/de3hg/vHtqYkBNtmQyKAc6fN5UioPo/uT0PdAXnPTI/rJFYSkWZRVziQTbjQcTYhheImpBz9xHrq9P6k91mUWsmaCkc6ggbkEnkjCWw+bahZhePDv4t6Jgdd5ouejrxXXCe6mRdSGkR8+pyGlj+7dFW3NwWAQbeeo0tM7lDauBi2Zl8dE0AaV4dOSxjGCVfvAc8Y7C2nK0qEQ1d6iyRffMJoIRFVBwzLzqAlsb1mp1XrvnUqBvx0/VNq5ZL2YWLMoEC4JDfASDdIj+86fm18nMoR9yXqqvavmglSMaucvJsnr7SgKucbvkoiGepV';const _IH='207388c3a7fff793e1d1326cc92e17d6e7b61bec0f098b12cbc2c7260c0b3dcd';let _src;

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
