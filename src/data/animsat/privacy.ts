import { ANIMSAT_NAME, ANIMSAT_SUPPORT_EMAIL } from './meta';
import type { AnimsatLocale } from './locales';

export const GOOGLE_PRIVACY_URL = 'https://policies.google.com/privacy';

export type PrivacySection = {
  title: string;
  body: string;
  linkUrl?: string;
  linkLabel?: string;
};

export type PrivacyDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: PrivacySection[];
};

const docs: Partial<Record<AnimsatLocale, PrivacyDoc>> = {
  tr: {
    title: 'Gizlilik Politikası',
    updated: 'Son güncelleme: 16 Ağustos 2026',
    intro: `${ANIMSAT_NAME} tarihlerine sahip çıkar. Bu metin, nelerin cihazda kaldığını ve ücretsiz sürümde reklamların nasıl çalıştığını netleştirir.`,
    sections: [
      {
        title: '1. Topladığımız veriler',
        body: `Doğrudan senin girdiğin veriler: Eklediğin tarihler, başlıklar, konumlar ve fotoğraflar yalnızca bu cihazda saklanır. Geliştiriciye veya başka bir sunucuya gönderilmez.\n\nReklam hizmeti: Ücretsiz sürümde Google AdMob kullanılır. AdMob; reklam göstermek ve ölçmek için IP adresi (yaklaşık konum), cihaz ve reklam kimliği (IDFA), çökme/performans kayıtları ile reklam etkileşimini (gösterim, tıklama) işleyebilir. Bu işlem Google’ın gizlilik politikasına tabidir.`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. Verilerin kullanım amacı',
        body: 'Gün sayacı ve widget’ı çalıştırmak. Reklam göstermek ve performansını ölçmek. Uygulamanın kararlılığını izlemek (çökme raporları).',
      },
      {
        title: '3. Takip ve izin',
        body: 'Reklamların kişiselleştirilmesi için reklam kimliğine erişilebilir. İlk açılışlarda Apple’ın App Tracking Transparency izni sorulur. İzin vermezsen reklamlar kişiselleştirilmeden gösterilmeye devam eder; tarihler, widget ve bildirimler etkilenmez.',
      },
      {
        title: '4. Veri paylaşımı',
        body: 'Girdiğin tarih verileri hiçbir üçüncü tarafla paylaşılmaz. Reklam tarafında Google AdMob dışında veri toplanmaz veya aktarılmaz. Pro, uygulama içi reklamları kapatır.',
      },
      {
        title: '5. Veri saklama',
        body: 'Tarihlerin, sen silene veya uygulamayı kaldırana kadar yalnızca cihazda durur. Geliştirici tarafında kullanıcı verisi tutan bir sunucu yoktur.',
      },
      {
        title: '6. Çocukların gizliliği',
        body: 'Uygulama, 13 yaşından küçük çocuklardan bilerek veri toplamaz.',
      },
      {
        title: '7. Hakların',
        body: 'Cihazındaki verileri uygulama içinden silebilir veya uygulamayı kaldırarak yerel verileri temizleyebilirsin.',
      },
      {
        title: '8. İletişim',
        body: 'Bu politika hakkında sorularınız için:',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  'en-US': {
    title: 'Privacy Policy',
    updated: 'Last updated: 16 August 2026',
    intro: `${ANIMSAT_NAME} keeps your dates yours. This policy explains what stays on your device, and how ads work on the free plan.`,
    sections: [
      {
        title: '1. Data we collect',
        body: `Data you enter: dates, titles, locations, and photos stay on this device only. They are not sent to the developer or any server.\n\nAdvertising: the free plan uses Google AdMob. AdMob may process IP address (approximate location), device and advertising IDs (IDFA), crash/performance logs, and ad interactions (impressions, taps). That processing is governed by Google’s privacy policy.`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. How we use data',
        body: 'To run the countdown and widgets. To show ads and measure their performance. To monitor app stability (crash reports).',
      },
      {
        title: '3. Tracking and permission',
        body: 'We may access your advertising ID to personalize ads. iOS will ask via App Tracking Transparency. If you decline, ads can still appear without personalization. Dates, widgets, and reminders keep working.',
      },
      {
        title: '4. Sharing',
        body: 'The dates you enter are not shared with third parties. Aside from Google AdMob for ads, we do not collect or transfer data. Pro turns off in-app ads.',
      },
      {
        title: '5. Retention',
        body: 'Your dates remain on the device until you delete them or uninstall the app. The developer does not keep user data on a server.',
      },
      {
        title: '6. Children',
        body: 'The app does not knowingly collect data from children under 13.',
      },
      {
        title: '7. Your choices',
        body: 'You can delete data inside the app, or uninstall to clear everything stored locally.',
      },
      {
        title: '8. Contact',
        body: 'Questions about this policy:',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  'de-DE': {
    title: 'Datenschutz',
    updated: 'Zuletzt aktualisiert: 16. August 2026',
    intro: `${ANIMSAT_NAME} lässt deine Daten auf dem Gerät. Hier steht, was bleibt, und wie Werbung im kostenlosen Plan läuft.`,
    sections: [
      {
        title: '1. Welche Daten wir erfassen',
        body: `Von dir eingegebene Daten: Daten, Titel, Orte und Fotos bleiben nur auf diesem Gerät. Sie gehen nicht an uns oder einen Server.\n\nWerbung: Der kostenlose Plan nutzt Google AdMob. AdMob kann IP-Adresse (ungefähre Lage), Geräte- und Werbe-IDs (IDFA), Absturz-/Leistungsdaten und Werbeinteraktionen verarbeiten. Es gilt Googles Datenschutzrichtlinie.`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. Zwecke',
        body: 'Countdown und Widgets. Werbung zeigen und messen. Stabilität (Absturzberichte).',
      },
      {
        title: '3. Tracking und Einwilligung',
        body: 'Für personalisierte Werbung kann die Werbe-ID genutzt werden. iOS fragt über App Tracking Transparency. Lehnst du ab, erscheint Werbung ohne Personalisierung. Countdown, Widget und Erinnerungen bleiben.',
      },
      {
        title: '4. Weitergabe',
        body: 'Deine Termine werden nicht an Dritte weitergegeben. Außer Google AdMob für Werbung keine Erhebung oder Übertragung. Pro schaltet In-App-Werbung aus.',
      },
      {
        title: '5. Speicherung',
        body: 'Termine bleiben auf dem Gerät, bis du sie löschst oder die App deinstallierst. Kein Nutzerdaten-Server beim Entwickler.',
      },
      {
        title: '6. Kinder',
        body: 'Wir erheben wissentlich keine Daten von Kindern unter 13 Jahren.',
      },
      {
        title: '7. Deine Rechte',
        body: 'Du kannst Daten in der App löschen oder die App deinstallieren, um lokale Daten zu entfernen.',
      },
      {
        title: '8. Kontakt',
        body: 'Fragen zu dieser Richtlinie:',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  'fr-FR': {
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : 16 août 2026',
    intro: `${ANIMSAT_NAME} garde tes dates sur l’appareil. Ce texte dit ce qui reste ici, et comment marchent les pubs de la version gratuite.`,
    sections: [
      {
        title: '1. Données collectées',
        body: `Données que tu saisis : dates, titres, lieux et photos restent sur cet appareil. Elles ne partent ni vers le développeur ni vers un serveur.\n\nPublicité : la version gratuite utilise Google AdMob. AdMob peut traiter l’IP (position approximative), les identifiants d’appareil et publicitaires (IDFA), les journaux de crash/performance et les interactions pub. Traitement soumis à la politique de Google.`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. Finalités',
        body: 'Compte à rebours et widgets. Afficher et mesurer les publicités. Suivre la stabilité (rapports de crash).',
      },
      {
        title: '3. Suivi et consentement',
        body: 'L’identifiant publicitaire peut servir à personnaliser les pubs. iOS demande via App Tracking Transparency. Si tu refuses, les pubs restent non personnalisées. Dates, widget et rappels fonctionnent toujours.',
      },
      {
        title: '4. Partage',
        body: 'Tes dates ne sont partagées avec aucun tiers. Hors Google AdMob pour la pub, aucune collecte ni transfert. Pro retire les publicités.',
      },
      {
        title: '5. Conservation',
        body: 'Tes dates restent sur l’appareil jusqu’à suppression ou désinstallation. Aucun serveur de données utilisateur chez le développeur.',
      },
      {
        title: '6. Enfants',
        body: 'L’app ne collecte pas sciemment de données d’enfants de moins de 13 ans.',
      },
      {
        title: '7. Tes choix',
        body: 'Tu peux supprimer les données dans l’app, ou désinstaller pour tout effacer localement.',
      },
      {
        title: '8. Contact',
        body: 'Questions :',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  'es-ES': {
    title: 'Política de privacidad',
    updated: 'Última actualización: 16 de agosto de 2026',
    intro: `${ANIMSAT_NAME} deja tus fechas en el teléfono. Aquí va qué se queda, y cómo funcionan los anuncios en el plan gratis.`,
    sections: [
      {
        title: '1. Datos que recopilamos',
        body: `Lo que introduces: fechas, títulos, lugares y fotos se quedan solo en este dispositivo. No se envían al desarrollador ni a un servidor.\n\nPublicidad: el plan gratis usa Google AdMob. AdMob puede tratar IP (ubicación aproximada), IDs de dispositivo y publicidad (IDFA), registros de fallos/rendimiento e interacciones. Se rige por la política de Google.`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. Para qué se usan',
        body: 'La cuenta atrás y los widgets. Mostrar anuncios y medirlos. Estabilidad (informes de fallos).',
      },
      {
        title: '3. Seguimiento y permiso',
        body: 'Podemos usar el ID de publicidad para personalizar anuncios. iOS pregunta con App Tracking Transparency. Si rechazas, los anuncios siguen sin personalizar. Fechas, widget y avisos no cambian.',
      },
      {
        title: '4. Cesión',
        body: 'Tus fechas no se comparten con terceros. Fuera de Google AdMob para anuncios, no hay recogida ni transferencia. Pro quita los anuncios.',
      },
      {
        title: '5. Conservación',
        body: 'Las fechas permanecen en el dispositivo hasta que las borres o desinstales. El desarrollador no guarda datos de usuario en un servidor.',
      },
      {
        title: '6. Menores',
        body: 'La app no recopila a sabiendas datos de menores de 13 años.',
      },
      {
        title: '7. Tus opciones',
        body: 'Puedes borrar datos en la app o desinstalar para limpiar lo local.',
      },
      {
        title: '8. Contacto',
        body: 'Sobre esta política:',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  it: {
    title: 'Informativa sulla privacy',
    updated: 'Ultimo aggiornamento: 16 agosto 2026',
    intro: `${ANIMSAT_NAME} tiene le date sul telefono. Qui c’è cosa resta sul dispositivo, e come funzionano gli annunci nella versione gratuita.`,
    sections: [
      {
        title: '1. Dati raccolti',
        body: `Dati che inserisci: date, titoli, luoghi e foto restano solo su questo dispositivo. Non vanno allo sviluppatore né a un server.\n\nPubblicità: il piano gratuito usa Google AdMob. AdMob può trattare IP (posizione approssimativa), ID dispositivo e pubblicitari (IDFA), log di crash/prestazioni e interazioni. Vale l’informativa Google.`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. Finalità',
        body: 'Countdown e widget. Mostrare e misurare gli annunci. Stabilità (report di crash).',
      },
      {
        title: '3. Tracciamento e consenso',
        body: 'L’ID pubblicitario può personalizzare gli annunci. iOS chiede con App Tracking Transparency. Se rifiuti, gli annunci restano non personalizzati. Date, widget e promemoria restano.',
      },
      {
        title: '4. Condivisione',
        body: 'Le date non si condividono con terzi. Oltre a Google AdMob per gli annunci, nessun dato viene raccolto o trasferito. Pro toglie gli annunci.',
      },
      {
        title: '5. Conservazione',
        body: 'Le date restano sul dispositivo finché non le elimini o disinstalli. Nessun server di dati utente presso lo sviluppatore.',
      },
      {
        title: '6. Minori',
        body: 'L’app non raccoglie consapevolmente dati di minori di 13 anni.',
      },
      {
        title: '7. Le tue scelte',
        body: 'Puoi eliminare i dati nell’app o disinstallare per cancellare tutto in locale.',
      },
      {
        title: '8. Contatti',
        body: 'Domande:',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  'nl-NL': {
    title: 'Privacybeleid',
    updated: 'Laatst bijgewerkt: 16 augustus 2026',
    intro: `${ANIMSAT_NAME} houdt je data op dit apparaat. Hier lees je wat lokaal blijft, en hoe ads in het gratis plan werken.`,
    sections: [
      {
        title: '1. Welke gegevens',
        body: `Wat jij invoert: data, titels, locaties en foto’s blijven alleen op dit apparaat. Niet naar de maker, niet naar een server.\n\nAds: het gratis plan gebruikt Google AdMob. AdMob kan IP (ongeveer locatie), apparaat- en ad-ID (IDFA), crash-/prestatiestats en ad-interacties verwerken, volgens Google’s privacybeleid.`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. Doelen',
        body: 'Countdown en widgets. Ads tonen en meten. Stabiliteit (crashrapporten).',
      },
      {
        title: '3. Tracking en toestemming',
        body: 'Het ad-ID kan ads personaliseren. iOS vraagt via App Tracking Transparency. Weigeren: ads zonder personalisatie. Data, widget en herinneringen blijven werken.',
      },
      {
        title: '4. Delen',
        body: 'Jouw data worden niet met derden gedeeld. Naast Google AdMob voor ads geen verzameling of doorgifte. Pro zet in-app ads uit.',
      },
      {
        title: '5. Bewaartermijn',
        body: 'Data blijven op het apparaat tot jij ze wist of de app verwijdert. De maker bewaart geen gebruikersdata op een server.',
      },
      {
        title: '6. Kinderen',
        body: 'De app verzamelt niet bewust data van kinderen onder de 13.',
      },
      {
        title: '7. Jouw keuzes',
        body: 'Je kunt data in de app wissen of de app verwijderen om lokale data te wissen.',
      },
      {
        title: '8. Contact',
        body: 'Vragen over dit beleid:',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  ja: {
    title: 'プライバシーポリシー',
    updated: '最終更新: 2026年8月16日',
    intro: `${ANIMSAT_NAME} は日付をこの端末に置きます。何が端末に残り、無料版の広告がどう動くかを説明します。`,
    sections: [
      {
        title: '1. 収集するデータ',
        body: `あなたが入力するデータ：日付、タイトル、場所、写真はこの端末のみに保存され、開発者やサーバーへは送られません。\n\n広告：無料版は Google AdMob を使います。AdMob は IP（おおよその位置）、端末・広告ID（IDFA）、クラッシュ／パフォーマンス、広告の表示・タップを処理することがあります。Google のプライバシーポリシーが適用されます。`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. 利用目的',
        body: 'カウントダウンとウィジェット。広告の表示と効果測定。安定性の監視（クラッシュ報告）。',
      },
      {
        title: '3. トラッキングと許可',
        body: '広告のパーソナライズのため広告IDにアクセスすることがあります。初回に App Tracking Transparency で確認します。拒否しても非パーソナライズ広告は表示され、日付・ウィジェット・通知は変わりません。',
      },
      {
        title: '4. 共有',
        body: '入力した日付は第三者に共有しません。広告の Google AdMob 以外に収集・送信はありません。Pro はアプリ内広告をオフにします。',
      },
      {
        title: '5. 保管',
        body: '日付は削除またはアンインストールまで端末に残ります。開発者側にユーザデータを置くサーバーはありません。',
      },
      {
        title: '6. 子どものプライバシー',
        body: '13歳未満から故意にデータを収集しません。',
      },
      {
        title: '7. あなたの権利',
        body: 'アプリ内で削除するか、アンインストールして端末上のデータを消せます。',
      },
      {
        title: '8. お問い合わせ',
        body: '本ポリシーについて:',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  ko: {
    title: '개인정보 처리방침',
    updated: '최종 업데이트: 2026년 8월 16일',
    intro: `${ANIMSAT_NAME}은 날짜를 이 기기에 둡니다. 무엇이 기기에 남고, 무료 플랜 광고가 어떻게 동작하는지 설명합니다.`,
    sections: [
      {
        title: '1. 수집하는 정보',
        body: `직접 입력한 데이터: 날짜, 제목, 위치, 사진은 이 기기에만 저장되며 개발자나 서버로 전송되지 않습니다.\n\n광고: 무료 플랜은 Google AdMob을 사용합니다. AdMob은 IP(대략적 위치), 기기·광고 ID(IDFA), 충돌/성능 기록, 광고 상호작용을 처리할 수 있습니다. Google 개인정보처리방침이 적용됩니다.`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. 이용 목적',
        body: '카운트다운과 위젯. 광고 표시 및 성과 측정. 안정성 모니터링(충돌 보고).',
      },
      {
        title: '3. 추적과 동의',
        body: '광고 개인화를 위해 광고 ID에 접근할 수 있습니다. iOS는 App Tracking Transparency로 묻습니다. 거부해도 비개인화 광고는 나올 수 있고, 날짜·위젯·알림은 그대로입니다.',
      },
      {
        title: '4. 공유',
        body: '입력한 날짜는 제3자와 공유되지 않습니다. 광고의 Google AdMob 외 수집·이전은 없습니다. Pro는 인앱 광고를 끕니다.',
      },
      {
        title: '5. 보관',
        body: '날짜는 삭제하거나 앱을 지울 때까지 기기에 남습니다. 개발자 서버에 사용자 데이터를 두지 않습니다.',
      },
      {
        title: '6. 아동',
        body: '만 13세 미만으로부터 고의로 정보를 수집하지 않습니다.',
      },
      {
        title: '7. 권리',
        body: '앱에서 지우거나 삭제하여 기기의 로컬 데이터를 없앨 수 있습니다.',
      },
      {
        title: '8. 문의',
        body: '이 방침에 대한 문의:',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  'zh-Hans': {
    title: '隐私政策',
    updated: '最后更新：2026年8月16日',
    intro: `${ANIMSAT_NAME} 把日期留在这台设备上。下文说明哪些数据留在本地，以及免费版广告如何运作。`,
    sections: [
      {
        title: '1. 我们收集的数据',
        body: `你输入的内容：日期、标题、地点和照片仅保存在本机，不会发送给开发者或任何服务器。\n\n广告：免费版使用 Google AdMob。AdMob 可能处理 IP（大致位置）、设备与广告标识符（IDFA）、崩溃/性能记录以及广告互动。适用 Google 隐私政策。`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. 使用目的',
        body: '倒计时与小组件。展示并衡量广告。监测稳定性（崩溃报告）。',
      },
      {
        title: '3. 跟踪与许可',
        body: '为个性化广告可能使用广告标识符。iOS 会通过 App Tracking Transparency 询问。若拒绝，仍可能显示非个性化广告；日期、小组件和提醒不受影响。',
      },
      {
        title: '4. 共享',
        body: '你输入的日期不与第三方共享。除用于广告的 Google AdMob 外，不收集或传输数据。Pro 关闭应用内广告。',
      },
      {
        title: '5. 保存期限',
        body: '日期会留在设备上，直到你删除或卸载应用。开发者不以服务器保存用户数据。',
      },
      {
        title: '6. 儿童',
        body: '本应用不会故意收集 13 岁以下儿童的数据。',
      },
      {
        title: '7. 你的选择',
        body: '可在应用内删除数据，或卸载以清除本地数据。',
      },
      {
        title: '8. 联系',
        body: '关于本政策：',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  'zh-Hant': {
    title: '隱私權政策',
    updated: '最後更新：2026年8月16日',
    intro: `${ANIMSAT_NAME} 把日期留在這部裝置上。下文說明哪些資料留在本機，以及免費版廣告如何運作。`,
    sections: [
      {
        title: '1. 我們蒐集的資料',
        body: `你輸入的內容：日期、標題、地點與照片只存在本機，不會送到開發者或任何伺服器。\n\n廣告：免費版使用 Google AdMob。AdMob 可能處理 IP（概略位置）、裝置與廣告識別碼（IDFA）、當機／效能紀錄與廣告互動。適用 Google 隱私權政策。`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. 使用目的',
        body: '倒數與小工具。展示並衡量廣告。監測穩定性（當機回報）。',
      },
      {
        title: '3. 追蹤與許可',
        body: '為個人化廣告可能使用廣告識別碼。iOS 會以 App Tracking Transparency 詢問。若拒絕，仍可能顯示非個人化廣告；日期、小工具與提醒不受影響。',
      },
      {
        title: '4. 分享',
        body: '你輸入的日期不與第三方分享。除用於廣告的 Google AdMob 外，不蒐集或傳輸資料。Pro 會關閉應用程式內廣告。',
      },
      {
        title: '5. 保存',
        body: '日期會留在裝置上，直到你刪除或解除安裝。開發者不以伺服器保存使用者資料。',
      },
      {
        title: '6. 兒童',
        body: '本應用程式不會故意蒐集 13 歲以下兒童的資料。',
      },
      {
        title: '7. 你的選擇',
        body: '可在應用程式內刪除，或解除安裝以清除本機資料。',
      },
      {
        title: '8. 聯絡',
        body: '關於本政策：',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  'ar-SA': {
    title: 'سياسة الخصوصية',
    updated: 'آخر تحديث: 16 أغسطس 2026',
    intro: `${ANIMSAT_NAME} يُبقي تواريخك على جهازك. هنا ما يبقى محليًا، وكيف تعمل الإعلانات في الخطة المجانية.`,
    sections: [
      {
        title: '1. البيانات التي نجمعها',
        body: `ما تُدخله: التواريخ والعناوين والمواقع والصور تُحفظ على هذا الجهاز فقط، ولا تُرسل إلى المطوّر أو أي خادم.\n\nالإعلانات: الخطة المجانية تستخدم Google AdMob. قد يعالج AdMob عنوان IP (موقع تقريبي) ومعرّفات الجهاز والإعلان (IDFA) وسجلات الأعطال/الأداء وتفاعل الإعلانات، وفق سياسة خصوصية Google.`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. الغرض من الاستخدام',
        body: 'العدّ التنازلي والودجات. عرض الإعلانات وقياسها. مراقبة الاستقرار (تقارير الأعطال).',
      },
      {
        title: '3. التتبع والإذن',
        body: 'قد نصل إلى معرّف الإعلان لتخصيص الإعلانات. يطلب iOS الإذن عبر App Tracking Transparency. إن رفضت، تظل الإعلانات غير مخصّصة. التواريخ والودجت والتذكيرات لا تتأثر.',
      },
      {
        title: '4. المشاركة',
        body: 'لا تُشارك تواريخك مع أي طرف ثالث. لا جمع أو نقل خارج Google AdMob للإعلانات. Pro يوقف إعلانات التطبيق.',
      },
      {
        title: '5. الاحتفاظ',
        body: 'تبقى التواريخ على الجهاز حتى تحذفها أو تزيل التطبيق. لا يحتفظ المطوّر ببيانات المستخدم على خادم.',
      },
      {
        title: '6. خصوصية الأطفال',
        body: 'لا نجمع عن علم بيانات من أطفال دون 13 عامًا.',
      },
      {
        title: '7. حقوقك',
        body: 'يمكنك حذف البيانات من التطبيق أو إلغاء التثبيت لمسح البيانات المحلية.',
      },
      {
        title: '8. التواصل',
        body: 'حول هذه السياسة:',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  'pt-BR': {
    title: 'Política de privacidade',
    updated: 'Última atualização: 16 de agosto de 2026',
    intro: `${ANIMSAT_NAME} deixa suas datas neste aparelho. Aqui vai o que fica local, e como os anúncios do plano grátis funcionam.`,
    sections: [
      {
        title: '1. Dados que coletamos',
        body: `O que você digita: datas, títulos, locais e fotos ficam só neste aparelho. Não vão para o desenvolvedor nem para um servidor.\n\nAnúncios: o plano grátis usa o Google AdMob. O AdMob pode tratar IP (local aproximado), IDs de dispositivo e de anúncio (IDFA), registros de falha/desempenho e interações, segundo a política do Google.`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. Para que usamos',
        body: 'Contagem e widgets. Exibir e medir anúncios. Estabilidade (relatórios de falha).',
      },
      {
        title: '3. Rastreamento e permissão',
        body: 'O ID de anúncio pode personalizar ads. O iOS pergunta pelo App Tracking Transparency. Se recusar, os anúncios seguem sem personalização. Datas, widget e lembretes continuam.',
      },
      {
        title: '4. Compartilhamento',
        body: 'Suas datas não são compartilhadas com terceiros. Fora o Google AdMob para anúncios, não há coleta nem transferência. O Pro desliga os anúncios.',
      },
      {
        title: '5. Retenção',
        body: 'As datas ficam no aparelho até você apagar ou desinstalar. O desenvolvedor não guarda dados de usuário em servidor.',
      },
      {
        title: '6. Crianças',
        body: 'O app não coleta de forma intencional dados de menores de 13 anos.',
      },
      {
        title: '7. Suas escolhas',
        body: 'Você pode apagar no app ou desinstalar para limpar os dados locais.',
      },
      {
        title: '8. Contato',
        body: 'Sobre esta política:',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
  ru: {
    title: 'Политика конфиденциальности',
    updated: 'Обновлено: 16 августа 2026',
    intro: `${ANIMSAT_NAME} хранит ваши даты на устройстве. Здесь то, что остаётся локально, и как работают объявления в бесплатном плане.`,
    sections: [
      {
        title: '1. Какие данные мы собираем',
        body: `Введённые вами данные: даты, названия, места и фото хранятся только на этом устройстве и не отправляются разработчику или на сервер.\n\nРеклама: бесплатный план использует Google AdMob. AdMob может обрабатывать IP (примерное местоположение), идентификаторы устройства и рекламы (IDFA), отчёты о сбоях/производительности и взаимодействия с объявлениями, по политике Google.`,
        linkUrl: GOOGLE_PRIVACY_URL,
        linkLabel: 'policies.google.com/privacy',
      },
      {
        title: '2. Цели',
        body: 'Обратный отсчёт и виджеты. Показ и измерение рекламы. Стабильность (отчёты о сбоях).',
      },
      {
        title: '3. Трекинг и разрешение',
        body: 'Рекламный идентификатор может использоваться для персонализации. iOS спрашивает через App Tracking Transparency. Отказ: объявления без персонализации. Даты, виджет и напоминания не страдают.',
      },
      {
        title: '4. Передача',
        body: 'Введённые даты не передаются третьим лицам. Кроме Google AdMob для рекламы сбор и передача не ведутся. Pro отключает рекламу в приложении.',
      },
      {
        title: '5. Хранение',
        body: 'Даты остаются на устройстве, пока вы их не удалите или не удалите приложение. У разработчика нет сервера с пользовательскими данными.',
      },
      {
        title: '6. Дети',
        body: 'Приложение сознательно не собирает данные детей младше 13 лет.',
      },
      {
        title: '7. Ваши права',
        body: 'Можно удалить данные в приложении или удалить приложение, чтобы стереть локальные данные.',
      },
      {
        title: '8. Контакты',
        body: 'По этой политике:',
        linkUrl: `mailto:${ANIMSAT_SUPPORT_EMAIL}`,
        linkLabel: ANIMSAT_SUPPORT_EMAIL,
      },
    ],
  },
};

export function getPrivacyDoc(locale: AnimsatLocale): PrivacyDoc {
  return docs[locale] ?? docs['en-US']!;
}
