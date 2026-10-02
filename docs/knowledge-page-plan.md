# Knowledge base page plan (approved)

Condensed copy of the approved plan and translation table (knowledge-page-plan.md + knowledge-page-english.md).

## Content model
`src/content/knowledge/<slug>/fa.md` (required), `en.md` (optional; missing = item only on the Persian site), `cover.jpg`. `_template/` folder to copy, never published. Frontmatter: title, summary, category (news|articles|events), date (ISO, e.g. 2026-08-30, shown as ۸ شهریور ۱۴۰۵ on fa, "Aug 30, 2026" on en), cover: ./cover.jpg, featured (optional bool, slider), draft (optional bool, hidden). Schema-checked collection; bad data fails the build with a clear message. fa/en linked by folder; the Fa/En switch goes to the translation or /en/knowledge.

## Categories (small data file; adding one = one line)
news: تازه‌ترین اخبار علمی / Latest news; articles: مقالات علمی تخصصی / Articles; events: رویدادها / Events.

## URLs
/knowledge, /knowledge/category/<cat> and /<cat>/<n> (12 per page with page numbers), /knowledge/<slug>; same under /en/. Header and footer «پایگاه دانش» → /knowledge. Homepage knowledge section shows the 3 newest items automatically.

## Knowledge home (Figma 33:6798), top to bottom
1. Shared header.
2. Featured slider (light bg ~580px): chip, date with calendar icon, title 24 bold, summary, blue «ادامه مطلب» button with arrow, cover in the hexagon frame on the left (Figma hexagon mask + pale blue hexagon), dots. Items with featured:true (max 3), else 3 newest.
3. Category pills: «تازه‌ترین اخبار علمی» filled blue 178×52, «مقالات علمی تخصصی» outline 192×52, plus «رویدادها»; jump to sections; hidden when the category is empty.
4. Latest news: newest 2 news as wide cards 1320×465 (image half 660×465; chip, date, title, summary, «ادامه مطلب»), image side alternates; «مشاهده همه» to the category page if more.
5. Articles «مقالات علمی تخصصی»: 3-per-row grid, cards ~409×538 (rounded image, chip, date, 2-line title, 4-line summary, «ادامه مطلب» link), newest 6 + «مشاهده همه مقالات» if more.
6. Events: same grid, newest 3, hidden if none.
7. Demo request band: reuse DemoRequestForm (info@raydana.com).
8. FAQ «سوالات متداول»: reuse the FAQ accordion (975 wide), 3 questions, text in fa/en.json.
9. Shared footer. Any empty section disappears.

## Article page (Figma 119:1523)
Header; cover full content width (rounded, thin border); two columns: main (right) chip, date, title 24 bold, Markdown body with good Persian typography (headings, lists, quotes, images, tables, links), RTL fa / LTR en; sidebar (left, white card with shadow) «آرشیو مقالات»: 5 newest other items, square thumb, 2-line title, date, small arrow button, sticky on desktop. Related «مقالات مرتبط»: 3 cards like the listing, same category first then newest; hidden if none. Footer. Per-article title/description/og:image, hreflang alternates.

## Fidelity
Measure exact sizes, radii, shadows, colours and spacing from Figma; export the original icons (calendar, arrows, chip dot) and the hexagon frame.

## Starter items (4, distinct; covers = different Figma images)
- erp-vs-crm, articles, featured. «تفاوت ERP و CRM چیست؟ راهنمای جامع انتخاب راهکارهای سازمانی برای ارتقای بهره‌وری» / "ERP vs CRM: a complete guide to choosing enterprise solutions that raise productivity". Cover: laptop "CRM vs ERP". ~300-word article in both languages.
- financial-software, articles. «چرا سازمان‌ها به نرم‌افزار مالی یکپارچه نیاز دارند؟» / "Why organizations need integrated financial software". Cover: process-cubes diagram. Body = Figma slider paragraph.
- user-training, news. «آموزش کاربران در رای‌دانا: از کلاس تا جزوه گام‌به‌گام» / "User training at Raydana: from classes to step-by-step handbooks". Cover: laptop with newspapers. Body = Figma card paragraph (ZWNJ fixed, «» quotes).
- banknote-recognition-app, events, featured. «طراحی اپلیکیشن تشخیص اسکناس برای بانک مرکزی» / "A banknote recognition app for the Central Bank". Cover: phone app (slider image). Full text to be supplied.

## FAQ (fa / en)
1. قیمت راهکار مالی سایبر ERP چگونه محاسبه می‌شود؟ / How is the price of the CYBER ERP finance solution calculated?
2. آیا سایبر ERP به‌صورت ابری هم ارائه می‌شود؟ / Is CYBER ERP available in the cloud?
3. آموزش کاربران چگونه انجام می‌شود؟ / How are users trained?
(answers in src/i18n/fa.json and en.json under knowledge.faq)

## UI strings (fa / en)
پایگاه دانش / Knowledge base; ادامه مطلب / Read more; مشاهده همه / View all; مشاهده همه مقالات / View all articles; آرشیو مقالات / Article archive; مقالات مرتبط / Related articles; سوالات متداول / Frequently asked questions; صفحه بعد / Next page; صفحه قبل / Previous page; هنوز مطلبی در این بخش منتشر نشده است. / Nothing has been published here yet.; همین حالا برای درخواست مشاوره و دمو رایگان اقدام کنید. / Request a free consultation and demo today.

## Mobile
Slider image on top, swipe; pills scroll sideways; wide cards stack; grid 3/2/1; article sidebar goes below as a horizontal list; shorter cover; form and FAQ use the existing mobile versions.

## Persian fixes
«سوالات متدلول» → «سوالات متداول»; «تازه ترین» → «تازه‌ترین»; soft hyphens → ZWNJ. No search, comments or share buttons.
