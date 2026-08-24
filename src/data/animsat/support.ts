import { ANIMSAT_NAME, ANIMSAT_SUPPORT_EMAIL } from './meta';
import type { AnimsatLocale } from './locales';

export type SupportFaq = {
  q: string;
  a: string;
};

export type SupportDoc = {
  title: string;
  kicker: string;
  intro: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
  responseNote: string;
  faqTitle: string;
  faqs: SupportFaq[];
};

const docs: Record<AnimsatLocale, SupportDoc> = {
  tr: {
    title: 'Destek',
    kicker: 'Yardım',
    intro: `${ANIMSAT_NAME} ile ilgili bir sorun, öneri veya soru varsa buradasın. Uygulama içi tarihler cihazda kalır; destek için e-posta yeter.`,
    contactTitle: 'Yaz bize',
    contactBody: 'Tarih, widget, reklam veya Pro hakkında her şey. Genelde birkaç gün içinde dönüş yaparız.',
    contactCta: 'E-posta gönder',
    responseNote: 'Mümkün olduğunca Türkçe ve İngilizce yanıtlanır.',
    faqTitle: 'Sık sorulanlar',
    faqs: [
      {
        q: 'Tarihlerim nerede duruyor?',
        a: 'Eklediğin tarihler, başlıklar, konumlar ve fotoğraflar yalnızca bu cihazda saklanır. Sunucuya gönderilmez.',
      },
      {
        q: 'Widget görünmüyor, ne yapmalıyım?',
        a: 'Ana ekranda uzun bas, widget ekle, Anımsat’ı seç. iOS bazen widget’ı yenilemek için uygulamayı bir kez açmanı ister.',
      },
      {
        q: 'Reklamları nasıl kapatırım?',
        a: 'Ücretsiz planda reklam olabilir. Anımsat Pro, uygulama içi reklamları kapatır; abonelik yoktur, tek seferliktir.',
      },
      {
        q: 'Verilerimi nasıl silerim?',
        a: 'Tarihi uygulama içinden silebilir veya uygulamayı kaldırarak cihazda kalan her şeyi temizleyebilirsin.',
      },
      {
        q: 'Satın alma görünmüyor, ne olur?',
        a: 'Aynı Apple kimliğiyle cihazında satın almayı geri yüklemeyi dene. Hâlâ olmuyorsa e-posta at, sipariş ekran görüntüsüyle bakılır.',
      },
    ],
  },
  'en-US': {
    title: 'Support',
    kicker: 'Help',
    intro: `Questions, ideas, or a snag with ${ANIMSAT_NAME}. Dates stay on the device; email is enough for support.`,
    contactTitle: 'Write to us',
    contactBody: 'Dates, widgets, ads, or Pro. We usually reply within a few days.',
    contactCta: 'Send email',
    responseNote: 'We reply in English or Turkish when we can.',
    faqTitle: 'Common questions',
    faqs: [
      {
        q: 'Where are my dates stored?',
        a: 'Dates, titles, places, and photos stay on this device only. They are not sent to a server.',
      },
      {
        q: 'The widget is missing. What should I do?',
        a: 'Long-press the home screen, add a widget, pick Anımsat. iOS sometimes needs you to open the app once so the widget can refresh.',
      },
      {
        q: 'How do I turn off ads?',
        a: 'The free plan may show ads. Anımsat Pro turns off in-app ads. There is no subscription, it is a one-time purchase.',
      },
      {
        q: 'How do I delete my data?',
        a: 'Delete a date inside the app, or uninstall to clear everything stored locally.',
      },
      {
        q: 'My purchase does not show up.',
        a: 'Try Restore Purchases with the same Apple ID. If it still fails, email us with a screenshot of the receipt.',
      },
    ],
  },
  'de-DE': {
    title: 'Support',
    kicker: 'Hilfe',
    intro: `Frage, Idee oder Problem zu ${ANIMSAT_NAME}. Termine bleiben auf dem Gerät; für Support reicht eine E-Mail.`,
    contactTitle: 'Schreib uns',
    contactBody: 'Termine, Widgets, Werbung oder Pro. Antwort meist in wenigen Tagen.',
    contactCta: 'E-Mail senden',
    responseNote: 'Antworten auf Deutsch, Englisch oder Türkisch, soweit möglich.',
    faqTitle: 'Häufige Fragen',
    faqs: [
      {
        q: 'Wo liegen meine Termine?',
        a: 'Termine, Titel, Orte und Fotos bleiben nur auf diesem Gerät. Sie gehen nicht auf einen Server.',
      },
      {
        q: 'Das Widget fehlt. Was tun?',
        a: 'Lange auf den Startbildschirm drücken, Widget hinzufügen, Anımsat wählen. iOS braucht manchmal einmaliges Öffnen der App.',
      },
      {
        q: 'Wie schalte ich Werbung aus?',
        a: 'Im kostenlosen Plan kann Werbung erscheinen. Anımsat Pro schaltet In-App-Werbung aus. Kein Abo, einmaliger Kauf.',
      },
      {
        q: 'Wie lösche ich meine Daten?',
        a: 'Termine in der App löschen oder die App deinstallieren, um lokale Daten zu entfernen.',
      },
      {
        q: 'Der Kauf erscheint nicht.',
        a: 'Käufe mit derselben Apple-ID wiederherstellen. Bleibt es aus, schreib uns mit einem Beleg-Screenshot.',
      },
    ],
  },
  'fr-FR': {
    title: 'Assistance',
    kicker: 'Aide',
    intro: `Question, idée ou souci avec ${ANIMSAT_NAME}. Les dates restent sur l’appareil; un e-mail suffit.`,
    contactTitle: 'Écris-nous',
    contactBody: 'Dates, widgets, pubs ou Pro. Réponse en général sous quelques jours.',
    contactCta: 'Envoyer un e-mail',
    responseNote: 'Réponses en français, anglais ou turc quand c’est possible.',
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        q: 'Où sont mes dates ?',
        a: 'Dates, titres, lieux et photos restent sur cet appareil. Rien n’est envoyé vers un serveur.',
      },
      {
        q: 'Le widget n’apparaît pas.',
        a: 'Appui long sur l’écran d’accueil, ajouter un widget, choisir Anımsat. iOS demande parfois d’ouvrir l’app une fois.',
      },
      {
        q: 'Comment retirer les pubs ?',
        a: 'La version gratuite peut afficher des pubs. Anımsat Pro les retire. Pas d’abonnement, achat unique.',
      },
      {
        q: 'Comment supprimer mes données ?',
        a: 'Supprime une date dans l’app, ou désinstalle pour tout effacer localement.',
      },
      {
        q: 'L’achat n’apparaît pas.',
        a: 'Restaure l’achat avec le même identifiant Apple. Sinon, écris-nous avec une capture du reçu.',
      },
    ],
  },
  'es-ES': {
    title: 'Soporte',
    kicker: 'Ayuda',
    intro: `Duda, idea o problema con ${ANIMSAT_NAME}. Las fechas se quedan en el dispositivo; un correo basta.`,
    contactTitle: 'Escríbenos',
    contactBody: 'Fechas, widgets, anuncios o Pro. Respondemos en unos días.',
    contactCta: 'Enviar correo',
    responseNote: 'Respondemos en español, inglés o turco cuando es posible.',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Dónde están mis fechas?',
        a: 'Fechas, títulos, lugares y fotos se quedan solo en este dispositivo. No se envían a un servidor.',
      },
      {
        q: 'No veo el widget.',
        a: 'Mantén pulsada la pantalla de inicio, añade un widget y elige Anımsat. A veces iOS pide abrir la app una vez.',
      },
      {
        q: '¿Cómo quito los anuncios?',
        a: 'El plan gratis puede mostrar anuncios. Anımsat Pro los apaga. Sin suscripción, compra única.',
      },
      {
        q: '¿Cómo borro mis datos?',
        a: 'Borra una fecha en la app o desinstala para limpiar lo local.',
      },
      {
        q: 'No aparece la compra.',
        a: 'Restaura compras con el mismo Apple ID. Si sigue fallando, mándanos una captura del recibo.',
      },
    ],
  },
  it: {
    title: 'Supporto',
    kicker: 'Aiuto',
    intro: `Domanda, idea o problema con ${ANIMSAT_NAME}. Le date restano sul dispositivo; basta una mail.`,
    contactTitle: 'Scrivici',
    contactBody: 'Date, widget, annunci o Pro. Di solito rispondiamo in pochi giorni.',
    contactCta: 'Invia email',
    responseNote: 'Rispondiamo in italiano, inglese o turco quando possibile.',
    faqTitle: 'Domande frequenti',
    faqs: [
      {
        q: 'Dove sono le mie date?',
        a: 'Date, titoli, luoghi e foto restano solo su questo dispositivo. Non vanno su un server.',
      },
      {
        q: 'Il widget non si vede.',
        a: 'Tieni premuta la Home, aggiungi un widget, scegli Anımsat. iOS a volte chiede di aprire l’app una volta.',
      },
      {
        q: 'Come tolgo gli annunci?',
        a: 'Il piano gratuito può mostrare annunci. Anımsat Pro li spegne. Niente abbonamento, acquisto unico.',
      },
      {
        q: 'Come cancello i dati?',
        a: 'Elimina una data nell’app o disinstalla per cancellare tutto in locale.',
      },
      {
        q: 'L’acquisto non compare.',
        a: 'Ripristina gli acquisti con lo stesso Apple ID. Se non basta, scrivici con uno screenshot della ricevuta.',
      },
    ],
  },
  'nl-NL': {
    title: 'Ondersteuning',
    kicker: 'Hulp',
    intro: `Vraag, idee of probleem met ${ANIMSAT_NAME}. Data blijft op het apparaat; een e-mail volstaat.`,
    contactTitle: 'Mail ons',
    contactBody: 'Data, widgets, ads of Pro. Meestal antwoord binnen een paar dagen.',
    contactCta: 'E-mail sturen',
    responseNote: 'We antwoorden in het Nederlands, Engels of Turks als het kan.',
    faqTitle: 'Veelgestelde vragen',
    faqs: [
      {
        q: 'Waar staat mijn data?',
        a: 'Data, titels, plaatsen en foto’s blijven alleen op dit apparaat. Ze gaan niet naar een server.',
      },
      {
        q: 'De widget ontbreekt.',
        a: 'Lang indrukken op het beginscherm, widget toevoegen, Anımsat kiezen. iOS vraagt soms de app één keer te openen.',
      },
      {
        q: 'Hoe zet ik ads uit?',
        a: 'Het gratis plan kan ads tonen. Anımsat Pro zet in-app ads uit. Geen abonnement, eenmalige aankoop.',
      },
      {
        q: 'Hoe wis ik mijn data?',
        a: 'Wis een datum in de app, of verwijder de app om lokale data te wissen.',
      },
      {
        q: 'Mijn aankoop verschijnt niet.',
        a: 'Herstel aankopen met hetzelfde Apple ID. Lukt het niet, mail ons met een screenshot van de bon.',
      },
    ],
  },
  ja: {
    title: 'サポート',
    kicker: 'ヘルプ',
    intro: `${ANIMSAT_NAME} の質問、提案、不具合。日付は端末に残ります。サポートはメールで十分です。`,
    contactTitle: 'メールする',
    contactBody: '日付、ウィジェット、広告、Pro。数日以内に返信することが多いです。',
    contactCta: 'メールを送る',
    responseNote: '日本語、英語、トルコ語で返信できる場合があります。',
    faqTitle: 'よくある質問',
    faqs: [
      {
        q: '日付はどこに保存されますか？',
        a: '日付、タイトル、場所、写真はこの端末のみ。サーバーへは送られません。',
      },
      {
        q: 'ウィジェットが出ません。',
        a: 'ホーム画面を長押ししてウィジェットを追加し、Anımsat を選んでください。iOS はアプリを一度開く必要があることがあります。',
      },
      {
        q: '広告を消すには？',
        a: '無料版では広告が出ることがあります。Anımsat Pro はアプリ内広告をオフにします。サブスクではなく買い切りです。',
      },
      {
        q: 'データを消すには？',
        a: 'アプリ内で日付を消すか、アンインストールして端末上のデータを消してください。',
      },
      {
        q: '購入が表示されません。',
        a: '同じ Apple ID で購入を復元してください。だめならレシートのスクリーンショットを添えてメールしてください。',
      },
    ],
  },
  ko: {
    title: '지원',
    kicker: '도움말',
    intro: `${ANIMSAT_NAME}에 대한 질문, 제안, 문제. 날짜는 기기에 남습니다. 지원은 이메일로 충분합니다.`,
    contactTitle: '메일 보내기',
    contactBody: '날짜, 위젯, 광고, Pro. 며칠 안에 답하는 편입니다.',
    contactCta: '이메일 보내기',
    responseNote: '가능한 경우 한국어, 영어 또는 터키어로 답합니다.',
    faqTitle: '자주 묻는 질문',
    faqs: [
      {
        q: '날짜는 어디에 저장되나요?',
        a: '날짜, 제목, 장소, 사진은 이 기기에만 저장됩니다. 서버로 보내지지 않습니다.',
      },
      {
        q: '위젯이 안 보여요.',
        a: '홈 화면을 길게 눌러 위젯을 추가하고 Anımsat을 선택하세요. iOS는 앱을 한 번 열어야 할 때가 있습니다.',
      },
      {
        q: '광고를 끄려면?',
        a: '무료 플랜에는 광고가 있을 수 있습니다. Anımsat Pro는 인앱 광고를 끕니다. 구독이 아니라 일회 구매입니다.',
      },
      {
        q: '데이터를 지우려면?',
        a: '앱에서 날짜를 지우거나, 삭제해서 기기의 로컬 데이터를 없애세요.',
      },
      {
        q: '구매가 안 보여요.',
        a: '같은 Apple ID로 복원을 시도하세요. 안 되면 영수증 스크린샷과 함께 메일을 보내 주세요.',
      },
    ],
  },
  'zh-Hans': {
    title: '支持',
    kicker: '帮助',
    intro: `关于 ${ANIMSAT_NAME} 的问题、建议或故障。日期留在设备上；发邮件即可。`,
    contactTitle: '写信给我们',
    contactBody: '日期、小组件、广告或 Pro。通常几天内回复。',
    contactCta: '发送邮件',
    responseNote: '我们会尽量用中文、英语或土耳其语回复。',
    faqTitle: '常见问题',
    faqs: [
      {
        q: '我的日期存在哪里？',
        a: '日期、标题、地点和照片只留在这台设备上，不会发到服务器。',
      },
      {
        q: '看不到小组件。',
        a: '长按主屏幕，添加小组件，选择 Anımsat。iOS 有时需要先打开一次应用。',
      },
      {
        q: '如何关闭广告？',
        a: '免费版可能显示广告。Anımsat Pro 会关闭应用内广告。没有订阅，一次买断。',
      },
      {
        q: '如何删除数据？',
        a: '在应用内删除日期，或卸载以清除本机数据。',
      },
      {
        q: '购买没有显示。',
        a: '用同一 Apple ID 恢复购买。仍不行就发邮件并附上收据截图。',
      },
    ],
  },
  'zh-Hant': {
    title: '支援',
    kicker: '說明',
    intro: `關於 ${ANIMSAT_NAME} 的問題、建議或故障。日期留在裝置上；寄信即可。`,
    contactTitle: '寫信給我們',
    contactBody: '日期、小工具、廣告或 Pro。通常幾天內回覆。',
    contactCta: '傳送郵件',
    responseNote: '我們會盡量用中文、英語或土耳其語回覆。',
    faqTitle: '常見問題',
    faqs: [
      {
        q: '我的日期存在哪裡？',
        a: '日期、標題、地點與照片只留在這部裝置，不會送到伺服器。',
      },
      {
        q: '看不到小工具。',
        a: '長按主畫面，新增小工具，選擇 Anımsat。iOS 有時需要先打開一次 App。',
      },
      {
        q: '如何關閉廣告？',
        a: '免費版可能顯示廣告。Anımsat Pro 會關閉應用程式內廣告。沒有訂閱，一次買斷。',
      },
      {
        q: '如何刪除資料？',
        a: '在應用程式內刪除日期，或解除安裝以清除本機資料。',
      },
      {
        q: '購買沒有顯示。',
        a: '用同一個 Apple ID 回復購買。仍不行就寄信並附上收據截圖。',
      },
    ],
  },
  'ar-SA': {
    title: 'الدعم',
    kicker: 'مساعدة',
    intro: `سؤال أو اقتراح أو مشكلة مع ${ANIMSAT_NAME}. التواريخ تبقى على الجهاز؛ يكفي بريد إلكتروني.`,
    contactTitle: 'راسلنا',
    contactBody: 'التواريخ أو الودجات أو الإعلانات أو Pro. نرد غالبًا خلال أيام.',
    contactCta: 'أرسل بريدًا',
    responseNote: 'نرد بالعربية أو الإنجليزية أو التركية حين نستطيع.',
    faqTitle: 'أسئلة شائعة',
    faqs: [
      {
        q: 'أين تُحفظ تواريخي؟',
        a: 'التواريخ والعناوين والأماكن والصور تبقى على هذا الجهاز فقط، ولا تُرسل إلى خادم.',
      },
      {
        q: 'لا يظهر الودجت.',
        a: 'اضغط مطولًا على الشاشة الرئيسية، أضف ودجت، اختر Anımsat. قد يطلب iOS فتح التطبيق مرة واحدة.',
      },
      {
        q: 'كيف أوقف الإعلانات؟',
        a: 'الخطة المجانية قد تعرض إعلانات. Anımsat Pro يوقف إعلانات التطبيق. بلا اشتراك، شراء لمرة واحدة.',
      },
      {
        q: 'كيف أحذف بياناتي؟',
        a: 'احذف التاريخ من التطبيق، أو أزل التطبيق لمسح البيانات المحلية.',
      },
      {
        q: 'الشراء لا يظهر.',
        a: 'استعد المشتريات بنفس Apple ID. إن استمر الخلل، راسلنا مع لقطة للإيصال.',
      },
    ],
  },
  'pt-BR': {
    title: 'Suporte',
    kicker: 'Ajuda',
    intro: `Dúvida, ideia ou problema com ${ANIMSAT_NAME}. As datas ficam no aparelho; um e-mail basta.`,
    contactTitle: 'Escreva para nós',
    contactBody: 'Datas, widgets, anúncios ou Pro. Costumamos responder em alguns dias.',
    contactCta: 'Enviar e-mail',
    responseNote: 'Respondemos em português, inglês ou turco quando possível.',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      {
        q: 'Onde ficam minhas datas?',
        a: 'Datas, títulos, lugares e fotos ficam só neste aparelho. Não vão para um servidor.',
      },
      {
        q: 'O widget não aparece.',
        a: 'Toque e segure a tela inicial, adicione um widget e escolha Anımsat. O iOS às vezes pede abrir o app uma vez.',
      },
      {
        q: 'Como desligo os anúncios?',
        a: 'O plano grátis pode mostrar anúncios. O Anımsat Pro desliga os anúncios. Sem assinatura, compra única.',
      },
      {
        q: 'Como apago meus dados?',
        a: 'Apague uma data no app ou desinstale para limpar os dados locais.',
      },
      {
        q: 'A compra não aparece.',
        a: 'Restaure as compras com o mesmo Apple ID. Se não resolver, envie um print do recibo.',
      },
    ],
  },
  ru: {
    title: 'Поддержка',
    kicker: 'Помощь',
    intro: `Вопрос, идея или сбой в ${ANIMSAT_NAME}. Даты остаются на устройстве; достаточно письма.`,
    contactTitle: 'Напишите нам',
    contactBody: 'Даты, виджеты, реклама или Pro. Обычно отвечаем за несколько дней.',
    contactCta: 'Отправить письмо',
    responseNote: 'Отвечаем на русском, английском или турецком, когда можем.',
    faqTitle: 'Частые вопросы',
    faqs: [
      {
        q: 'Где хранятся мои даты?',
        a: 'Даты, названия, места и фото остаются только на этом устройстве и не уходят на сервер.',
      },
      {
        q: 'Виджет не появляется.',
        a: 'Долгое нажатие на домашнем экране, добавьте виджет, выберите Anımsat. iOS иногда просит открыть приложение один раз.',
      },
      {
        q: 'Как отключить рекламу?',
        a: 'В бесплатном плане может быть реклама. Anımsat Pro отключает рекламу в приложении. Без подписки, разовая покупка.',
      },
      {
        q: 'Как удалить данные?',
        a: 'Удалите дату в приложении или удалите приложение, чтобы стереть локальные данные.',
      },
      {
        q: 'Покупка не отображается.',
        a: 'Восстановите покупки с тем же Apple ID. Если не поможет, напишите и приложите скриншот чека.',
      },
    ],
  },
};

export function getSupportDoc(locale: AnimsatLocale): SupportDoc {
  return docs[locale] ?? docs.tr;
}
