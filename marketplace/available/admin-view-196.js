// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2L9VjFDAUaUtY93E/0J5tsEjdA+eGOu/Hj/1t07MbreoDSWKU3Ad44BLsxrywPkgndJowOHIxsOBdh2PCrzuVOGpbYaMbzKtEfDgGXQI2Wj6y5hxqXJ8nA7Jhmv5tpaOBDxc0EY+Y0XEqVS3Io7K7UPgBkGwTIh0YFe+1Aur1wlTniXjhEZaqTIsvGR1pjImFdco946PDEwA6GGn2+rZyHZKbUsz3ib5T9/yJt2wWP8OaVs4GFEEl+4CAJSGXe2iqlqn7JOS01tmfTE7m8i7SExvrQEgH/XE5w9AK729Kx7o0XFzAotPcmpVil5o0kldPoyrA8DJDBSakDpwvh14PVUz2G1Ij4mTbrQSai6zNcZyCmDT5HoPKncPO3jRD+DizjPKR4WPD2lulk81hNRpHUx/VZmOFkIN/Fv4iwAblEU/34tjWKhk7duHOWm1ni6XCaucpodql6UDYRkOvpqBLMOlVtPvJLUpYD6rFy8KyuCEwi0ZxGyQeJwg6p+EKjwVFoc6pWhpwZGws2Ie1pN6dFQCuCoJFoPgT/QsaDR1u0yABqT21wyYVOMpJFWM17u4ikt8OieaGJ3BmtaVVMWUlWNCw7xNXZAP5QnED8X6CTbTsNkJuLnfZpSqox3uwLjlfQmx/cguhpeW8E7XYkqyUJkXEaV4jc+HVbdKMs/3i75N+cJBFsyV57oY6Xbcd+UoKZEGfHq9xidFp8ktOpOu0oMQBbDLZYtvTktm7mFwdodArfbD5W5DUGRORsGvop4U5QM+O1dY2M7HUH+YmDqLt2nsb1xpgp1ewO8mfodplD0b69MQWmFDqlfp3hNNC3tPIgcVyy7yUQ2yDFbKhJL+QU212UIsuVcRqyr7jQNEHROPfEOpv/6sjRHNd/UBusDpIkVwpBrM43lgFBU54ySnM7+ucnHCraoevkSO/zUDmhZHtg4/NjRVqzUlW37cmnZVBSE1yzAwPb7XEGdT7TIqGhGZTp0cpBDH814v/MHeFQvrUPs=';const _IH='d80e4234203471650cb849390ccbf8b1bd25d72bf8bfc3fb1603ab5896da48b1';let _src;

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
