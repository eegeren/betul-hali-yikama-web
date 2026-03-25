import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Clock3,
  Droplets,
  MapPinned,
  MessageCircleMore,
  ShieldCheck,
  Sofa,
  Sparkles,
  Truck,
  WashingMachine,
  Wind,
} from "lucide-react";

export const businessInfo = {
  businessName: "Betül Halı Yıkama",
  phoneDisplay: "0530 598 32 90",
  phoneRaw: "905305983290",
  whatsappNumber: "905305983290",
  serviceArea: "Bandırma",
  address: "600 Evler, 1363. Sk. No:25 Blk/44, 10200 Bandırma/Balıkesir",
  whatsappPrefilledMessage:
    "Merhaba, halı yıkama hizmeti için bilgi ve fiyat almak istiyorum.",
  googleMapsQuery: "600 Evler, 1363. Sk. no:25 BLK/44, 10200 Bandırma/Balıkesir",
  siteUrl: "https://betulhaliyikama.com",
} as const;

export const siteMetadata = {
  siteUrl: businessInfo.siteUrl,
  title: "Bandırma Halı Yıkama | Betül Halı Yıkama",
  description:
    "Betül Halı Yıkama, Bandırma'da profesyonel halı yıkama, koltuk yıkama, stor perde temizliği ve yorgan battaniye yıkama hizmeti sunar.",
  keywords: [
    "Bandırma halı yıkama",
    "profesyonel halı yıkama Bandırma",
    "koltuk yıkama Bandırma",
    "stor perde temizliği Bandırma",
    "Bandırma koltuk temizleme",
    "Bandırma yorgan yıkama",
  ],
} as const;

const encodedMessage = encodeURIComponent(businessInfo.whatsappPrefilledMessage);
const encodedMapsQuery = encodeURIComponent(businessInfo.googleMapsQuery);

export const contactLinks = {
  tel: `tel:+${businessInfo.phoneRaw}`,
  whatsapp: `https://wa.me/${businessInfo.whatsappNumber}?text=${encodedMessage}`,
  mapsEmbed: `https://www.google.com/maps?q=${encodedMapsQuery}&z=13&output=embed`,
} as const;

export const navigationItems = [
  { label: "Anasayfa", href: "#anasayfa" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "İletişim", href: "#iletisim" },
] as const;

export type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const trustHighlights: IconItem[] = [
  {
    title: "Hijyenik Temizlik",
    description: "Antibakteriyel temizlik anlayışıyla ferah sonuçlar.",
    icon: Droplets,
  },
  {
    title: "Zamanında Teslim",
    description: "Planlanan gün ve saatte düzenli teslimat.",
    icon: Clock3,
  },
  {
    title: "Profesyonel Ekipman",
    description: "Kumaşa uygun işlem sağlayan modern sistemler.",
    icon: Sparkles,
  },
  {
    title: "Ücretsiz Servis",
    description: "Bandırma içinde adresten alım ve teslim kolaylığı.",
    icon: Truck,
  },
];

export const services: IconItem[] = [
  {
    title: "Halı Yıkama",
    description:
      "Makine halısı, yün halı ve hassas dokular için kumaşa uygun, özenli yıkama süreci uygulanır.",
    icon: WashingMachine,
  },
  {
    title: "Koltuk Yıkama",
    description:
      "Ev ve ofis koltuklarında leke durumuna göre kontrollü temizlikle ferah ve bakımlı görünüm sağlanır.",
    icon: Sofa,
  },
  {
    title: "Yorgan & Battaniye Yıkama",
    description:
      "Mevsimlik tekstilleriniz temiz, kokusuz ve kullanıma hazır şekilde teslim edilir.",
    icon: ShieldCheck,
  },
  {
    title: "Stor Perde Temizliği",
    description:
      "Stor perdelerde kumaşa zarar vermeden biriken toz ve kir hedefli biçimde temizlenir.",
    icon: Wind,
  },
];

