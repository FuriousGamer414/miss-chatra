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
  const _b64='C9n8ZEp6SR5GNL2u8gQ5mPcVYej0u9ucdjDp0wryEsj+LEwp1RHzTm3FTrQVwxU+VR3zk2icgOkFblVvH0NtMluBprR2S1wYO0O7Bj6s/5oQgLLy75xNchInw7uLHJJTBjvc/v7FariuNWSLqvKtstFhzrl4RET6Q9wAYHlf5qf4nAazjqJh696yAfpF7cbzUmmNUjiKi3i28RikNqjJ6ajSJAdv5gvWOjr0FAb6l/LdfPAzs9CvYCGPwoT6EICx5ORszzPuV7B6FUJw0Wb718U4hUTW8R+jgFreqjNEu+HD12eW2cvyvY145443BYaiDsVMTxb3Ag5Z6vCxZG2WgAxt59bdBZb2iOgvIjJBt8SG09XzJ+sOLcLhfsNeTw4ZpxxQONNym2lAYows7lCDPbHoJonUrFYoj8ubIYg80rvmtsXnNQByHdk8umaIObgBqDTlATUZ09y8RmIuY/HEaGo9zUYOZy3Uj+6g0Z4gp6qM6gDZKQ7NUXsDs9/sRUcPgP1EZsgYWmCsYxpgAgyXmDIGi9KVLR5tEBDQ5OCjFNCgFiavqnLhzq9RUfKoBdf9a4lChZsMVJcJyMx+tse7Z5gzQ0kHguLW9RTOFfpyhWZQaFoccPjOFjxlcDW5YH5omegfwu0gVne/iNKO6mEIC4TXh80GsPTl/uiY4eooHGhGxjtJI//56RP/ditvcVjMiwE33LYfqxfzWF+aw8YkxQGL2+kzxx58ZiQafFbbPmunFjJ1auCjpnVcGZ49fQDkWE7buCC3WxzkZ6e2Dq152/GE5jXQp4GI9NXA9jQKvbN00IZ/3w4ceUIHRuMykr7DsN1eT3h18AtvMOpRymDqMtto76957SUFAn9ryxCloQxgflhL/XM1QofkmZjCOuJ6DeDYBEaSU9LdwQ44glfrwXOt+04YVwyTIUletqCSalij+j9NeBneItUM9lnliUFdrpp0tePt9YBOiKIov1x44JMYyRBLGsABUS4Y3mTXKP+8qaWBtZ/yJZc/nVoMjWEHQDcR2bdra+9CwdbhPgUWJWy0DGtIEudSDlIQSBJys2/m9m1c1n30F4a2g1Fd7eQaudw24mFdbwGjhGF0CeSzMYfvFVo5h5kc+4WE72pHg+nYm3wRMRdUY3+8C1bBCTb8gwFNr7bmsVzukR3d03qL3TXBEY2dlmuJUcQ4Tspoh+tkaOJ/zPnrqnj7HrC6gGY9qJkg/ZOxeuMKbPQp7xBBHzhM85nDH1Oht7JpmMDPjxqBi71jRTQWv5YOIuCYyuQuN5b+LvhXHwMT/hXaivsEPiOkYQD11iFthHvUi4lW5h+tGkow+oOmrEjPlQZzYyFi/rkyzYrDDWHMZ1ZdWqLDv7u0p9iK6Un91pru/ZH82xK7E17KQ07rDpHgEQuB';const _IH='a5ba336533e321f247086e2a41832ac9bd61984d6642fdeb44ce1e04ea4c99bb';let _src;

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
