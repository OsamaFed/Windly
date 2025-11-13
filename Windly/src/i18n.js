import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Search city": "Search city...",
      "Use my location": "Use my location",
      "Loading": "Loading...",
      "Current city": "Select city",
      "Feels like": "Feels like",
      Humidity: "Humidity",
      Wind: "Wind",
      "5-Day Weather Forecast": "5-Day Weather Forecast",

      // Days of the week
      Sunday: "Sunday",
      Monday: "Monday",
      Tuesday: "Tuesday",
      Wednesday: "Wednesday",
      Thursday: "Thursday",
      Friday: "Friday",
      Saturday: "Saturday",

      // Weather conditions
      "clear sky": "clear sky",
      "few clouds": "few clouds",
      "scattered clouds": "scattered clouds",
      "broken clouds": "broken clouds",
      "overcast clouds": "overcast clouds",

      "shower rain": "shower rain",
      "light intensity shower rain": "light intensity shower rain",
      "heavy intensity shower rain": "heavy intensity shower rain",
      "ragged shower rain": "ragged shower rain",

      "rain": "rain",
      "light rain": "light rain",
      "moderate rain": "moderate rain",
      "heavy intensity rain": "heavy intensity rain",
      "very heavy rain": "very heavy rain",
      "extreme rain": "extreme rain",
      "freezing rain": "freezing rain",

      "thunderstorm": "thunderstorm",
      "thunderstorm with light rain": "thunderstorm with light rain",
      "thunderstorm with rain": "thunderstorm with rain",
      "thunderstorm with heavy rain": "thunderstorm with heavy rain",
      "light thunderstorm": "light thunderstorm",
      "heavy thunderstorm": "heavy thunderstorm",
      "ragged thunderstorm": "ragged thunderstorm",
      "thunderstorm with light drizzle": "thunderstorm with light drizzle",
      "thunderstorm with drizzle": "thunderstorm with drizzle",
      "thunderstorm with heavy drizzle": "thunderstorm with heavy drizzle",

      "drizzle": "drizzle",
      "light intensity drizzle": "light intensity drizzle",
      "heavy intensity drizzle": "heavy intensity drizzle",
      "light intensity drizzle rain": "light intensity drizzle rain",
      "drizzle rain": "drizzle rain",
      "heavy intensity drizzle rain": "heavy intensity drizzle rain",
      "shower rain and drizzle": "shower rain and drizzle",
      "heavy shower rain and drizzle": "heavy shower rain and drizzle",
      "shower drizzle": "shower drizzle",

      "snow": "snow",
      "light snow": "light snow",
      "heavy snow": "heavy snow",
      "sleet": "sleet",
      "light shower sleet": "light shower sleet",
      "shower sleet": "shower sleet",
      "light rain and snow": "light rain and snow",
      "rain and snow": "rain and snow",
      "light shower snow": "light shower snow",
      "shower snow": "shower snow",
      "heavy shower snow": "heavy shower snow",

      "mist": "mist",
      "smoke": "smoke",
      "haze": "haze",
      "sand/dust whirls": "sand/dust whirls",
      "fog": "fog",
      "sand": "sand",
      "dust": "dust",
      "volcanic ash": "volcanic ash",
      "squalls": "squalls",
      "tornado": "tornado",
      "description": "Your daily weather companion, providing accurate and instant updates on weather conditions in cities around the world."
    },
  },
  ar: {
    translation: {
      "Search city": "ابحث عن مدينة...",
      "Use my location": "استخدم موقعي الحالي",
      Loading: "جاري التحميل...",
      "Current city": "اختر مدينة",
      "Feels like": "تشعر به",
      Humidity: "الرطوبة",
      Wind: "الرياح",
      "5-Day Weather Forecast": "التوقعات للأيام الخمس القادمة",

      // Days of the week
      Sunday: "الأحد",
      Monday: "الاثنين",
      Tuesday: "الثلاثاء",
      Wednesday: "الأربعاء",
      Thursday: "الخميس",
      Friday: "الجمعة",
      Saturday: "السبت",

      // Weather conditions
      "clear sky": "سماء صافية",
      "few clouds": "بعض الغيوم",
      "scattered clouds": "غيوم متفرقة",
      "broken clouds": "غيوم متقطعة",
      "overcast clouds": "غيوم كثيفة",

      "shower rain": "أمطار متفرقة",
      "light intensity shower rain": "أمطار متفرقة خفيفة",
      "heavy intensity shower rain": "أمطار متفرقة غزيرة",
      "ragged shower rain": "أمطار متفرقة غير منتظمة",

      "rain": "مطر",
      "light rain": "أمطار خفيفة",
      "moderate rain": "أمطار متوسطة",
      "heavy intensity rain": "أمطار غزيرة",
      "very heavy rain": "أمطار شديدة الغزارة",
      "extreme rain": "أمطار غزيرة جدًا",
      "freezing rain": "أمطار متجمدة",

      "thunderstorm": "عاصفة رعدية",
      "thunderstorm with light rain": "عاصفة رعدية مع أمطار خفيفة",
      "thunderstorm with rain": "عاصفة رعدية مع أمطار",
      "thunderstorm with heavy rain": "عاصفة رعدية مع أمطار غزيرة",
      "light thunderstorm": "عاصفة رعدية خفيفة",
      "heavy thunderstorm": "عاصفة رعدية قوية",
      "ragged thunderstorm": "عاصفة رعدية غير منتظمة",
      "thunderstorm with light drizzle": "عاصفة رعدية مع رذاذ خفيف",
      "thunderstorm with drizzle": "عاصفة رعدية مع رذاذ",
      "thunderstorm with heavy drizzle": "عاصفة رعدية مع رذاذ غزير",

      "drizzle": "رذاذ",
      "light intensity drizzle": "رذاذ خفيف",
      "heavy intensity drizzle": "رذاذ غزير",
      "light intensity drizzle rain": "رذاذ ممزوج بأمطار خفيفة",
      "drizzle rain": "رذاذ ممزوج بأمطار",
      "heavy intensity drizzle rain": "رذاذ ممزوج بأمطار غزيرة",
      "shower rain and drizzle": "رذاذ مع أمطار متفرقة",
      "heavy shower rain and drizzle": "رذاذ غزير مع أمطار متفرقة",
      "shower drizzle": "رذاذ متقطع",

      "snow": "ثلوج",
      "light snow": "ثلوج خفيفة",
      "heavy snow": "ثلوج كثيفة",
      "sleet": "مطر ثلجي",
      "light shower sleet": "مطر ثلجي خفيف متفرق",
      "shower sleet": "مطر ثلجي متفرق",
      "light rain and snow": "أمطار خفيفة مع ثلوج",
      "rain and snow": "أمطار مع ثلوج",
      "light shower snow": "ثلوج خفيفة متفرقة",
      "shower snow": "ثلوج متفرقة",
      "heavy shower snow": "ثلوج كثيفة متفرقة",

      "mist": "ضباب خفيف",
      "smoke": "دخان",
      "haze": "غشاوة",
      "sand/dust whirls": "زوبعة رملية/غبارية",
      "fog": "ضباب",
      "sand": "رمال",
      "dust": "غبار",
      "volcanic ash": "رماد بركاني",
      "squalls": "رياح عاصفة",
      "tornado": "إعصار",
      "description": "رفيقك اليومي للطقس، يزوّدك بتحديثات دقيقة وفورية عن حالة الطقس في جميع مدن العالم."
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ar", // اللغة الافتراضية العربية
    fallbackLng: "en", // اللغة الاحتياطية

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;