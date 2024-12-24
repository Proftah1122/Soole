export const generateShareUrls = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  
  return {
    whatsapp: `https://wa.me/?text=${encodedMessage}`,
    sms: `sms:?body=${encodedMessage}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedMessage}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedMessage}`
  };
};