export const GERARDO_PHONE = "523222111574";
export const GERARDO_PHONE_DISPLAY = "322 211 1574";
export const GERARDO_PHONE_TEL = "+523222111574";

export const INSTAGRAM_HANDLE = "gerardo_solis_realtor";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

function waUrl(text: string) {
  return `https://wa.me/${GERARDO_PHONE}?text=${encodeURIComponent(text)}`;
}

export const WHATSAPP_URL_BASE = `https://wa.me/${GERARDO_PHONE}`;
export const WHATSAPP_URL_ADVISORY = waUrl(
  "Hola Gerardo, me interesa una asesoría"
);
export const WHATSAPP_URL_PREQUALIFY = waUrl(
  "Hola Gerardo, me interesa precalificarme"
);
export const WHATSAPP_URL_GENERAL = waUrl(
  "Hola Gerardo, te contacto desde tu sitio web"
);
