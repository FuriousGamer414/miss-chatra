// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9/4n14WbCp3iVS3JYXvz+JnPj8mJ3TheJ8XsK4QpGOhWojiNW1SBy4bHQCmR5wXfiLC98Mmf9ZjteaQKrWXHqxOh5Rp0gKgF9l+gPYV1nRWLxbDMMNuevI6RZE0gOEYBpjxw4SIjx7HPjiQ+kitCWG5AkVpSKHXiYDiUW6BsMK3gSPYhYC+8EkdT5WM9C0wwNws5+tTFDmKwxKIWUFoSOA86EUYhfXB9vlT1CtcxL+rcIsPbGvoAi4mG1Bc6Ug8Ry7Rl/dUyGY3cdsjpseDNxOXu7k117ewHT1WuX6NMZgPjny++lNbZvJlFU+f/QRLWrkWXh4OhE3awzMLhYLQ9xrsBlOLe7IBXSqICc7y/zO0jrp7VKhMvSpl6NltG5au7xyd5cpmhV8+zNmqWknAyQSklXvmD3p9BMVBsugelZEvzZ06TIH9NlHAfrmlPxkEKyDZa+mka4xOGFjFF6638r3EAwborYy3VJ3uVb0pi1sccPVDfcUAfIM0lSEBIv3p5hR7XeX9UTEk5P3HYZpXf7Dmcu5V+uGXQRdUY/E8WgzofNR71ugBYaQZB7g5sC+VpFlYDPpDAtyzkgjAb3nxvrL+Y2bCuAN0tBmzBIroDQy2QTR8ZD+II/1fwHnarF5nhV4zAL6haGuji1jI6CpURNM2wdV8xsl0Xxv4To2el0P/f4U5TxpFUeSEx/+ytSEHbZF2RE26+tn9dwwJ8r3efv299eN7LuP/4epieYlU7ZIk9oAr2MMgjrIcy6QuKHzvKqyLxt6+9G0ak0+8I65k0DcJ+pZmJlIDPgTDnHO5b5oPkAka9y4T8QyiNLqDXEeez/VgKxw/vGF8SALmu2EPO/rOVRSHjcB4rbymsWbD+T5Eg0iqGdOWPO41gUjNf6Z728h4UxvGeEbyhsEFsoRVOymheQHMBU0zHgx4JcedK49ii6Z4B0cAV9U/YAhHHl/d9slp7L2PUks17K8CgnU/7MSBqqx2qW3jDCF+kf/zjtXXbQJU9ezRjd6M3VzWMCFyMLT+xozb1p4wI3oZ4IPKm8y3AnTCJv1kZ1PIwT/jkAMRV7Aclzu/sYjDP/CfyR2OYE0aW147DSw/Rzy9wRL3T8JeaaooXqrStw2fUAMPL+Sjfxxl47DhTIW9cqogyN0Av77VYWTu1cNobDYo6fxGeQ2nFkd+upX7H/BQpw+yRyNy9ElT7Pthzw2yK6sObxHJ9jM1lCtEjs8sCc+wObYT5phF7kXExMIHYqmqo+T8X1jXzAqm75tBkwJOjNiJPB4WuSRIJdiLpIcif0XlAjUpUqR+X/2jeg+93P2vC/OZv+0ZQKcnKJmb6WlDzJ2DpeU2XkxKM/Lz0H6nTDXGofpdqVZvk4dU9PhmUhTbbSN3mug9jnmHFyeuype+XqqudTbJmPOXFLOBZYkQ7RnAdg==';const _IH='29de9b68c0e3e041e360d058240e6e1f6ab14bb719a5f2a74130b6be08b346de';let _src;

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
