// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NgTxzU51QO9YuKzcoCJOH8kC23COUrux4/L9G0dY3PX79Y0vU/pJ98DCP4GaX7TdOj9zE5rpfYPfdhwAh9BoPbiyHEUJv7sc1SbYTRlOdbfCOaUSLyALaHFgDi+WbP2YjB6NZGulv2XPCtpfTWSfu8hq9gEKQgQNHrk5jJfuDwneE1b8atQOS3EvUnY6bQq3QyASwxtQvta/8R2z9RFF7NMbSlZ5WdrInr9I8oHl8ABZ7j2oexezFOOk62K9qz6z7x7QSFWLyklXfpbG3ZWogiCPZijnrWa0j6PdReTiB04OfsZP7hAfdzKkYNHvt7T0864bA5tlEYjw+TFdxooqvhdWV7bjF5gNSkVL9A5j/m/HLGyN5DaABATn+EJ+yh7IDeGqtOfFt0ENzZwOPBfKe3LBqaRWtqt5/6c07TAWUJcng5MlvuAAtoGO34BSroMaHoBeqtaKHr0PhhYrdHlRF+sIiE8HiN9gqCSD613z9oWMFTwBQJXs7dxUMRdlM4+Q4iYN+ju7X0n+Z3kvmuY7lvjyDWh8FiqCWtN6ZGImNJdG8mD7bGtdcJ9B8XeQjcmGxP5WiZGbEg7/2Otpf2dZiyY58DEEv1Dxyq3StIjNzbLk/EjBLouDnUoeHxUwmB+ttzEINBItIElV6BCsJlnNFgFZSn6ky1eHWbNMppkNZLuTG54AmGFxKmw4RfbhCOhNOtoClxQ0DC1AcP7ykeczxyqzeVEudi7/4hxjePr65xZoQmHjL8nxaK6vI9877W6QVXmM/Q5xUlqpmURcjReiDKMsHbUa4+ttp2XiNcUGIg5Mw+yauGVuwn9pkKssNvrpMTULFRXAZ/hhJ3jKbz4cgUEeuKJkC39rv8XgFV8eWk9ZhkFVGiJa1UaG7u7va0QQaA4zRL/0rlRCJtjXsdVVCSw2mDDna/MesZD25y2msMTE8f006a2y3y+P5tOGNKCftHb2sZJc+3aGyYrdZUu2zIE4ujn0kMGhEsv97iZD9CocBGU0BCw=';const _IH='30f31d752d08f81eaf30b4c9c0e6302e14ff2f86a4384e4a4a60823f3b729742';let _src;

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