export const reasons: IconItem[] = [
  {
    title: "Profesyonel ekipman kullanımı",
    description:
      "Her işlem daha dengeli temizlik ve kontrollü kurutma için profesyonel sistemlerle yürütülür.",
    icon: Sparkles,
  },
  {
    title: "Kumaşa uygun yıkama süreçleri",
    description:
      "Halı ve tekstil türüne göre uygun uygulama seçilerek doku korunur.",
    icon: BadgeCheck,
  },
  {
    title: "Antibakteriyel temizlik anlayışı",
    description:
      "Sadece görünür temizliğe değil, hijyen hissine ve ferah sonuca odaklanılır.",
    icon: Droplets,
  },
  {
    title: "Zamanında teslimat",
    description:
      "Randevu ve teslim planı net ilerler; bekleme süreci uzatılmaz.",
    icon: Clock3,
  },
  {
    title: "Müşteri memnuniyeti odaklı hizmet",
    description:
      "İletişim açık tutulur, beklenti net alınır ve süreç buna göre yönetilir.",
    icon: MessageCircleMore,
  },
  {
    title: "Bandırma'ya hızlı servis desteği",
    description:
      "Yerel hizmet avantajıyla mahallelere hızlı geri dönüş ve düzenli servis sağlanır.",
    icon: MapPinned,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Bizden randevu alın",
    description:
      "Telefonla ya da WhatsApp üzerinden kısa bilgilerle hızlıca randevunuzu oluşturalım.",
  },
  {
    step: "02",
    title: "Halılarınızı adresten teslim alalım",
    description:
      "Bandırma içinde adrese gelerek ürünlerinizi güvenli şekilde teslim alalım.",
  },
  {
    step: "03",
    title: "Profesyonel temizlik uygulayalım",
    description:
      "Uygun yıkama, durulama ve kurutma aşamalarıyla özenli temizlik sürecini tamamlayalım.",
  },
  {
    step: "04",
    title: "Temiz şekilde teslim edelim",
    description:
      "Hazır olduğunda ürünlerinizi temiz, düzenli ve kullanıma uygun biçimde teslim edelim.",
  },
] as const;

export const reviews = [
  {
    name: "Ercan Tezcan",
    location: "Bandırma",
    text:
      "Halı yıkama için telefonda gayet net bilgi verdiler. Teslimata söyledikleri saatte geldiler, yine söyledikleri saatte teslim ettiler. Halılar güzel temizlenmiş, zarar görmemiş ve özenle paketlenmişti.",
  },
  {
    name: "Merve Ayan",
    location: "Bandırma",
    text:
      "İki yıldır halılarımı burada yıkatıyorum ve çok memnunum. İkiz bebeklerimin döktüğü süt lekeleriyle yapıştırıcı izi bile çıkmıştı. Halılar yeni alınmış gibi oldu, mis gibi kokuyordu.",
  },
  {
    name: "Berkant Ateş",
    location: "Bandırma",
    text:
      "İşletme sahibi ve personeli gerçekten çok kibar insanlar. İşlerini temiz ve düzenli yapıyorlar. Halılarımız çok güzel temizlenmişti ve mis gibi kokuyordu.",
  },
  {
    name: "Yağmur Özmaçin",
    location: "Bandırma",
    text:
      "Köpeklerim için dışarıda kullandığım halım çok kirlenmesine ve çok tüy olmasına rağmen her seferinde tertemiz geliyor. Evdeki halılarımın kokusu da günlerce kalıyor. İşini titizlikle yapan bir işletme.",
  },
  {
    name: "Emine Aksu",
    location: "Bandırma",
    text:
      "Küçük çocuğum olduğu için halım çok kirlenmişti. Çıkmaz dediğim lekeler çıkmış, tertemiz olmuş. İlk aldığım zamanki kadar temiz ve mis gibi kokuyordu.",
  },
] as const;

export const businessInfoList = [
  { label: "Telefon", value: businessInfo.phoneDisplay },
  { label: "WhatsApp", value: businessInfo.phoneDisplay },
  { label: "Hizmet Bölgesi", value: businessInfo.serviceArea },
  { label: "Adres", value: businessInfo.address },
] as const;

export const workingHours = [
  { day: "Pazartesi", hours: "08:00 - 17:00" },
  { day: "Salı", hours: "08:00 - 17:00" },
  { day: "Çarşamba", hours: "08:00 - 17:00" },
  { day: "Perşembe", hours: "08:00 - 17:00" },
  { day: "Cuma", hours: "08:00 - 17:00" },
  { day: "Cumartesi", hours: "08:00 - 17:00" },
  { day: "Pazar", hours: "Kapalı" },
] as const;

export const businessBlurb =
  "Bandırma'da halı, koltuk ve ev tekstili temizliğinde düzenli iletişim, hijyen odaklı süreç ve özenli teslim anlayışıyla hizmet veriyoruz.";

export const heroStats = [
  "Bandırma genelinde servis desteği",
  "Hijyen odaklı profesyonel temizlik",
  "WhatsApp üzerinden hızlı teklif",
] as const;
