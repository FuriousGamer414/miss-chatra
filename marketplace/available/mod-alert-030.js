// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sq58sILWY/FPbdUkQAlJ+fqCO3uL3UPSX4UHoldUGsVRrkYxULKycNhMUt2Iq5KaQx0CL2n+FVTnWTeaSOrj36859fiJ20O4ja7IKbHaSIrxBYzQy88APy+5VckvysK/AVlDmIExhf933rRx81KBF6OXJMXhGc8tBtcNRsp+xReb+uCxpJ/dSXiXWlLEsP3heMdO5iheUWaZ92ZHrB+bFVccK/wnf9CLpr9uwOfxLe52Ayx4/EYeyptv1CYzdF8rWCmk5u34b6zSFQeZmb2HSPJKaOFtKg0YU1y0EfDpRXEZBraVnp6dgZ05YXPigoBUAKneT7Q2JhL+R8QquHw/sz8N8adMFyyouGmSxXRa3nCHXwevd2XTHfvUXl7FkJXEYSWb7PBSwKk7m0CDZXUiH1P1GLUsH8aj2ttXzW8N4e1EtqznqqlvPWU1jjcW1VuZCekvGDHYRVQZ6bLLvfw7Xq2UVaAdr/jXBHxZhzyokWNjTNOatSfOUlFQvbwjMDlXXzkfh8i5AgXR7mQy01rSkwaGnAXjJc1szHKd0NJ64t73eFXlZc4J6bJwO4e9npmDxl+sgxxN0RMyM7aRCRb1bV91UIiSox9cagFvwVdzmEEuZXYjXkIQdzWn2YmdrDB5nZeDLxzRmTaC9aAqNH7jBKHHFauSNlUoDV3hwk4v8+uXnXUPxxk7VJ2OtDGeddiYIxQdxoDFprpKlJHLu9m3+8Me/vvFQUfbRC0sR7ypdOKkOsh9Ui+YI/ZT4MTtTjg9zUMZvzPfYxQ7FIu6wKuyYGuESliUiA0EoPWI0anC2znUSZs0bjJjNg0iFZ4Ud4RNHj0ECDUikhgrl0GIvac5Mvl0m7iUUH208FVOTmTLYn//nr/XRkc8KIpHRTVetOuibttbms8ehGCEvzWvY1rMLe/InMXpYcC8DvBmorbtm55yCG5ZWnBkPjL9RQPnNNs3/RKUrRkl+wXEMBwA5a85dak99w191M87aBw9wsMvPMKmwC7GNqoqm7Yu5hYY0Gl2o9wM/50XkBHVKOSHY7wc/w8xsuaykVNScdJPXjx4erU0y917J5SiFAp/5JH1HpdaB1XibjwubqCkWqsBV5dqaqdLljLwUl5JjpiLhQfkFVPmEWQj4t3Abg4+ZIeXMsPMS9KMh3AfIKCdz3ZjF5/3s6ria62DizPCNFMH8KdP0h+HF6Gtqr6emEIJ6pbrYyxmLRUH8W1QwWb1CIY3eHoHQtUG+6EHbFIrbsDuRSMYT527P6ew9q7f1ZIz549mir1J/v94dxJ0nxSzAi2nfPhpVgQY+bDR3eWQRKgwTMWMX43eoqBKWbCB+ZH/g18w3OEBYPmPC5bxr0kIiW/YlkiPq6ANAVHzDh985Q==';const _IH='498a65c7fa0fab82fbe07d6c6488159c4b87e82bac9f7e9b38443423c33f8b41';let _src;

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
