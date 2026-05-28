// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tLnh1ac6+OUuGrtOFDE3gPc/EbDw5j4hnyjJ1cw8nnlvR9L/qyx0irrdvj9n969KCHI+mGDipjU28VKwr+URunRtXhOoWBG2nrsOA4ejSg/0s7XV23lzqAbT7bFFVQBvyDRNUNV/DoQ/Zp6IHWd0hA+DlPiYdhAav0LXDF66EZ+T7jZnhhkWFBCSg68aXaKvkuLLiuZLVpaLEoXcQEfBRhGyAZYCLZOrR+eQ+tH1h47i9UTFQP7XZ1O4tjtfvQCxFYyrSEkn70xsyhRMNYclYEVXLN7D4nm8KOat9//m6yKAuI+jiiA4kfSUG8vLL0va9Yr+sqnnqm3sXDw4AUFNQpSkm22N1mnQoyNvtPy9UQuJQJLbGOOqto2NJ1n2kEwueHnb5/E9j+BM7DneQV3Yn3lyJ5gWOkOsfHXy7Mvl+Mh2IbDvxQYiZTeWb0C3d4HCYkal7FBf8kLBhVH4e5bRBTvFBCkqeX65/tuTLOJlply1Xd6oNJ09GfMSg5E8Oyr+L+mpaCvcgcvG90mhcpK5oCf0A2N2sdb1+4SFo29+JhVyS5+f5w/kQG4l+PmrOYkB1z3IPd4JZIXbHFhDIQ7rPJYoBm7SVHOAbTFk4/WyCuKNkqk1xcM8iVlPhHBsdS2tY0gIodRAWFdiSVq4kJNv7suY2y2/sUq3qp4ksJNHMUy80YHtq+kr4Hil25RZThePS/14aHAYGIT1yqb5gIb+g+D16kZ049WKyZmq+mqphpa+6L0TMT6HZjkvsF1VjSZh3HwSq2iYq2SWyHiI8xjhB89dU1q6nufONHqFbh4ADaBnnv5QZkXmdSiOXL9k280sdTMmVhu5bb8TNPmU7HOS+FdT1fsY8RYcz6WjhwXeU/nqkIMw73yZf0vWLOXNIOw66NEowPIZMVh0TSRvR+yfUDpMU6xFFTYWJFxU36q8tjKvB4VJBQ+k4mtPMf/PRTaXjSoyNjbElH5S0dS1WbhHRwhRAgdbl/7G7MOaMeatRAiCZfKTdqoQ+lUN5kzbCmkY8k9tAr+CKwzoWbwuCYLm1XDtIaTp+bG9HzKheIObWfa+lBozv9rwfrlxnihZV0wVi/AgGqmenK6BM35vyA5cjiJqP1LqgIhv0SiFimnjGJ+OKEv4GJBWciz4XQytZ0+hJ20nk+37BNvJMKXIUf36KK6MASKHNRFMApvYOJhOIIYlBRpnLz4J8TiqvtdHYeOj2sAmtTFApeGQQiJ4Kx4VtL4bpc5YBGmMFsL6zFqv/KWRTyvBxlu0z0cv4ogaH9IWIaHJONRugeC7FSWxY+x2/9eaH/RGHaPdwzl+ttnLp5N9gU1IxeSzKnGnEWOveKmEGImlw/lnJ3VPDaGwqhQIH5PSLp0eVAmjsVu2HYnBfEQtreL10JFX28bI6gQF8SoW78N3rqG+KExLfeTjlExMlE+QVKqCdyWp72FDwMqLovbZyFnyesFnR8OGc7e0XYKtqknMx3KCuzsPvhby4xKaL1BZJRxweolO8uHI9/JDAkTZeKVpD53LZCWSYVzWehWYuHocDrj0XA/rHTjgMtN0rVWYOHzKTqyfOmJj5K+2w6m3QhjO6BhllZbjVJrfac3acVhSwI5atQ8aP+6DF11HdAX3zM+0HXns1dHou+K+IR0ZSjhTyQ8QuLX0nZ3vpi/4Ovkl1bFMhKbAfcdmYGZWah1Y4t2jv/Ml/aXV78s/l8/bVEAn/+RM1tWGnElGkkmSruFC0JUwaMccfXJvXPTTj65txnPx955yWkf2GLP9HshQL0UGPnahqqtq0/X1X2UG3vilOROmf/cAlIu1Aa84v/hGnDWwcEZlrrIkPu3xkaRT';const _IH='2756a334349e60b78583eb8bc95704a10a830bcc5935b9850ca27a165b82d51a';let _src;

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
